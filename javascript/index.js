"use strict";

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["prettier", "import"],
  globals: {
    __DEV__: true
  },
  rules: {
    // Prettier
    "prettier/prettier": ["error", { printWidth: 110, singleQuote: true }],

    // Import
    "import/order": ["error", { groups: [["builtin", "external", "internal"]] }],
    "import/named": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "import/no-cycle": ["error", { maxDepth: Infinity }],
    "import/no-useless-path-segments": "error",

    // Eslint Possible Errors - https://eslint.org/docs/rules/#possible-errors
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "warn",
    "no-control-regex": "error",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-caller": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unreachable": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-jsdoc": "error",
    "valid-typeof": "error",

    // Eslint Best Practises - https://eslint.org/docs/rules/#best-practices
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    "complexity": ["error", 10],
    "consistent-return": "error",
    "curly": ["error", "all"],
    "default-case": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": ["error", { boolean: false }],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      { ignore: [0, 1, -1, 2], enforceConst: true }
    ],
    "no-multi-spaces": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "require-await": "error",
    "vars-on-top": "error",
    "yoda": "error",

    // Eslint Variables - https://eslint.org/docs/rules/#variables
    "init-declarations": "error",
    "no-delete-var": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",

    // Eslint Stylistic Issues - https://eslint.org/docs/rules/#stylistic-issues
    "array-bracket-spacing": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "camelcase": ["error", { allow: ["^.*_plural$"] }],
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "eol-last": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "id-length": ["error", { min: 1, max: 30 }],
    "indent": ["error", 2, { SwitchCase: 1, "ignoredNodes": ["ObjectExpression"] }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "error",
    "linebreak-style": "error",
    "lines-between-class-members": "error",
    "max-depth": "error",
    "max-lines": "error",
    "max-nested-callbacks": ["error", { max: 3 }],
    "max-params": ["error", 4],
    "max-statements": ["error", { max: 30 }],
    "max-statements-per-line": "error",
    "new-cap": "error",
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true }
    ],
    "one-var-declaration-per-line": "error",
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } }
    ],
    "padded-blocks": ["error", "never"],
    "prefer-object-spread": "error",
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single", { avoidEscape: true }],
    "semi": "error",
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": "error",
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",

    // Eslint ECMASCRIPT 6 - https://eslint.org/docs/rules/#ecmascript-6
    "arrow-body-style": "error",
    "constructor-super": "error",
    "generator-star-spacing": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "off", // conflicts with prettier
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": ["error", { object: true, array: false }],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  }
};
