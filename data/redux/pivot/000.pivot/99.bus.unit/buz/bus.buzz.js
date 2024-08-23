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
exports.updateBus = exports.messageBus = exports.connectBus = exports.openBus = exports.createBus = exports.initBus = void 0;
var ActMnu = __importStar(require("../../98.menu.unit/menu.action"));
var ActBus = __importStar(require("../../99.bus.unit/bus.action"));
var ActCol = __importStar(require("../../97.collect.unit/collect.action"));
var lst, idx, bit, src, dat, dex;
var initBus = function (cpy, bal, ste) {
    cpy.actList = [];
    if (bal == null)
        bal = { idx: null };
    if (bal.lst == null)
        bal.lst = [];
    if ((bal.src != null) && (bal.src.constructor == Array))
        lst = bal.src;
    bal.lst.forEach(function (a) {
        for (var key in a) {
            cpy.actList.push(a[key]);
        }
    });
    ste.bus = function (idx, dat, bit) { return (0, exports.updateBus)(cpy, { idx: idx, dat: dat, bit: bit }, ste); };
    if (bal.dat != null) {
        cpy.MQTT = bal.dat;
    }
    else {
        console.log("return promise");
    }
    if (lst == null) {
        if (bal.src != null)
            cpy.host = bal.src;
        cpy.client = cpy.MQTT.connect(cpy.host);
        cpy.client.on('message', function (tpc, msg) { (0, exports.messageBus)(cpy, { idx: tpc, src: msg }, ste); });
        cpy.client.on('connect', function () {
            console.log(bal.idx + " connected " + cpy.host);
            (0, exports.openBus)(cpy, { idx: 'init-bus', lst: cpy.actList }, ste);
            if (bal.slv != null)
                bal.slv({ intBit: { idx: "init-bus" } });
        });
    }
    else {
        var complete = function (lst) {
            lst.shift();
            if (lst.length != 0)
                return;
            if (bal.slv != null)
                bal.slv({ intBit: { idx: "init-bus" } });
        };
        lst.forEach(function (a) { return __awaiter(void 0, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ste.hunt(ActCol.WRITE_COLLECT, { idx: a.idx, src: a.src, bit: ActBus.CREATE_BUS })];
                    case 1:
                        bit = _a.sent();
                        client = bit.clcBit.dat;
                        client.on('message', function (tpc, msg) { (0, exports.messageBus)(cpy, { idx: tpc, src: msg, bit: a.idx }, ste); });
                        client.on('connect', function () {
                            console.log(a.idx + " connected " + a.src);
                            (0, exports.openBus)(cpy, { idx: 'init-bus', lst: cpy.actList, bit: a.idx }, ste);
                            complete(lst);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    }
    return cpy;
};
exports.initBus = initBus;
var createBus = function (cpy, bal, ste) {
    var client = cpy.MQTT.connect(bal.src);
    if (bal.slv != null)
        bal.slv({ busBit: { idx: "create-bus", dat: client } });
    //client.on('message', (tpc, msg) => { messageBus(cpy, { idx: tpc, src: msg, bit:bal.idx }, ste) })
    //client.on('connect', () => {
    //console.log(bal.idx + " connected " + bal.src)
    //openBus(cpy, { idx: 'init-bus', lst: cpy.actList, bit:bal.idx }, ste)  
    //})
    return cpy;
};
exports.createBus = createBus;
var openBus = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var out, client;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                out = [];
                bal.lst.forEach(function (a) {
                    if (a == null)
                        return;
                    if (a.includes == null)
                        return;
                    if (a.includes('[') && a.includes(']') == false)
                        return;
                    out.push(a);
                });
                client = cpy.client;
                if (!(bal.bit != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, ste.hunt(ActCol.READ_COLLECT, { idx: bal.bit, bit: ActBus.CREATE_BUS })];
            case 1:
                bit = _a.sent();
                client = bit.clcBit.dat;
                _a.label = 2;
            case 2:
                out.forEach(function (a) {
                    client.subscribe(a, function (err) {
                        if (!err) {
                            console.log('subscribing ' + a);
                        }
                    });
                });
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.openBus = openBus;
var connectBus = function (cpy, bal, ste) {
    var lst = [];
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, { lst: lst });
};
exports.connectBus = connectBus;
var messageBus = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var client, responseIDX, obj, bit, cloneBit, key, itm;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (bal.src != null)
                    dat = bal.src.toString();
                idx = bal.idx;
                dat = JSON.parse(dat);
                client = cpy.client;
                if (!(bal.bit != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, ste.hunt(ActCol.READ_COLLECT, { idx: bal.bit, bit: ActBus.CREATE_BUS })];
            case 1:
                bit = _a.sent();
                client = bit.clcBit.dat;
                _a.label = 2;
            case 2:
                if (!(idx.includes(cpy.responseSuffix) == true)) return [3 /*break*/, 3];
                responseIDX = bal.idx;
                obj = cpy.promises[responseIDX];
                if (obj.slv != null)
                    obj.slv(dat);
                client.unsubscribe(responseIDX, function (err) {
                    if (!err) {
                        //console.log('hitting ' + responseIDX)
                    }
                });
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, ste.hunt(idx, dat)];
            case 4:
                bit = _a.sent();
                cloneBit = clone(bit);
                for (key in cloneBit) {
                    itm = cloneBit[key];
                    if (itm.dat != null) {
                        if (itm.dat.bit != null)
                            itm.dat.bit = null;
                    }
                }
                cloneBit;
                client.publish(bal.idx + cpy.responseSuffix, JSON.stringify(cloneBit));
                _a.label = 5;
            case 5: return [2 /*return*/, cpy];
        }
    });
}); };
exports.messageBus = messageBus;
//has to return a promise
var updateBus = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var client, responseIDX, slv, promo, obj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                client = cpy.client;
                if (!(bal.bit != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, ste.hunt(ActCol.READ_COLLECT, { idx: bal.bit, bit: ActBus.CREATE_BUS })];
            case 1:
                bit = _a.sent();
                client = bit.clcBit.dat;
                _a.label = 2;
            case 2:
                if (!((client == null) && (bal.bit == null))) return [3 /*break*/, 4];
                return [4 /*yield*/, ste.hunt(ActCol.FETCH_COLLECT, { bit: ActBus.CREATE_BUS })];
            case 3:
                bit = _a.sent();
                client = bit.clcBit.dat;
                _a.label = 4;
            case 4:
                responseIDX = bal.idx + cpy.responseSuffix;
                promo = new Promise(function (rslv, rjct) { return (slv = rslv); });
                obj = { slv: function (val0) { return slv(val0); } };
                cpy.promises[responseIDX] = obj;
                client.subscribe(responseIDX, function (err) {
                    if (!err) {
                        //console.log('hitting ' + responseIDX)
                    }
                });
                //03.10.23
                //bit throws errors since sometimes it is not a primitive
                //if (bal.dat == null) bal.dat = {}
                //if (bal.dat.bit != null) bal.dat.bit = null;
                client.publish(bal.idx, JSON.stringify(bal.dat));
                return [2 /*return*/, promo];
        }
    });
}); };
exports.updateBus = updateBus;
var patch = function (ste, type, bale) { return ste.dispatch({ type: type, bale: bale }); };
var clone = __importStar(require("clone-deep"));
//# sourceMappingURL=bus.buzz.js.map