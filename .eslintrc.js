// eslint-disable-next-line import/no-unassigned-import
require('@rushstack/eslint-patch/modern-module-resolution');

const { configs } = require('@nullvoxpopuli/eslint-configs');
const prettierConfig = require('./.prettierrc');

const config = configs.ember();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['**/*.js', '**/*.ts', '**/*.cjs', '**/*.mjs'],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
      },
    },
  ],
};
