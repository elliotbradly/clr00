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
exports.__esModule = true;
exports.emptyCollect = exports.deleteCollect = exports.removeCollect = exports.createCollect = exports.writeCollect = exports.readCollect = exports.fetchCollect = exports.updateCollect = exports.initCollect = void 0;
var ActCol = __importStar(require("../../97.collect.unit/collect.action"));
var bit, lst, dat, idx, val, src, dex;
var initCollect = function (cpy, bal, ste) {
    return cpy;
};
exports.initCollect = initCollect;
var updateCollect = function (cpy, bal, ste) {
    return cpy;
};
exports.updateCollect = updateCollect;
//return the first item in a collection
var fetchCollect = function (cpy, bal, ste) {
    if (bal.val == null)
        bal.val = 1;
    if ((bal.bit == null))
        bal.slv({ clcBit: { idx: "fetch-collect-err", src: 'no-bit' } });
    var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
    var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
    if (bal.val == 1)
        bit = cabBit.bitList[0];
    else
        bit = cabBit;
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "fetch-collect", dat: bit } });
    return cpy;
};
exports.fetchCollect = fetchCollect;
var readCollect = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var type, cabBit;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if ((bal.bit == null))
                    bal.slv({ clcBit: { idx: "read-collect-err", src: 'no-bit' } });
                type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
                if (cpy.caboodleBits[type] == null)
                    (0, exports.createCollect)(cpy, { idx: type }, ste);
                cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
                if (!(cabBit.bits[bal.idx] == null)) return [3 /*break*/, 2];
                return [4 /*yield*/, ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, bit: bal.bit })];
            case 1:
                bit = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                dat = cabBit.bitList[cabBit.bits[bal.idx]];
                _a.label = 3;
            case 3:
                if (bal.slv != null)
                    bal.slv({ clcBit: { idx: "read-collect", dat: dat } });
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.readCollect = readCollect;
var writeCollect = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var type, cabBit, objDat, idx, cabDat, key;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
                if (cpy.caboodleBits[type] == null)
                    (0, exports.createCollect)(cpy, { idx: type }, ste);
                if ((bal.bit == null))
                    bal.slv({ rskBit: { idx: "write-collect-err", src: 'no-bit' } });
                cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
                if (!(cabBit.bits[bal.idx] == null)) return [3 /*break*/, 2];
                return [4 /*yield*/, ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat })];
            case 1:
                bit = _a.sent();
                objDat = bit[Object.keys(bit)[0]];
                dat = objDat.dat;
                dat.dex = cabBit.bitList.length;
                cabBit.bitList.push(dat);
                idx = bal.idx;
                if (idx == null)
                    idx = dat.idx;
                if (idx == null)
                    throw new Error("write collect has no idx");
                cabBit.bits[idx] = dat.dex;
                return [3 /*break*/, 3];
            case 2:
                cabDat = cabBit.bitList[cabBit.bits[bal.idx]];
                bal.dat;
                for (key in bal.dat) {
                    if (cabDat == null)
                        cabDat = {};
                    cabDat[key] = bal.dat[key];
                }
                cabBit.bitList[cabBit.bits[bal.idx]] = cabDat;
                _a.label = 3;
            case 3:
                if ((dat == null) && (bal.slv != null))
                    bal.slv({ rskBit: { idx: "write-collect-err", src: 'no-dat' } });
                if (bal.slv != null)
                    bal.slv({ clcBit: { idx: "write-collect", dat: dat } });
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.writeCollect = writeCollect;
var createCollect = function (cpy, bal, ste) {
    var cabBit = { idx: bal.idx, dex: 0, bits: {}, bitList: [] };
    cabBit.dex = cpy.caboodleBitList.length;
    cpy.caboodleBitList.push(cabBit);
    cpy.caboodleBits[cabBit.idx] = cabBit.dex;
    if (bal.slv != null)
        bal.slv({ rskBit: { idx: "create-collect", dat: cabBit } });
    return cpy;
};
exports.createCollect = createCollect;
var removeCollect = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var type, cabBit, objDat, i, update, key, itm;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
                if (cpy.caboodleBits[type] == null)
                    return [2 /*return*/, bal.slv({ rskBit: { idx: "remove-collect-not-present" } })];
                cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
                if (cabBit.bits[bal.idx] == null)
                    return [2 /*return*/, bal.slv({ rskBit: { idx: "remove-collect-idx-not-present" } })];
                return [4 /*yield*/, ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat })];
            case 1:
                bit = _a.sent();
                objDat = bit[Object.keys(bit)[0]];
                dat = objDat.dat;
                dex = dat.dex;
                for (i = dex; i < cabBit.bitList.length - 1; i++) {
                    update = cabBit.bitList[i];
                    update.dex -= 1;
                }
                for (key in dat) {
                    dat[key] = null;
                }
                delete cabBit.bits[bal.idx];
                itm = cabBit.bitList.splice(dex, 1);
                cabBit.dex -= 1;
                if (bal.slv != null)
                    bal.slv({ rskBit: { idx: "remove-collect", dat: cabBit } });
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.removeCollect = removeCollect;
var deleteCollect = function (cpy, bal, ste) {
    //debugger
    return cpy;
};
exports.deleteCollect = deleteCollect;
var emptyCollect = function (cpy, bal, ste) {
    //debugger
    return cpy;
};
exports.emptyCollect = emptyCollect;
//# sourceMappingURL=collect.buzz.js.map