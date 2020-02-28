import { configure, addDecorator, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "../src/scss/global.scss";
import { withInfo } from "@storybook/addon-info";

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage
    }
  });

  req.keys().forEach(filename => req(filename));
}
// addDecorator(
//   withInfo({
//     inline: true
//   })
// );

configure(loadStories, module);
