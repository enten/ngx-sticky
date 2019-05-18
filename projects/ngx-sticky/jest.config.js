module.exports = {
  "testMatch": [
    "**/?(*_)+(spec|test).+(ts|js)?(x)"
  ],
  "collectCoverageFrom": [
    "projects/ngx-sticky/src/**/*.{ts,tsx}"
  ],
  "coveragePathIgnorePatterns": [
    "src/public-api.ts$",
    "src/lib/utils/index.ts$",
    "src/lib/sticky.module.ts$",
    "^.+\\.d\\.ts$",
    "/e2e/",
    "/node_modules/"
  ],
};
