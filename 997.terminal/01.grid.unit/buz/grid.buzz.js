"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGrid = exports.initGrid = void 0;
const initGrid = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initGrid = initGrid;
const updateGrid = (cpy, bal, ste) => {
    let termMod = ste.value.terminal;
    let margin = 0;
    let cols = termMod.cols;
    let rows = termMod.rows;
    var colNow = bal.x;
    var rowNow = bal.y;
    let colSpan = bal.xSpan;
    let rowSpan = bal.ySpan;
    let spacing = 0;
    let cellWidth = ((100 - margin * 2) / cols);
    let cellHeight = ((100 - margin * 2) / rows);
    let top = rowNow * cellHeight + margin;
    let left = colNow * cellWidth + margin;
    top = top + '%';
    left = left + '%';
    let width = (cellWidth * colSpan - spacing) + '%';
    let height = (cellHeight * rowSpan - spacing) + '%';
    let bit = { left, top, width, height };
    if (bal.slv != null)
        bal.slv({ grdBit: { idx: "update-grid", dat: bit } });
    return cpy;
};
exports.updateGrid = updateGrid;
//# sourceMappingURL=grid.buzz.js.map