/* eslint-disable no-use-before-define */
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.js',
        '*.js',
        '!__tests__/**/*.js',
        '!jest*.js',
        '!coverage/**',
        '!config/**',
        '!scripts/**',
        '!integration/**'
    ],
    coverageDirectory: 'coverage',
    modulePathIgnorePatterns: [
        'helpers/*',
        '<rootDir>/dist',
        '<rootDir>/schema',
        'integration/*'
    ],
    moduleFileExtensions: ['js','ts'],
    resetMocks: true,
    testEnvironment: 'node'
}