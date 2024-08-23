"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
exports.__esModule = true;
exports.patch = exports.edit = exports.run = exports.open = exports.update = exports.nameTitle = exports.it = exports.init = void 0;
var ActMnu = __importStar(require("../../98.menu.unit/menu.action"));
var ActBus = __importStar(require("../../99.bus.unit/bus.action"));
var Act = __importStar(require());
{
    exports.it.nomTitle;
}
from;
"../{{=it.name}}.action";
var ActVrt = __importStar(require("../../act/vurt.action"));
var ActDsk = __importStar(require("../../act/disk.action"));
var bit, val, idx, dex, lst, dat;
exports._o = _a = void 0, exports.it = (_b = void 0, _b.it), exports.nameTitle = _b.nameTitle;
(function (cpy, _a, Model, bal, _b, Bit, ste) {
    var it = _a.it, nameTitle = _a.nameTitle;
    var it = _b.it, nameTitle = _b.nameTitle;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(bal.dat != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [Act, {}, { it: it, : .nomTitle }] }, dat, bal.dat, src, bal.src)];
                case 1:
                    bit = _c.sent();
                    _c.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
if (bal.val == 1)
    patch(ste, ActMnu.INIT_MENU, bal);
if (bal.slv != null)
    bal.slv({ intBit: { idx: "init-{{=it.name}}" } });
return cpy;
;
exports._p = _c = void 0, exports.it = (_d = void 0, _d.it), exports.nameTitle = _d.nameTitle;
(function (cpy, _a, Model, bal, _b, Bit, ste) {
    var it = _a.it, nameTitle = _a.nameTitle;
    var it = _b.it, nameTitle = _b.nameTitle;
    var exec = require('child_process').exec;
    exec('tsc -b {{=it.pivot}}', function (err, stdout, stderr) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, it, name;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (err) {
                        console.error("exec error: ".concat(err));
                    }
                    process.chdir("../999.vurt");
                    return [4 /*yield*/, ste.bus(ActVrt.BUNDLE_VURT, { src: "{{=it.pivot}}" })];
                case 1:
                    bit = _c.sent();
                    process.chdir("../{{=it.pivot}}");
                    return [4 /*yield*/, ste.bus(ActDsk.READ_DISK, { src: './work/{{=it.pivot}}.js' })];
                case 2:
                    bit = _c.sent();
                    _a = void 0, _b = void 0, it = _b.it, name = _b.name;
                    return [2 /*return*/];
            }
        });
    }); }, bit.dskBit.dat);
    bit = yield ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/{{=it.pivot}}.js', dat: {} }, { it: it, : .name });
});
bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' });
var html = bit.dskBit.dat;
bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' });
var index = bit.dskBit.dat;
bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index });
bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html });
setTimeout(function () {
    if (bal.slv != null)
        bal.slv({}, {}, { it: exports.it, : .nom });
}, Bit, { idx: "update-{{=it.name}}" });
3;
;
;
return cpy;
;
exports._q = _e = void 0, exports.it = (_f = void 0, _f.it), exports.nameTitle = _f.nameTitle;
(function (cpy, _a, Model, bal, _b, Bit, ste) {
    var it = _a.it, nameTitle = _a.nameTitle;
    var it = _b.it, nameTitle = _b.nameTitle;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })];
                case 1:
                    bit = _c.sent();
                    return [4 /*yield*/, ste.hunt(Act, {}, { it: it, : .nomTitle })];
                case 2:
                    bit = _c.sent();
                    return [2 /*return*/];
            }
        });
    });
});
RUN_;
{
    {
        exports.it.nameCaps;
    }
}
{ }
var open = require('open');
var loc = './vrt.opn.bat';
bit = await (0, exports.open)(loc);
setTimeout(function () {
    if (bal.slv != null)
        bal.slv({}, {}, { it: exports.it, : .nom });
}, Bit, { idx: "open-{{=it.name}}" });
33;
return cpy;
;
exports._r = _g = void 0, exports.it = (_h = void 0, _h.it), exports.nameTitle = _h.nameTitle;
(function (cpy, _a, Model, bal, _b, Bit, ste) {
    var it = _a.it, nameTitle = _a.nameTitle;
    var it = _b.it, nameTitle = _b.nameTitle;
    return __awaiter(void 0, void 0, void 0, function () {
        var open, loc;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    open = require('open');
                    loc = './vrt.gil.bat';
                    return [4 /*yield*/, open(loc)];
                case 1:
                    bit = _c.sent();
                    setTimeout(function () {
                        if (bal.slv != null)
                            bal.slv({}, {}, { it: it, : .nom });
                    }, Bit, { idx: "run-{{=it.name}}" });
                    return [2 /*return*/];
            }
        });
    });
});
;
return cpy;
;
exports._s = _j = void 0, exports.it = (_k = void 0, _k.it), exports.nameTitle = _k.nameTitle;
(function (cpy, _a, Model, bal, _b, Bit, ste) {
    var it = _a.it, nameTitle = _a.nameTitle;
    var it = _b.it, nameTitle = _b.nameTitle;
    var exec = require('child_process').exec;
    process.chdir("../../studio/");
    exec('start Code.exe ../packages/gillisse', function (err, stdout, stderr) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (err) {
                console.error("exec error: ".concat(err));
            }
            process.chdir("../packages/{{=it.pivot}}");
            if (bal.slv != null)
                bal.slv({}, {}, { it: it, : .nom });
            return [2 /*return*/];
        });
    }); }, Bit, { idx: "edit-{{=it.name}}", dat: {} });
});
;
;
return cpy;
;
var patch = function (ste, type, bale) { return ste.dispatch({ type: type, bale: bale }); };
exports._t = _l = void 0, exports.it = (_m = void 0, _m.it), exports.nameTitle = _m.nameTitle;
(function (cpy, _a, Model, bal, _b, Bit, ste) {
    var it = _a.it, nameTitle = _a.nameTitle;
    var it = _b.it, nameTitle = _b.nameTitle;
    debugger;
    return cpy;
});
{
    exports.it.nameTitle;
}
Model;
from;
"../{{=it.name}}.model";
Bit;
from;
"../fce/{{=it.name}}.bit";
//# sourceMappingURL=pivot.buzz.js.map