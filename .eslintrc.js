/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: ["@remix-run/eslint-config"],
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "jsx-a11y/no-redundant-roles": ["off"],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "express",
            importNames: ["json"],
            message: 'Please use "@remix-run/node" instead',
          },
        ],
      },
    ],
  },
};
