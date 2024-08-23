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
var _a, _b;
exports.__esModule = true;
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.nameCaps = exports.it = exports.UPDATE_ = exports.updateMenu = exports.initMenu = void 0;
var Act = __importStar(require());
{
    exports.it.nomTitle;
}
from;
"../../00.{{=it.name}}.unit/{{=it.name}}.action";
var ActTrm = __importStar(require("../../act/terminal.action"));
var bit, lst, dex;
var initMenu = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (bal == null)
                    bal = { idx: null };
                return [4 /*yield*/, ste.bus(ActTrm.INIT_TERMINAL, {})];
            case 1:
                bit = _a.sent();
                (0, exports.updateMenu)(cpy, bal, ste);
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.initMenu = initMenu;
var updateMenu = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    var lst;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' })];
            case 1:
                bit = _a.sent();
                return [4 /*yield*/, ste.bus(ActTrm.WRITE_TERMINAL, { src: "{{=it.nameCaps}} PIVOT V0", bit: 'local' })];
            case 2:
                bit = _a.sent();
                return [4 /*yield*/, ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })];
            case 3:
                bit = _a.sent();
                lst = [Act, {}, { it: exports.it, : .nomTitle }];
                return [2 /*return*/];
        }
    });
}); };
exports.updateMenu = updateMenu, exports._c = _a = void 0, exports.it = (_b = void 0, _b.it), exports.nameCaps = _b.nameCaps;
Act;
{
    {
        exports.it.nomTitle;
    }
}
OPEN_;
{
    {
        exports.it.nameCaps;
    }
}
Act;
{
    {
        exports.it.nomTitle;
    }
}
EDIT_;
{
    {
        exports.it.nameCaps;
    }
}
bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst: lst });
bit = bit.trmBit;
var idx = lst[bit.val];
switch (idx) {
    case Act:
        {
            {
                exports.it.nomTitle;
            }
        }
        OPEN_;
        {
            {
                exports.it.nameCaps;
            }
        }
        bit = await ste.hunt(Act, {}, { it: exports.it, : .nomTitle });
}
OPEN_;
{
    {
        exports.it.nameCaps;
    }
}
{ }
break;
Act;
{
    {
        exports.it.nomTitle;
    }
}
exports.UPDATE_;
{
    {
        exports.it.nameCaps;
    }
}
bit = await ste.hunt(Act, {}, { it: exports.it, : .nomTitle }, exports.UPDATE_, {}, { it: exports.it, : .nameCaps }, {});
//bit = await ste.hunt(ActShd.OPEN_SHADE, {})
break;
Act;
{
    {
        exports.it.nomTitle;
    }
}
EDIT_;
{
    {
        exports.it.nameCaps;
    }
}
bit = await ste.hunt(Act, {}, { it: exports.it, : .nomTitle }, EDIT_, {}, { it: exports.it, : .nameCaps }, {});
bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' });
bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
lst = [Act, {}, { it: exports.it, : .nomTitle }, .PATCH_, {}, { it: exports.it, : .nameCaps }];
bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst: lst });
bit = await ste.hunt(Act, {}, { it: exports.it, : .nomTitle }, PATCH_, {}, { it: exports.it, : .nameCaps }, {});
break;
bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {});
break;
(0, exports.updateMenu)(cpy, bal, ste);
return cpy;
;
var testMenu = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, cpy];
    });
}); };
exports.testMenu = testMenu;
var closeMenu = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ste.bus(ActTrm.CLOSE_TERMINAL, {})];
            case 1:
                _a.sent();
                return [2 /*return*/, cpy];
        }
    });
}); };
exports.closeMenu = closeMenu;
var shadeMenu = function (cpy, bal, ste) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, cpy];
    });
}); };
exports.shadeMenu = shadeMenu;
var patch = function (ste, type, bale) { return ste.dispatch({ type: type, bale: bale }); };
var visageMenu = function (cpy, bal, ste) {
    debugger;
    return cpy;
};
exports.visageMenu = visageMenu;
//# sourceMappingURL=00.menu.buzz.js.map