import { Config } from 'jest';

export default <Config>{
  displayName: 'ngx-sticky',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/test/test-setup.ts'],
  testMatch: [
    '**/?(*_)+(spec|test).+(ts|mjs|js)?(x)',
  ],
  coverageDirectory: '../../coverage/ngx-sticky',
  collectCoverageFrom: [
    'projects/ngx-sticky/src/**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'src/public-api.ts$',
    'src/lib/utils/index.ts$',
    'src/lib/sticky.module.ts$',
    '^.+\\.d\\.ts$',
    '/e2e/',
    '/node_modules/',
  ],
};
