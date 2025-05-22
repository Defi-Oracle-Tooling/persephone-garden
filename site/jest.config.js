module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Ensures the correct test environment is used
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Ensures setup files are loaded after the environment is set up
};