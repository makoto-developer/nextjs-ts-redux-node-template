module.exports = {
    extends: 'stylelint-config-recommended',
    plugins: [
        'stylelint-order',
        'stylelint-scss',
    ],
    "customSyntax": "postcss-scss",
    ignoreFiles: [
        '**/node_modules/**',
        'dist/',
    ],
    rules: {
        'order/properties-alphabetical-order': true,
        'at-rule-no-unknown': null,
        'block-opening-brace-space-before': 'always',
        'block-opening-brace-newline-after': 'always',
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-before': 'always',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-after': 'always',
        'indentation': 2,
        'max-empty-lines': 1,
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'rule-empty-line-before': [
            'always',
            {'except': ['first-nested']}
        ],
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes'],
            },
        ],
        'string-quotes': 'single',

        "scss/at-rule-no-unknown": true,
    }
}
