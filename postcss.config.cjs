const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const postcssvars = require("postcss-css-variables");

module.exports = {
  plugins: [
    postcssvars(),
    postcssPresetEnv({
      autoprefixer: true,
      browsers: ["Chrome > 40", "IE > 8", "Samsung > 1"],
    }),
  ],
};
