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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.reducer = exports.list = void 0;
var control_unit_1 = __importDefault(require("./00.control.unit/control.unit"));
var collect_unit_1 = __importDefault(require("./97.collect.unit/collect.unit"));
var menu_unit_1 = __importDefault(require("./98.menu.unit/menu.unit"));
var bus_unit_1 = __importDefault(require("./99.bus.unit/bus.unit"));
var control_model_1 = require("./00.control.unit/control.model");
var collect_model_1 = require("./97.collect.unit/collect.model");
var menu_model_1 = require("./98.menu.unit/menu.model");
var bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [control_unit_1["default"], collect_unit_1["default"], menu_unit_1["default"], bus_unit_1["default"]];
var reduceFromControl = __importStar(require("./00.control.unit/control.reduce"));
var reduceFromCollect = __importStar(require("./97.collect.unit/collect.reduce"));
var reduceFromMenu = __importStar(require("./98.menu.unit/menu.reduce"));
var reduceFromBus = __importStar(require("./99.bus.unit/bus.reduce"));
exports.reducer = {
    control: reduceFromControl.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer
};
var UnitData = /** @class */ (function () {
    function UnitData() {
        this.control = new control_model_1.ControlModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
    return UnitData;
}());
exports["default"] = UnitData;
//# sourceMappingURL=BEE.js.map