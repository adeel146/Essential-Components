module.exports = {
    env: {
      commonjs: true,
      node: true,
      browser: true,
      es6: true,
      jest: true,
    },
    extends: ["plugin:sonarjs/recommended"],
    globals: {},
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: ["react", "sonarjs"],
    ignorePatterns: ["node_modules/"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "sonarjs/cognitive-complexity": "error",
      "sonarjs/no-identical-expressions": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/display-name": "error",
      "react/no-children-prop": "error",
      "react/no-deprecated": "error",
      "react/no-danger-with-children": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/prop-types": "error",
      "react/react-in-jsx-scope": "error",
      "	react/require-render-return": "off",
      "react/jsx-key": "error",
      "react/jsx-no-comment-textnodes": "error",
      "react/jsx-no-duplicate-props": "error",
    },
    settings: {
      react: {
        version: "latest", // "detect" automatically picks the version you have installed.
      },
    },
  };
  