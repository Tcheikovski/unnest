import unjs from "eslint-config-unjs";
import prettier from "eslint-plugin-prettier/recommended";
export default unjs(
  {
    // ignores: ["**/.nuxt"],
  },
  {
    rules: {
      "unicorn/no-null": "off",
      "unicorn/number-literal-case": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "unicorn/expiring-todo-comments": "off",
      "@typescript-eslint/ban-types": ["error", { types: { Function: false, String: false, Symbol: false } }],
    },
  },
  prettier,
);
