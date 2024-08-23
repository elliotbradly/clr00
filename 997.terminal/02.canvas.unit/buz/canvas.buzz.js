"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestCanvas = exports.removeCanvas = exports.deleteCanvas = exports.writeCanvas = exports.readCanvas = exports.createCanvas = exports.updateCanvas = exports.hexmapCanvas = exports.initCanvas = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActCvs = require("../../02.canvas.unit/canvas.action");
const ActTxt = require("../../14.text.unit/text.action");
var lst, bit, dat;
const initCanvas = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initCanvas = initCanvas;
const hexmapCanvas = (cpy, bal, ste) => {
    console.log("hexmap canvas");
    bal.slv({ cvsBit: { idx: "hexmap-canvas", dat } });
    return cpy;
};
exports.hexmapCanvas = hexmapCanvas;
const updateCanvas = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: bal.idx });
    let dat = bit.cvsBit.dat;
    let canvas = dat.bit;
    let ctx = canvas.ctx;
    dat.txtLst.forEach((a) => {
        ste.hunt(ActTxt.UPDATE_TEXT, { idx: a });
    });
    if (bal.slv != null)
        bal.slv({ cvsBit: { idx: "update-canvas", dat } });
    return cpy;
};
exports.updateCanvas = updateCanvas;
const createCanvas = async (cpy, bal, ste) => {
    let termMod = ste.value.terminal;
    let contrib = ste.value.terminal.contrib;
    var dat = { idx: 'hmm' };
    if (dat.clr == null)
        dat.clr = COLOR.YELLOW;
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    dat.canLst = [];
    dat.gphLst = [];
    dat.txtLst = [];
    dat.sprLst = [];
    dat.hexLst = [];
    let net = dat.net;
    dat.bit = contrib.canvas({
        left: net.left,
        top: net.top,
        bg: dat.clr,
        width: net.width,
        height: net.height
    });
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    let terminal = ste.value.terminal;
    let screen = terminal.screen;
    screen.append(dat.bit);
    screen.render();
    if (bal.slv != null)
        bal.slv({ cvsBit: { idx: "create-canvas", dat } });
    return cpy;
};
exports.createCanvas = createCanvas;
const readCanvas = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCvs.CREATE_CANVAS });
    if (slv != null)
        slv({ cvsBit: { idx: "read-canvas", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readCanvas = readCanvas;
const writeCanvas = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCvs.CREATE_CANVAS });
    ste.hunt(ActCvs.UPDATE_CANVAS, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ cvsBit: { idx: "write-canvas", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeCanvas = writeCanvas;
const deleteCanvas = async (cpy, bal, ste) => {
    //remove each type inside a visage
    //dat.canLst.forEach(async (a) => ste.hunt(ActCan.REMOVE_CONTAINER, { idx: a }))
    //dat.gphLst.forEach(async (a) => ste.hunt(ActGph.REMOVE_GRAPHIC, { idx: a }))
    //dat.txtLst.forEach(async (a) => ste.hunt(ActTxt.REMOVE_TEXT, { idx: a }))
    //dat.sprLst.forEach(async (a) => ste.hunt(ActSpr.REMOVE_SPRITE, { idx: a }))
    //dat.hexLst.forEach(async (a) => ste.hunt(ActHex.REMOVE_HEXAGON, { idx: a }))
    //dat.vidLst.forEach(async (a) => ste.hunt(ActVid.REMOVE_VIDEO, { idx: a }))
    //dat.lopLst.forEach(async (a) => ste.hunt(ActLop.REMOVE_LOOP, { idx: a }))
    //if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-delete-container", dat: {} } });
    //bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx })
    //var dat: CanBit = bit.canBit.dat
    //var container = dat.bit;
    //container.destroy()
    //dat.bit = null
    //if (bal.slv != null) return bal.slv({ vsgBit: { idx: "delete-container", dat } });
    return cpy;
};
exports.deleteCanvas = deleteCanvas;
const removeCanvas = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCvs.DELETE_CANVAS });
    if (bal.slv != null)
        bal.slv({ cvsBit: { idx: "remove-canvas", dat: bit.clcBit } });
    return cpy;
};
exports.removeCanvas = removeCanvas;
const nestCanvas = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: bal.src });
    var dat = bit.cvsBit.dat;
    switch (bal.dat.typ) {
        case SHADE.CONTAINER:
            dat.canLst.push(bal.dat.idx);
            break;
        case SHADE.GRAPHIC:
            dat.gphLst.push(bal.dat.idx);
            break;
        case SHADE.SPRITE:
            dat.sprLst.push(bal.dat.idx);
            break;
        case SHADE.TEXT:
            dat.txtLst.push(bal.dat.idx);
            break;
        case SHADE.HEXAGON:
            dat.hexLst.push(bal.dat.idx);
            break;
    }
    bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: bal.src, dat });
    if (bal.slv != null)
        bal.slv({ cvsBit: { idx: 'nest-canvas' } });
    return cpy;
};
exports.nestCanvas = nestCanvas;
const COLOR = require("../../val/console-color");
const SHADE = require("../../val/shade");
//# sourceMappingURL=canvas.buzz.js.map