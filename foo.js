define([
  "bar",
  "baz",
  "bar"
], function(Bar, Baz, Bar) {
  Bar();
  Baz();
});
