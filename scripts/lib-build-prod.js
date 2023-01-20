#!/usr/bin/env node

const p = require('path');

const {
  assertProcessStartedWithNpm,
  chdir,
  exec,
  logError,
  logInfo,
  logSuccess,
  npm,
  readFile,
  readJson,
  removeMapFileComment,
  writeFile,
  writeJson,
} = require('./scripts.utils');

/**
 *
 * @param {NodeJS.Process} proc
 * @param {{
 *   libRootPath: string;
 *   npmScriptNameExpected: string;
 * }} options
 */
async function main(proc, {
  libRootPath = './projects/ngx-sticky',
  npmScriptNameExpected = 'lib:build:prod',
} = {}) {
  logInfo(`Build ${libRootPath}`);

  assertProcessStartedWithNpm(proc, npmScriptNameExpected);

  chdir(proc, p.join(__dirname, '..'));

  const $ = exec.bind(null, proc);
  await $('pwd');

  const { name: libPkgName, version: libPkgVersion } = await readJson(p.join(libRootPath, 'package.json'));
  const libPkgNameDashed = libPkgName.toLowerCase().replace(/^@/, '').replace(/\//g, '-');

  const tsConfigJsonOriginal = await readJson(p.join(libRootPath, 'tsconfig.lib.json'));
  const ngPackageJsonOriginal = await readJson(p.join(libRootPath, 'ng-package.json'));

  const stagingOutputPath = p.join('dist', `_${libPkgNameDashed}-${libPkgVersion}`);
  const stableOutputPath = p.join('dist', 'unpacks', `${libPkgNameDashed}-${libPkgVersion}`);
  const libPacksDir = p.join('dist', 'packs');

  await $('rm', ['-fr', stagingOutputPath]);
  await $('mkdir', ['-p', stagingOutputPath]);

  // generate tsconfig.lib.json
  const tsconfigLibJson = {
    ...tsConfigJsonOriginal,
    /** @type {import('typescript').CompilerOptions} */
    compilerOptions: {
      ...tsConfigJsonOriginal.compilerOptions,
      declarationMap: true,
    },
    angularCompilerOptions: {
      compilationMode: 'partial',
    },
  };
  await writeJson(p.join(stagingOutputPath, 'tsconfig.lib.json'), tsconfigLibJson);

  // generate ng-package.json
  const ngPackageJson = {
    ...ngPackageJsonOriginal,
    dest: '.',
    deleteDestPath: false,
  };
  await writeJson(p.join(stagingOutputPath, 'ng-package.json'), ngPackageJson);

  // copy all files required to compile
  await $('cp', [
    '-R',
    p.join(libRootPath, 'src'),
    p.join(libRootPath, 'package.json'),
    p.join(libRootPath, 'tsconfig.base.json'),
    stagingOutputPath,
  ]);

  // run ng-packagr cli
  await $('node', [
    './node_modules/ng-packagr/cli/main.js',
    '--project', p.join(stagingOutputPath, 'ng-package.json'),
    '--config', p.join(stagingOutputPath, 'tsconfig.lib.json'),
  ]);

  await $('pwd');

  // regenerate entry point generated by ng-packagr during compilation to make source resolution works well
  const entryPointGeneratedByNgPackager = await readFile(p.join(stagingOutputPath, 'index.d.ts'));
  const pathOfSourceMapRelatedToEntryPointGeneratedByNgPackagr = p.join(stagingOutputPath, `${libPkgNameDashed}.d.ts.map`);
  const sourceMapRelatedToEntryPointGenerated = await readJson(pathOfSourceMapRelatedToEntryPointGeneratedByNgPackagr);
  const pathOfEntryPointGeneratedGeneratedByNgPackagr = p.join(stagingOutputPath, sourceMapRelatedToEntryPointGenerated.sources[0]);
  await writeFile(pathOfEntryPointGeneratedGeneratedByNgPackagr, removeMapFileComment(entryPointGeneratedByNgPackager));

  // remove compilation time files
  await $('rm', [
    p.join(stagingOutputPath, 'ng-package.json'),
    p.join(stagingOutputPath, 'tsconfig.base.json'),
    p.join(stagingOutputPath, 'tsconfig.lib.json'),
  ]);

  // copy readme and license files
  await $('cp', ['README.md', 'LICENSE', stagingOutputPath]);

  // finalize by moving staging build and packing
  await $('rm', ['-fr', stableOutputPath]);
  await $('mkdir', ['-p', p.dirname(stableOutputPath)]);
  await $('mv', [stagingOutputPath, stableOutputPath]);
  await $('mkdir', ['-p', libPacksDir]);
  await npm(proc, ['pack', stableOutputPath, '--pack-destination', libPacksDir]);

  logSuccess(`${libPkgName} ${libPkgVersion}`);
}

main(process).catch(err => {
  logError('FATAL ERROR!');
  console.error(err);
  process.exit(99);
});
