/* eslint-disable */
const input = "build/assets/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
const output = "build_deploy/assets/";

const compressImage = require("compress-images");

compressImage(
  input,
  output,
  { compress_force: true, statistic: false, autoupdate: false },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "81"] } },
  { png: { engine: "pngquant", command: ["--quality=30-60"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function() {}
);
