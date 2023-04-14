/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@acme/tailwind-config")],
  content: [
    "../../packages/ui-vue/components/**/*.{js,ts,vue}",
    "./src/pages/**/*.{js,ts,vue}",
    "./src/components/**/*.{js,ts,vue}",
    "./src/layouts/**/*.{js,ts,vue}",
    "./src/App.vue",
  ],
};
