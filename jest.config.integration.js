module.exports = {
    modulePathIgnorePatterns: [
        'helpers/*',
        '<rootDir>/dist',
        '<rootDir>/schema'
    ],
    testRegex: '\/__tests__\/integration\/.*integration.(test|spec).[jt]sx?',
    moduleFileExtensions: ['js','ts'],
    resetMocks: true,
    testEnvironment: 'node'
}