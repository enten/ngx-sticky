import { Config } from 'jest';

export default <Config>{
  displayName: 'ngx-sticky-app',
  preset: '../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  testMatch: [
    '**/?(*_)+(spec|test).+(ts|js)?(x)',
  ],
  coverageDirectory: '../coverage/ngx-sticky-app',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'src/public-api.ts$',
    'src/lib/utils/index.ts$',
    'src/lib/sticky.module.ts$',
    '^.+\\.d\\.ts$',
    '/e2e/',
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^@enten/ngx-sticky$': '<rootDir>/../projects/ngx-sticky/src/public-api.ts',
    '^@enten/ngx-sticky/(.+)$': '<rootDir>/../projects/ngx-sticky/src/$1',
  },
};
