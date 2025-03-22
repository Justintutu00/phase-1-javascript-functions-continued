console.log("Loading helpers.js...");

const chai = require("chai");
const sinon = require("sinon");
global.expect = chai.expect;
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
require("@babel/register")({
  presets: ["@babel/preset-env"],
});

console.log("Reading HTML file...");
const html = fs.readFileSync(path.resolve(__dirname, "..", "index.html"), "utf-8");

console.log("Transforming JavaScript file...");
try {
  require(path.resolve(__dirname, "..", "index.js"));
  console.log("JavaScript transformed successfully.");
} catch (error) {
  console.error("Babel transformation failed:", error);
}

console.log("Setting up JSDOM...");
require("jsdom-global")(html);

console.log("Setup complete.");
