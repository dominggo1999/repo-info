/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["prettier", "eslint:recommended"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.json",
          "./apps/*/tsconfig.json",
          "./apps/*/tsconfig.node.json",
          "./apps/*/cypress/tsconfig.json",
          "./packages/*/tsconfig.json",
          "./packages/*/tsconfig.node.json",
          "./packages/*/cypress/tsconfig.json",
        ],
      },
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
  ],
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    ".eslintrc.js",
    "**/*.config.js",
    "**/*.config.cjs",
    "packages/config/**",
    "pwa-asset-generator.mjs",
  ],
};

module.exports = config;
