module.exports = {
  displayName: 'ngx-sticky-app',
  preset: '../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  "testMatch": [
    "**/?(*_)+(spec|test).+(ts|js)?(x)"
  ],
  coverageDirectory: '../coverage/ngx-sticky-app',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    'src/public-api.ts$',
    'src/lib/utils/index.ts$',
    'src/lib/sticky.module.ts$',
    '^.+\\.d\\.ts$',
    '/e2e/',
    '/node_modules/'
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
