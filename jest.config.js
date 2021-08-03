module.exports = {
  rootDir: './',
  preset: 'react-native',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  testPathIgnorePatterns: ['/ios/', '/android/'],
  watchPathIgnorePatterns: ['./node_modules'],
  setupFiles: ['./jest/jestSetup.ts'],
  setupFilesAfterEnv: ['./jest/jestAfterSetup.ts'],
};
