module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: [
    'ts',
    'html',
    'js',
    'json',
    'mjs',
  ],
  coverageReporters: [
    'html',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/build/',
    '/tmp/',
  ],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)',
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/HTMLCommentSerializer',
    'jest-preset-angular/build/AngularSnapshotSerializer',
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer',
  ],
};
