module.exports = {
	preset: 'ts-jest',
	setupFilesAfterEnv: [ './test/setup.ts' ],
	moduleNameMapper: {
		'\\.(scss|less)$': '<rootDir>/test/__mocks__/styleMock.js'
	},
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json'
		}
	}
};
