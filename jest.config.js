/** @type {import('ts-jest').JestConfigWithTsJest} */
export const preset = 'ts-jest';
export const testEnvironment = 'jsdom';
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
export const transform = {
  '^.+\\.(ts|tsx)$': 'ts-jest',
};
export const moduleNameMapper = {
  '\\.(css|scss)$': 'identity-obj-proxy',
};
export const setupFilesAfterEnv = ['<rootDir>/jest.setup.ts'];
