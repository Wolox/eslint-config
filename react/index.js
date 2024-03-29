"use strict";

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  extends: ["plugin:testing-library/react"],
  plugins: ["react", "import", "jsx-a11y", "babel", "react-hooks", "prettier", "testing-library"],
  globals: {
    __DEV__: true
  },
  rules: {
    // prettier overrides
    "prettier/prettier": ["error", { printWidth: 110, singleQuote: true, trailingComma: "none" }],

    // eslint-config-wolox overrides
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "render",
          "getInitialState",
          "getDefaultProps",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "getSnapshotBeforeUpdate",
          "UNSAFE_componentWillMount",
          "UNSAFE_componentWillUpdate",
          "UNSAFE_componentWillReceiveProps"
        ]
      }
    ],
    indent: "off",
    "no-mixed-operators": "off",
    "no-unused-expressions": "off",
    "no-extra-parens": "off",

    // Babel
    "babel/no-unused-expressions": 1,

    // Import
    "import/default": "error",
    "import/export": "error",
    "import/extensions": [
      "error",
      "never",
      {
        js: "never",
        svg: "always",
        scss: "always",
        png: "always",
        css: "always",
        json: "always"
      }
    ],
    "import/first": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          ["unknown", "internal"],
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "import/prefer-default-export": "off",

    // jsx-a11y
    "jsx-a11y/anchor-is-valid": "error",

    // React
    "react/boolean-prop-naming": "error",
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "error",
    "react/forbid-dom-props": ["error", { forbid: ["style"] }],
    "react/forbid-prop-types": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" }
    ],
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": [1, { 'extensions': [".js", ".tsx"] }],
    "react/jsx-first-prop-new-line": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-depth": ["error", { max: 6 }],
    "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/sort-default-props": "error",
    "react/jsx-tag-spacing": ["error", { beforeClosing: "never" }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false }
    ],
    "react/forbid-foreign-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "error",
    "react/no-render-return-value": "error",
    "react/no-typos": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": [2, { ignore: ["style", "children", "dispatch"] }],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-prop-types": [
      "error",
      {
        ignoreCase: true,
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true
      }
    ],
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};
