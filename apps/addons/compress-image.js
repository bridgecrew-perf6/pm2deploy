/* eslint-disable */
const imagemin = require("imagemin");
const mozJpeg = require("imagemin-mozjpeg");
const optiPNG = require("imagemin-optipng");
const gifSicle = require("imagemin-gifsicle");
const svgo = require("imagemin-svgo");

// const input = "build_deploy/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
const input = "build_deploy/assets/meta.png";
const output = "build_deploy/";

(async () => {
  const files = await imagemin([input], {
    destination: output,
    plugins: [
      mozJpeg({
        quality: 82,
      }),
      optiPNG({ optimizationLevel: 4 }),
      svgo(),
      gifSicle(),
    ],
  });

  files.map((file) => {
    console.log(`✅ ${file.sourcePath} -> ${file.destinationPath}`);
  });
})();
