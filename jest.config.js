const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
};
