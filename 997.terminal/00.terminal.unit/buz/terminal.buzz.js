"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutTerminal = exports.clearTerminal = exports.inputTerminal = exports.optionTerminal = exports.printTerminal = exports.editTerminal = exports.runTerminal = exports.closeTerminal = exports.openTerminal = exports.updateTerminal = exports.initTerminal = void 0;
const ActPut = require("../../04.input.unit/input.action");
const ActChc = require("../../05.choice.unit/choice.action");
const ActCvs = require("../../02.canvas.unit/canvas.action");
const ActTxt = require("../../14.text.unit/text.action");
const ActGrd = require("../../01.grid.unit/grid.action");
const ActCns = require("../../03.console.unit/console.action");
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActTrm = require("../terminal.action");
const ActPvt = require("../../act/pivot.action");
var bit, val, idx, dex, lst, dat;
let firstLoad = false;
const initTerminal = async (cpy, bal, ste) => {
    if (firstLoad == true)
        return;
    firstLoad = true;
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActTrm, ActChc, ActTxt, ActCvs, ActPut, ActGrd, ActCns], dat: bal.dat, src: bal.src });
    bit = await ste.hunt(ActTrm.OPEN_TERMINAL, {});
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-terminal" } });
    return cpy;
};
exports.initTerminal = initTerminal;
const updateTerminal = async (cpy, bal, ste) => {
    var lstMsg = [];
    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '997.terminal' });
    lstMsg = lstMsg.concat(bit.pvtBit.lst);
    //idx = "../../333.depth/901.store/";
    //bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/901.store/', idx  });
    //lstMsg = lstMsg.concat(bit.pvtBit)
    bal.slv({ trmBit: { idx: "update-terminal", lst: lstMsg } });
    return cpy;
};
exports.updateTerminal = updateTerminal;
const openTerminal = async (cpy, bal, ste) => {
    let blessed = cpy.blessed = require('blessed');
    let contrib = cpy.contrib = require('blessed-contrib');
    let screen = cpy.screen = cpy.blessed.screen();
    //var grid = new contrib.grid({rows: 12, cols: 12, screen: screen})
    //bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: screen, lst: ['alligator0', 'alligator1', 'alligator2', 'alligator3', 'alligator4', 'alligator5'] })
    //bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: screen })
    //cpy.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    //  return process.exit(0);
    //});
    cpy.screen.render();
    if (bal.slv != null)
        bal.slv({ trmBit: { idx: "open-terminal" } });
    return cpy;
};
exports.openTerminal = openTerminal;
const closeTerminal = (cpy, bal, ste) => {
    if (cpy.screen != null)
        cpy.screen.destroy();
    cpy.blessed = null;
    cpy.contrib = null;
    cpy.screen = null;
    //cpy.term.processExit();
    if (bal.slv != null)
        bal.slv({ trmBit: { idx: "close-terminal" } });
    return cpy;
};
exports.closeTerminal = closeTerminal;
const runTerminal = async (cpy, bal, ste) => {
    return cpy;
};
exports.runTerminal = runTerminal;
const editTerminal = (cpy, bal, ste) => {
    return cpy;
};
exports.editTerminal = editTerminal;
const printTerminal = (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ trmBit: { idx: "write-terminal" } });
    return cpy;
};
exports.printTerminal = printTerminal;
const optionTerminal = (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ trmBit: { idx: "option-terminal" } });
    return cpy;
};
exports.optionTerminal = optionTerminal;
const inputTerminal = async (cpy, bal, ste) => {
    bal.slv({ trmBit: { idx: "input-terminal" } });
    return cpy;
};
exports.inputTerminal = inputTerminal;
const clearTerminal = async (cpy, bal, ste) => {
    cpy.blessed.program().clear();
    bal.slv({ trmBit: { idx: "clear-terminal" } });
    return cpy;
};
exports.clearTerminal = clearTerminal;
const layoutTerminal = (cpy, bal, ste) => {
    let bit;
    switch (bal.src) {
        case Grid.BOT_FULL_IDX:
            bit = Grid.BOT_FULL_BIT;
            break;
        case Grid.MID_FULL_IDX:
            bit = Grid.MID_FULL_BIT;
            break;
        case Grid.TOP_FULL_IDX:
            bit = Grid.TOP_FULL_BIT;
            break;
    }
    bal.slv({ trmBit: { idx: "layout-terminal", dat: bit } });
    return cpy;
};
exports.layoutTerminal = layoutTerminal;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Grid = require("../../val/grid");
//# sourceMappingURL=terminal.buzz.js.map