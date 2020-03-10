module.exports = {
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-notes"
  ],
  stories: ["../src/**/*stories.(js|mdx)"]
};
