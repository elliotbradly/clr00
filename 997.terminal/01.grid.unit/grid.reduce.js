"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./grid.action");
const grid_model_1 = require("./grid.model");
const Buzz = require("./grid.buzzer");
function reducer(model = new grid_model_1.GridModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_GRID:
            return Buzz.updateGrid(clone(model), act.bale, state);
        case Act.INIT_GRID:
            return Buzz.initGrid(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=grid.reduce.js.map