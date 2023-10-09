#!/usr/bin/env node

const p = require('path');

const {
  assertProcessStartedWithNpm,
  chdir,
  exec,
  existsPath,
  gitRevShortName,
  logError,
  logInfo,
  logSuccess,
  ls,
  npm,
  readJson,
} = require('./scripts.utils');

const GH_PAGES_BASE_URL = '/ngx-sticky';

/**
 *
 * @param {NodeJS.Process} proc
 * @param {{
 *   appBuildTarget: string;
 *   libBuildNpmScript: string;
 *   libRootPath: string;
 *   npmScriptNameExpected: string;
* }} options
 */
async function main(proc, {
  appBuildTarget = 'ngx-sticky-app:build:production',
  libBuildNpmScript = 'lib:build:prod',
  libRootPath = './projects/ngx-sticky',
  npmScriptNameExpected = 'dev-app:build:prod',
} = {}) {
  logInfo(`Build ngx-sticky-app`);

  assertProcessStartedWithNpm(proc, npmScriptNameExpected);

  chdir(proc, p.join(__dirname, '..'));

  const $ = exec.bind(null, proc);
  await $('pwd');

  const { name: libPkgName, version: libPkgVersion } = await readJson(p.join(libRootPath, 'package.json'));
  const libPkgNameInDashCase = libPkgName.toLowerCase().replace(/^@/, '').replace(/\//g, '-');

  const branchName = await gitRevShortName(proc, 'HEAD');
  const mainBranch = branchName === 'main';

  // build lib when pack not exists
  const libPackPath = p.join('dist', 'packs', `${libPkgNameInDashCase}-${libPkgVersion}.tgz`);
  if (!(await existsPath(libPackPath))) {
    const buildLibExitCode = await npm(proc, ['run', libBuildNpmScript]);
    if (buildLibExitCode) {
      return proc.exit(buildLibExitCode);
    }
  }

  const baseHref = GH_PAGES_BASE_URL + (mainBranch ? '' : '/v/' + libPkgVersion) + '/';
  const stagingOutputPath = p.join('dist', '_gh-pages-ngx-sticky' + (mainBranch ? '' : '-v-' + libPkgVersion));
  const stableOutputPath = p.join('dist', 'gh-pages', 'ngx-sticky', ...(mainBranch ? [] : ['v', libPkgVersion]));

  await $('rm', ['-fr', stagingOutputPath]);
  await $('mkdir', ['-p', stagingOutputPath]);

  // install right library version
  await npm(proc, ['install', '-f', libPackPath]);

  // run ng cli
  await exec(proc, 'node', [
    './node_modules/@angular/cli/bin/ng',
    'run', appBuildTarget,
    '--output-path', stagingOutputPath,
    '--base-href', baseHref,
  ]);

  await $('pwd');

  // finalize by moving staging build
  if (!mainBranch) {
    await $('rm', ['-fr', stableOutputPath]);
    await $('mkdir', ['-p', p.dirname(stableOutputPath)]);
    await $('mv', [stagingOutputPath, stableOutputPath]);
  } else {
    const filesToRemove = (await ls(stableOutputPath))
      .filter(dirent => dirent.name !== 'v')
      .map(dirent => p.join(stableOutputPath, dirent.name));
    const filesToMove = (await ls(stagingOutputPath))
      .map(dirent => p.join(stagingOutputPath, dirent.name));
    await $('mkdir', ['-p', stableOutputPath]);
    if (filesToRemove.length) {
      await $('rm', ['-fr', filesToRemove]);
    }
    if (filesToMove.length) {
      await $('mv', [...filesToMove, stableOutputPath]);
    }
  }
  await $('rm', ['-fr', stagingOutputPath]);

  // uninstall right library version
  await npm(proc, ['uninstall', '-f', libPkgName]);

  logSuccess(`ngx-sticky-app ${libPkgVersion}`);
}

main(process).catch(err => {
  logError('FATAL ERROR!');
  console.error(err);
  process.exit(99);
});
