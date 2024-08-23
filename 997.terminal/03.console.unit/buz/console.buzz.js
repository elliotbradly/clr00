"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteConsole = exports.removeConsole = exports.writeConsole = exports.readConsole = exports.createConsole = exports.updateConsole = exports.initConsole = void 0;
var bit;
const ActCns = require("../console.action");
const ActCol = require("../../97.collect.unit/collect.action");
const initConsole = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initConsole = initConsole;
const updateConsole = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCns.READ_CONSOLE, { idx: bal.idx });
    let dat = bit.cnsBit.dat;
    let console = dat.bit;
    if (bal.src == null)
        bal.src = '';
    dat.bit;
    bal.src;
    dat.bit.log(bal.src);
    if (bal.slv != null)
        bal.slv({ cnsBit: { idx: "update-console" } });
    return cpy;
};
exports.updateConsole = updateConsole;
const createConsole = (cpy, bal, ste) => {
    let termMod = ste.value.terminal;
    let contrib = ste.value.terminal.contrib;
    var dat = { idx: 'hmm', bit: null, clr: null, net: null };
    if (dat.clr == null)
        dat.clr = COLOR.GREEN;
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    dat.bit = contrib.log({
        fg: dat.clr,
        selectedFg: dat.clr,
        label: 'Server Log',
        left: dat.net.left,
        top: dat.net.top,
        width: dat.net.width,
        height: dat.net.height
    });
    let terminal = ste.value.terminal;
    let screen = terminal.screen;
    screen.append(dat.bit);
    screen.render();
    if (bal.slv != null)
        bal.slv({ cnsBit: { idx: "create-console", dat } });
    return cpy;
};
exports.createConsole = createConsole;
const readConsole = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCns.CREATE_CONSOLE });
    if (slv != null)
        slv({ cnsBit: { idx: "read-console", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readConsole = readConsole;
const writeConsole = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCns.CREATE_CONSOLE });
    ste.hunt(ActCns.UPDATE_CONSOLE, { idx: bal.idx, src: bal.src });
    if (bal.slv != null)
        bal.slv({ cnsBit: { idx: "write-console", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeConsole = writeConsole;
const removeConsole = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeConsole = removeConsole;
const deleteConsole = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteConsole = deleteConsole;
const COLOR = require("../../val/console-color");
//# sourceMappingURL=console.buzz.js.map