module.exports = {
  testMatch: ['**/*.test.js'],
  testPathDirs: ['src/test'],
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/test/mocks/styleMock.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/test/setupTests.js',
};
