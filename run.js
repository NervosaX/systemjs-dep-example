var Builder = require("systemjs-builder");


var builder = new Builder();
builder.config({
  baseURL: "file:" + process.cwd()
});

builder.trace("foo")
  .then(function(trace) {
    builder.buildTree(trace.tree, "output.js");
  });
