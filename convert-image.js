/* eslint-disable */
const input = "build_deploy/assets/**/*.{jpg,JPG,jpeg,JPEG,png}";
const output = "build_deploy/assets/";

const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin([input], output, {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Public images has been converted to WebP!");
});

const inputStatic = "build_deploy/static/media/**/*.{jpg,JPG,jpeg,JPEG,png}";
const outputStatic = "build_deploy/static/media/";

imagemin([inputStatic], outputStatic, {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Static images has been converted to WebP!");
});
