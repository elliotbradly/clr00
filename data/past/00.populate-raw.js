var FS = require("fs-extra");
var S = require("string");
PNG = require("pngjs").PNG;
var convert = require("color-convert");

//got to update some boundary data buddy
//https://htmlcolorcodes.com/color-names/

//the poor are those who can not control there appetites

var boundaryData = {
  pink00: "#ffc0cb",
  pink01: "#FFB6C1",
  pink02: "#FF69B4",
  pink03: "#FF1493",
  pink04: "#ffc0cb",
  pink05: "#C71585",
  pink06: "#DB7093",

  red00: "#FF0000",
  red01: "#CD5C5C",
  red02: "#F08080",
  red03: "#FA8072",
  red04: "#CD5C5C",
  red05: "#E9967A",
  red06: "#FFA07A",
  red07: "#DC143C",
  red08: "#B22222",
  red09: "#8B0000",

  orange00: "#FFA500",
  orange01: "#FFA07A",
  orange02: "#FF6347",
  orange03: "#FF4500",
  orange04: "#FF8C00",
  orange05: "#FF7F50",

  yello00: "#FFFF00",
  yello01: "#FFD700",
  yello02: "#FFFFE0",
  yello03: "#FFFACD",
  yello04: "#FAFAD2",
  yello05: "#FFEFD5",
  yello06: "#EEE8AA",
  yello07: "#F0E68C",
  yello08: "#BDB76B",

  purple00: "#800080",
  purple01: "#E6E6FA",
  purple02: "#D8BFD8",
  purple03: "#DDA0DD",
  purple04: "#EE82EE",
  purple05: "#DA70D6",
  purple06: "#FF00FF",
  purple07: "#BA55D3",
  purple08: "#9370DB",
  purple09: "#663399",
  purple10: "#9932CC",
  purple11: "#8B008B",
  purple12: "#4B0082",
  purple13: "#6A5ACD",
  purple14: "#483D8B",
  purple15: "#7B68EE",

  green00: "#00FF00",
  green01: "#ADFF2F",
  green02: "#7FFF00",
  green03: "#32CD32",
  green04: "#98FB98",
  green05: "#90EE90",
  green06: "#00FA9A",
  green07: "#00FF7F",
  green08: "#3CB371",
  green09: "#2E8B57",
  green10: "#228B22",
  green11: "#008000",
  green12: "#006400",
  green13: "#9ACD32",
  green14: "#6B8E23",
  green15: "#808000",
  green16: "#556B2F",
  green17: "#66CDAA",
  green18: "#8FBC8B",
  green19: "#20B2AA",
  green20: "#008B8B",
  green21: "#008080",

  blue00: "#0000FF",
  blue01: "#00FFFF",
  blue02: "#E0FFFF",
  blue03: "#AFEEEE",
  blue04: "#7FFFD4",
  blue05: "#40E0D0",
  blue06: "#48D1CC",
  blue07: "#00CED1",
  blue08: "#5F9EA0",
  blue09: "#4682B4",
  blue10: "#B0C4DE",
  blue11: "#B0E0E6",
  blue12: "#ADD8E6",
  blue13: "#87CEEB",
  blue14: "#87CEFA",
  blue15: "#00BFFF",
  blue16: "#1E90FF",
  blue17: "#6495ED",
  blue18: "#7B68EE",
  blue19: "#4169E1",
  blue20: "#0000CD",
  blue21: "#00008B",
  blue22: "#1E90FF",
  blue23: "#000080",
  blue24: "#191970",

  brown00: "#964B00",
  brown01: "#FFF8DC",
  brown02: "#FFEBCD",
  brown03: "#FFE4C4",
  brown04: "#FFDEAD",
  brown05: "#F5DEB3",
  brown06: "#DEB887",
  brown07: "#D2B48C",
  brown08: "#BC8F8F",
  brown09: "#F4A460",
  brown10: "#DAA520",
  brown11: "#B8860B",
  brown12: "#CD853F",
  brown13: "#D2691E",
  brown14: "#8B4513",
  brown15: "#A0522D",
  brown16: "#A52A2A",
  brown17: "#800000",

  white00: "#ffffff",
  white01: "#FFFAFA",
  white02: "#F0FFF0",
  white03: "#F5FFFA",
  white04: "#F0FFFF",
  white05: "#F0F8FF",
  white06: "#F8F8FF",
  white07: "#F5F5F5",
  white08: "#FFF5EE",
  white09: "#F5F5DC",
  white10: "#FDF5E6",
  white11: "#FFFAF0",
  white12: "#FFFFF0",
  white13: "#FAEBD7",
  white14: "#FAF0E6",
  white15: "#FFF0F5",
  white16: "#FFE4E1",

  black00: "#000000",

  grey00: "#708090",

  gray00: "#808080",
  gray00: "#DCDCDC",
  gray00: "#D3D3D3",
  gray00: "#C0C0C0",
  gray00: "#A9A9A9",
  gray00: "#808080",
  gray00: "#696969",
  gray00: "#778899",
  gray00: "#708090",
  gray00: "#2F4F4F",
};

near0 = require("nearest-color").from(boundaryData);

var fromHexToRGB = (hex) => {
  return convert.hex.rgb(hex);
};

var populate = () => {
  var clrList = FS.readJSONSync("./clr/colornames.json");
  clrList.forEach((a, b) => {
    var nom = S(a.name).slugify().s;
    var src = fromHexToRGB(a.hex);
    var flv = near0(a.hex).name;
    flv = flv.substring(0, flv.length - 2);

    //console.log(flv);

    setTimeout(() => {
      FS.createReadStream("in.png")
        .pipe(
          new PNG({
            filterType: 4,
          })
        )
        .on("parsed", function () {
          for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
              var idx = (this.width * y + x) << 2;
              this.data[idx] = src[0];
              this.data[idx + 1] = src[1];
              this.data[idx + 2] = src[2];
            }
          }

          var idx = "./raw/" + flv + "/" + nom + ".png";
          console.log("write " + idx);
          FS.ensureFileSync(idx);

          this.pack().pipe(FS.createWriteStream(idx));
        });
    }, 33 * b);
  });
};

FS.ensureDirSync("./raw");

FS.emptyDir("./raw", populate);
