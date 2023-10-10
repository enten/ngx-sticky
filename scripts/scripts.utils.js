const { execSync, spawn } = require('child_process');
const { promises: fs } = require('fs');

const chalk = require('chalk');

//#region assertion utils

/**
 *
 * @param {NodeJS.Process} proc
 * @param {string} scriptName
 * @returns {string}
 */
const assertProcessStartedWithNpm = (proc, scriptName) => {
  if (!proc.env['npm_execpath']) {
    const msg = `HALT! Rerun this script with: npm run ${scriptName}`;
    logWarning(msg);
    throw new Error(msg);
  }
  return proc.env['npm_execpath'];
};
exports.assertProcessStartedWithNpm = assertProcessStartedWithNpm;

//#endregion

//#region fs utils

/**
 *
 * @param {string} path
 * @returns {Promise<import('fs').Dirent[]>}
 */
const ls = async (path = '.') => {
  logOperation(`ls ${path}`);
  if (!(await existsPath(path))) {
    return [];
  }
  return await fs.readdir(path, { withFileTypes: true });
};
exports.ls = ls;

/**
 *
 * @param {string} path
 * @returns {Promise<boolean>}
 */
const existsPath = async path => {
  let result = true;
  try {
    await fs.access(path, fs.F_OK);
  } catch (err) {
    result = false;
  }
  return result;
}
exports.existsPath = existsPath;

/**
 *
 * @param {string} path
 * @returns {Promise<string>}
 */
const readFile = async path => {
  logOperation(`read file: ${path}`);
  return await fs.readFile(path, 'utf-8');
};
exports.readFile = readFile;

/**
 *
 * @param {string} path
 * @param {string} value
 * @returns {Promise<void>}
 */
const writeFile = async (path, value) => {
  logOperation(`write file: ${path}`);
  await fs.writeFile(path, value, 'utf-8');
};
exports.writeFile = writeFile;

/**
 *
 * @param {string} path
 * @returns {Promise<string>}
 */
const readJson = async path => {
  logOperation(`read json: ${path}`);
  return JSON.parse(await fs.readFile(path, 'utf-8'));
};
exports.readJson = readJson;

/**
 *
 * @param {string} path
 * @param {string} value
 * @param {number} space
 * @returns {Promise<void>}
 */
const writeJson = async (path, value, space = 2) => {
  logOperation(`write json: ${path}`);
  await fs.writeFile(path, JSON.stringify(value, null, space), 'utf-8');
};
exports.writeJson = writeJson;

//#endregion

//#region log utils

/**
 *
 * @param {string} msg
 */
const logError = msg => console.error('❌', chalk.bold(chalk.red(msg)));
exports.logError = logError;

/**
 *
 * @param {string} msg
 */
const logInfo = msg => console.log('ℹ️', chalk.blue(msg));
exports.logInfo = logInfo;

/**
 *
 * @param {string} msg
 */
const logSuccess = msg => console.log('✅', msg);
exports.logSuccess = logSuccess;

/**
 *
 * @param {string} msg
 */
const logWarning = msg => console.warn('🚧', chalk.yellow(msg));
exports.logWarning = logWarning;

/**
 *
 * @param {string} msg
 */
const logOperation = msg => console.log('🚧', chalk.grey(msg));
exports.logOperation = logOperation;

//#endregion

//#region process utils

/**
 *
 * @param {NodeJS.Process} proc
 * @param {string} path
 */
const chdir = (proc, path) => {
  logOperation(`cd ${path}`);
  proc.chdir(path);
};
exports.chdir = chdir;

/**
 *
 * @param {NodeJS.Process} proc
 * @param {string} cmd
 * @param {string[]} args
 * @returns {Promise<number>}
 */
const exec = (proc, cmd, args) => {
  args = [].concat(args || []);
  return new Promise((resolve, reject) => {
    logOperation([cmd, ...args].join(' '));
    const child = spawn(cmd, args,  { stdio: 'inherit' });
    // child.stdout.pipe(proc.stdout);
    // child.stderr.pipe(proc.stderr);
    child.on('error', reject)
    child.on('close', resolve);
  });
};
exports.exec = exec;

/**
 *
 * @param {NodeJS.Process} proc
 * @param {string[]} args
 * @returns {Promise<string>}
 */
const gitRevShortName = async (proc, ...args) => {
  return execSync(
    ['git', 'rev-parse', '--abbrev-ref', ...args].join(' '),
    { encoding: 'utf-8' },
  ).trim();
};
exports.gitRevShortName = gitRevShortName;

/**
 *
 * @param {NodeJS.Process} proc
 * @param {string[]} args
 * @returns {Promise<number>}
 */
const npm = async (proc, npmPackArgs) => {
  let npmBin = 'npm';
  if (proc.env['npm_execpath']) {
    npmBin = 'node';
    npmPackArgs = [proc.env['npm_execpath'], ...npmPackArgs];
  }
  return await exec(proc, npmBin, npmPackArgs);
};
exports.npm = npm;

//#endregion

//#region source map utils

/**
 *
 * @param {string} content
 * @returns {string}
 */
const removeMapFileComment = content => {
  return content.split(/\n\/\/# sourceMappingURL=([^$|\n]+)/, 1)[0];
};
exports.removeMapFileComment = removeMapFileComment;

//#endregion
