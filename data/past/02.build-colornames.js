var FS = require("fs-extra");
var S = require("string");
PNG = require("pngjs").PNG;
var convert = require("color-convert");

var srcList = FS.readdirSync("./src");
var colors = {};

var flavor = FS.readJSONSync("./bld/colorflavors.json");

srcList.forEach((a) => {
  var swtLst = FS.readdirSync("./src/" + a);

  var src = a;

  swtLst.forEach((c, d) => {
    var idx = c.split(".")[0];
    colors[idx] = src;
  });
});

var clrList = FS.readJSONSync("./clr/colornames.json");

clrList.forEach((a, b) => {
  var idx = S(a.name).slugify().s;
  //console.log("flavor " + flavor[idx]);
  a.flv = flavor[idx];
});

FS.writeJSONSync("./bld/colornames.json", clrList);
console.log("writing " + "./bld/colornames.json");
