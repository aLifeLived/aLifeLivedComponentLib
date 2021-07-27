module.exports = {
  rootDir: './',
  preset: 'react-native',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/__mocks__/globalMock.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  testPathIgnorePatterns: ['/ios/', '/android/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules'],
};
