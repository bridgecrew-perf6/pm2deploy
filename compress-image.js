/* eslint-disable */
const input = "build_deploy/assets/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
const output = "build_deploy/assets/";

const imagemin = require("imagemin");
const mozJpeg = require("imagemin-mozjpeg");
const optiPNG = require("imagemin-optipng");
const gifSicle = require("imagemin-gifsicle");
const svgo = require("imagemin-svgo");

imagemin([input], output, {
  use: [
    mozJpeg({
      quality: 82
    }),
    optiPNG({ optimizationLevel: 4 }),
    svgo(),
    gifSicle()
  ]
}).then(function(a) {
  console.log("Public images have been compressed!");
});

const inputStatic = "build_deploy/static/media/**/*.{jpg,JPG,jpeg,JPEG,png}";
const outputStatic = "build_deploy/static/media/";

imagemin([inputStatic], outputStatic, {
  use: [
    mozJpeg({
      quality: 82
    }),
    optiPNG({ optimizationLevel: 4 })
  ]
}).then(function(a) {
  console.log("Static images have been compressed!");
});
