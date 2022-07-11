module.exports = {
  rootDir: './',
  preset: 'jest-expo',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '\\.svg$': '<rootDir>/jest-svg-transformer.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|@react-navigation|react-native|react-native-button|expo(nent)?|@expo(nent)?/.*|expo-av|@sentry/react-native|@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  testPathIgnorePatterns: ['/ios/', '/android/'],
  watchPathIgnorePatterns: ['./node_modules'],
  setupFiles: ['./jest/jestSetup.ts'],
  setupFilesAfterEnv: ['./jest/jestAfterSetup.ts'],
};
