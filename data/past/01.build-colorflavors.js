var FS = require("fs-extra");
var S = require("string");
PNG = require("pngjs").PNG;
var convert = require("color-convert");

var fin = "./bld/colorflavors.json";

var data = {};

FS.ensureDirSync("./src");

if (FS.existsSync("./src") == false) {
  //read from colors flavors and recreate folder structure
  // ...
}

var srcList = FS.readdirSync("./src");
srcList.forEach((a) => {
  console.log("creating " + a);
  //data[a] = [];

  var flvList = FS.readdirSync("./src/" + a);
  flvList.forEach((b) => {
    var idx = S(b.split(".")[0]).slugify().s;
    data[idx] = a;
  });
});

FS.writeJSONSync(fin, data);
console.log("writing... " + fin);
