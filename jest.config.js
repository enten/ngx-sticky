module.exports = {
  "testMatch": [
    "<rootDir>/src/**/?(*_)+(spec|test).+(ts|js)?(x)"
  ],
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.{ts,tsx}"
  ],
  "coveragePathIgnorePatterns": [
    "src/main.ts$",
    "src/polyfills.ts$",
    "src/app/app-routing.module.ts$",
    "src/app/app.module.ts$",
    "src/environments/",
    "/projects/",
    "^.+\\.d\\.ts$",
    "/e2e/",
    "/node_modules/"
  ],
};