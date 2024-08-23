"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const pivot_unit_1 = require("./00.pivot.unit/pivot.unit");
const terminal_unit_1 = require("./01.terminal.unit/terminal.unit");
const unit_unit_1 = require("./02.unit.unit/unit.unit");
const bitmap_unit_1 = require("./03.bitmap.unit/bitmap.unit");
const disk_unit_1 = require("./96.disk.unit/disk.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const pivot_model_1 = require("./00.pivot.unit/pivot.model");
const terminal_model_1 = require("./01.terminal.unit/terminal.model");
const unit_model_1 = require("./02.unit.unit/unit.model");
const bitmap_model_1 = require("./03.bitmap.unit/bitmap.model");
const disk_model_1 = require("./96.disk.unit/disk.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [pivot_unit_1.default, terminal_unit_1.default, unit_unit_1.default, bitmap_unit_1.default, disk_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromPivot = require("./00.pivot.unit/pivot.reduce");
const reduceFromTerminal = require("./01.terminal.unit/terminal.reduce");
const reduceFromUnit = require("./02.unit.unit/unit.reduce");
const reduceFromBitmap = require("./03.bitmap.unit/bitmap.reduce");
const reduceFromDisk = require("./96.disk.unit/disk.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    pivot: reduceFromPivot.reducer,
    terminal: reduceFromTerminal.reducer,
    unit: reduceFromUnit.reducer,
    bitmap: reduceFromBitmap.reducer,
    disk: reduceFromDisk.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.pivot = new pivot_model_1.PivotModel();
        this.terminal = new terminal_model_1.TerminalModel();
        this.unit = new unit_model_1.UnitModel();
        this.bitmap = new bitmap_model_1.BitmapModel();
        this.disk = new disk_model_1.DiskModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map