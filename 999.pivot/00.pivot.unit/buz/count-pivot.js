"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countPivot = void 0;
var bit, val, idx, dex, lst, dat;
const countPivot = async (cpy, bal, ste) => {
    var path = require("path");
    var root = "../";
    var listDir = await FS.readdir(root);
    var pivotList = [];
    listDir.forEach((a) => {
        var pth = root + a;
        if (FS.lstatSync(pth).isDirectory() == false)
            return;
        if (a.includes(".") == false)
            return;
        var sub = a.split(".")[0];
        if (sub.length != 3)
            return;
        if (S(sub).isNumeric().s == false)
            return;
        pivotList.push(a);
    });
    var unitList = [];
    pivotList.forEach((a) => {
        var dir = root + a + "/" + a;
        var list = FS.readdirSync(dir);
        list.forEach((b) => {
            if (b.includes("unit") == false)
                return;
            unitList.push(dir + "/" + b);
        });
    });
    var fileList = [];
    var count = 0;
    var data = {};
    var total = 0;
    //THIS IS THE END
    const finFunc = () => {
        fileList.forEach((a) => {
            if (FS.lstatSync(a).isDirectory() == true)
                return;
            var line = FS.readFileSync(a).toString().split("\n");
            line.forEach((b) => {
                if (b.length < 3)
                    return;
                if (b.includes("//"))
                    return;
                total += 1;
                var idx = S(b).slugify().s;
                if (idx.length < 3)
                    return;
                if (data[idx] != null)
                    return (data[idx] += 1);
                data[idx] = 1;
            });
        });
        var snow = 0;
        var final = 0;
        for (var key in data) {
            snow += 1;
            final += data[key];
        }
        var date = luxon_1.DateTime.now();
        var now = date.toLocaleString(luxon_1.DateTime.DATETIME_MED);
        now = now.replaceAll(":", "-");
        now = S(now).slugify().s;
        var dat = { now, total, snow };
        var countSrc = "./data/count.txt";
        FS.ensureFileSync(countSrc);
        var list = FS.readFileSync(countSrc).toString().split("\n");
        list.unshift(JSON.stringify(dat));
        FS.writeFileSync(countSrc, list.join("\n"));
        if (bal.slv != null)
            bal.slv({ pvtBit: { idx: "count-pivot", dat } });
    };
    const walkFunc = async (err, pathname, dirent) => {
        if (err) {
            throw err;
        }
        if (dirent.isDirectory() && dirent.name.startsWith(".")) {
            return false;
        }
        var want = pathname.split(path.sep);
        fileList.push(want.join("/"));
    };
    unitList.forEach(async (a) => {
        await (0, walk_1.walk)(a, walkFunc);
        var dirs = a.split('/');
        var pythonDir = '../' + dirs[1] + '/python/';
        var renpyDir = '../' + dirs[1] + '/renpy/';
        var screenDir = '../' + dirs[1] + '/screen/';
        var pytExist = FS.existsSync(pythonDir);
        var renExist = FS.existsSync(pythonDir);
        var screenExist = FS.existsSync(screenDir);
        var listing;
        if (pytExist == true) {
            listing = FS.readdirSync(pythonDir);
            listing.forEach((a) => { fileList.push(pythonDir + '/' + a); });
        }
        if (renExist == true) {
            listing = FS.readdirSync(renpyDir);
            listing.forEach((a) => { fileList.push(renpyDir + '/' + a); });
        }
        if (screenExist == true) {
            listing = FS.readdirSync(screenDir);
            listing.forEach((a) => { fileList.push(screenDir + '/' + a); });
        }
        //now check for python
        count += 1;
        if (count == unitList.length)
            finFunc();
    });
    return cpy;
};
exports.countPivot = countPivot;
const FS = require("fs-extra");
const S = require("string");
const walk_1 = require("@root/walk");
const luxon_1 = require("luxon");
//# sourceMappingURL=count-pivot.js.map