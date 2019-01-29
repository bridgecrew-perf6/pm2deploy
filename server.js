require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");

const port = process.env.PORT || 8000;
const app = express();

const targetFolder = "build_deploy";

app.use(helmet({ hsts: { maxAge: 31536000 } }));

app.use(express.static(path.join(__dirname, targetFolder)));
app.use((req, res, next) => {
  let err = null;
  try {
    decodeURIComponent(req.path);
  } catch (e) {
    err = e;
  }
  if (err) return res.redirect("/404");

  next();
  return true;
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, targetFolder, "index.html"));
});

app.listen(port);
