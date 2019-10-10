module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	extends: ['keystone', 'plugin:prettier/recommended'],
	env: { es6: true, browser: true, node: true, mocha: true, jest: true, jasmine: true, jquery: true },
	rules: {
		'arrow-parens': ['error', 'always'],
		'no-trailing-spaces': 'warn',
		'no-case-declarations': [0, 'never'],
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'object-curly-spacing': ['error', 'always'],
		'computed-property-spacing': ['error', 'never'],
		'prettier/prettier': [
			'error',
			{
				printWidth: 130,
				semi: true,
				tabWidth: 2,
				trailingComma: 'es5',
				bracketSpacing: true,
				jsxSingleQuote: false,
				arrowParens: 'always',
				singleQuote: true,
			},
		],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
	},
};
