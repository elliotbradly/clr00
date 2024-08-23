"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.printMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActTrm = require("../../00.terminal.unit/terminal.action");
const ActGrd = require("../../01.grid.unit/grid.action");
const ActCvs = require("../../02.canvas.unit/canvas.action");
const ActCns = require("../../03.console.unit/console.action");
const ActChc = require("../../05.choice.unit/choice.action");
const ActPut = require("../../04.input.unit/input.action");
var bit, lst, dex, src, idx, dat;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {});
    bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 });
    bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 5, y: 0, xSpan: 4, ySpan: 12 });
    bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx: 'cns00', dat: { net: bit.grdBit.dat } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Terminal PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    lst = [ActTrm.UPDATE_TERMINAL, ActCvs.HEXMAP_CANVAS, ActTrm.INPUT_TERMINAL, ActTrm.EDIT_TERMINAL];
    bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 1 });
    bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    idx = bit.chcBit.src;
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: 'local' })
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "TERMINAL PIVOT V0", bit: 'local' })
    //bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-----------", bit: "local" })
    //var lst = [ActTrm.INPUT_TERMINAL, ActTrm.UPDATE_TERMINAL, ActTrm.EDIT_TERMINAL]
    //bit = await ste.bus(ActTrm.OPTION_TERMINAL, { lst })
    //bit = bit.trmBit;
    //var idx = lst[bit.val];
    switch (idx) {
        case ActCvs.HEXMAP_CANVAS:
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Update..." });
            bit = await ste.hunt(ActCvs.HEXMAP_CANVAS, {});
            break;
        case ActTrm.UPDATE_TERMINAL:
            await updateTerm(ste);
            break;
        case ActTrm.INPUT_TERMINAL:
            bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            idx = bit.putBit.src;
            bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" });
            bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "" });
            bit = await ste.hunt(ActTrm.PRINT_TERMINAL, { src: "-input-" + idx });
            bit = await ste.hunt(ActTrm.EDIT_TERMINAL, {});
            //bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
            //bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })
            //lst = [ActTrm.PATCH_TERMINAL]
            //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
            //bit = await ste.hunt( ActTrm.PATCH_TERMINAL, {})
            break;
        default:
            bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    //await ste.bus(ActTrm.CLOSE_TERMINAL, {})
    return cpy;
};
exports.closeMenu = closeMenu;
const shadeMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.shadeMenu = shadeMenu;
const printMenu = async (cpy, bal, ste) => {
    dat = bal;
    if (dat == null)
        return bal.slv({ mnuBit: { idx: "print-menu", dat } });
    var itm = JSON.stringify(dat);
    lst = itm.split(",");
    lst.forEach((a) => {
        ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a });
    });
    ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });
    bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};
exports.printMenu = printMenu;
const visageMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.visageMenu = visageMenu;
var updateTerm = async (ste) => {
    var bitUp = await ste.hunt(ActTrm.UPDATE_TERMINAL, {});
    bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp);
};
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map