"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHexagon = exports.removeHexagon = exports.writeHexagon = exports.readHexagon = exports.createHexagon = exports.updateHexagon = exports.initHexagon = void 0;
const ActCvs = require("../../02.canvas.unit/canvas.action");
var lst, bit, dat;
const initHexagon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initHexagon = initHexagon;
const updateHexagon = async (cpy, bal, ste) => {
    let hexmap = bal.bit;
    bit = await ste.hunt(ActCvs.READ_CANVAS, { idx: bal.idx });
    let dat = bit.cvsBit.dat;
    let canvas = dat.bit;
    debugger;
    //graphic.clear()
    const Hex = Honeycomb.extendHex({
        size: Number(33),
        orientation: 'pointy', // default: 'pointy'
    });
    const Grid = Honeycomb.defineGrid(Hex);
    const grid = Grid(hexmap.dat);
    var pct = .333;
    var scl = 3;
    //here is where you need the canvas
    var ctx;
    if (canvas.ctx)
        ctx = canvas.ctx;
    ctx.strokeStyle = [255, 0, 0];
    //graphic.lineStyle(3, 0x0000000, 1);
    grid.forEach((hex) => {
        const point = hex.toPoint();
        const corners = hex.corners().map((corner) => corner.add(point));
        const [firstCorner, ...otherCorners] = corners;
        ctx.moveTo(firstCorner.x * scl, firstCorner.y * scl * pct);
        otherCorners.forEach(({ x, y }) => ctx.lineTo(x * scl, y * scl * pct));
        ctx.lineTo(firstCorner.x * scl, firstCorner.y * scl * pct);
    });
    return cpy;
};
exports.updateHexagon = updateHexagon;
const createHexagon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.createHexagon = createHexagon;
const readHexagon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.readHexagon = readHexagon;
const writeHexagon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.writeHexagon = writeHexagon;
const removeHexagon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeHexagon = removeHexagon;
const deleteHexagon = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteHexagon = deleteHexagon;
const Honeycomb = require("honeycomb-grid");
//# sourceMappingURL=hexagon.buzz.js.map