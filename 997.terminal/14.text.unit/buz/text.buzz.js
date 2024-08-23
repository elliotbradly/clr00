"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteText = exports.removeText = exports.readText = exports.writeText = exports.createText = exports.updateText = exports.initText = void 0;
const ActCvs = require("../../02.canvas.unit/canvas.action");
const ActTxt = require("../../14.text.unit/text.action");
const ActCol = require("../../97.collect.unit/collect.action");
var lst, bit, dat;
const initText = (cpy, bal, ste) => {
    return cpy;
};
exports.initText = initText;
const updateText = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActTxt.READ_TEXT, { idx: bal.idx });
    let txtDat = bit.txtBit.dat;
    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: txtDat.src });
    dat = bit.cvsBit.dat;
    let canvas = dat.bit;
    var ctx;
    if (canvas.ctx)
        ctx = canvas.ctx;
    ctx.strokeStyle = [255, 0, 0];
    ctx.font = txtDat.fnt;
    ctx.fillStyle = txtDat.clr;
    ctx.fillText(txtDat.txt, txtDat.x, txtDat.y);
    let terminal = ste.value.terminal;
    let screen = terminal.screen;
    screen.render();
    if (bal.slv != null)
        return bal.slv({ txtBit: { idx: "update-text", dat: txtDat } });
    return cpy;
};
exports.updateText = updateText;
const createText = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src, typ: SHADE.TEXT };
    if (bal.dat != null && bal.dat.src != null)
        dat.src = bal.dat.src;
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    if (dat.txt == null)
        dat.txt = 'create text';
    if (dat.x == null)
        dat.x = 0;
    if (dat.y == null)
        dat.y = 0;
    if (dat.fnt == null)
        dat.fnt = "60pt Calibri";
    if (dat.wrp == null)
        dat.wrp = 300;
    if (dat.a == null)
        dat.a = 1;
    if (dat.clr == null)
        dat.clr = COLOR.WHITE;
    dat;
    if (dat.src != null)
        bit = await ste.hunt(ActCvs.NEST_CANVAS, { src: dat.src, dat });
    if (bal.slv != null)
        return bal.slv({ txtBit: { idx: "create-text", dat } });
    return cpy;
};
exports.createText = createText;
const writeText = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'txt00';
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, bit: ActTxt.CREATE_TEXT, dat: bal.dat });
    var txtBit = bit.clcBit.dat;
    ste.hunt(ActCvs.UPDATE_CANVAS, { idx: txtBit.src });
    //ste.hunt(ActTxt.UPDATE_TEXT, { idx: bal.idx })
    if (slv != null)
        slv({ txtBit: { idx: "read-text", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeText = writeText;
const readText = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActTxt.CREATE_TEXT });
    if (bal.slv != null)
        bal.slv({ txtBit: { idx: "write-text", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readText = readText;
const removeText = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActTxt.CREATE_TEXT });
    if (bal.slv != null)
        bal.slv({ txtBit: { idx: "remove-text", dat: bit.clcBit } });
    return cpy;
};
exports.removeText = removeText;
const deleteText = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteText = deleteText;
const SHADE = require("../../val/shade");
const COLOR = require("../../val/console-color");
//# sourceMappingURL=text.buzz.js.map