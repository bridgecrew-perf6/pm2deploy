import { configure, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/scss/global.scss";

// const req = require.context("../src", true, /.stories.js$/);
// const req = require.context("../src", true, /(stories|.stories)\.(js|mdx)$/);
const req = require.context("../src/", true, /(stories|.stories)\.(js|mdx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addDecorator(
//   withInfo({
//     inline: true
//   })
// );

configure(loadStories, module);
configure([req], module);
