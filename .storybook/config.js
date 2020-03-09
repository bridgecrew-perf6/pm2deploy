import { configure, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/scss/global.scss";

// const req = require.context("../src", true, /.stories.js$/);
const req = require.context("../src", true, /(stories|.stories)\.(js|mdx)$/);

// const x  = module.exports = {
//   stories: ["../src/stories.(js|mdx)"],
//   addons: ["@storybook/addon-docs"]
// };

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addDecorator(
//   withInfo({
//     inline: true
//   })
// );

// configure(loadStories, module);
configure([req], module);
