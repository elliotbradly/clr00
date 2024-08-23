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
exports.__esModule = true;
exports.reducer = void 0;
var clone = __importStar(require("clone-deep"));
var Act = __importStar(require("./menu.action"));
var menu_model_1 = require("./menu.model");
var Buzz = __importStar(require("./menu.buzzer"));
function reducer(model, act, state) {
    if (model === void 0) { model = new menu_model_1.MenuModel(); }
    switch (act.type) {
        case Act.UPDATE_MENU:
            return Buzz.updateMenu(clone(model), act.bale, state);
        case Act.INIT_MENU:
            return Buzz.initMenu(clone(model), act.bale, state);
        case Act.TEST_MENU:
            return Buzz.testMenu(clone(model), act.bale, state);
        case Act.CLOSE_MENU:
            return Buzz.closeMenu(clone(model), act.bale, state);
        case Act.SHADE_MENU:
            return Buzz.shadeMenu(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=menu.reduce.js.map