"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGrid = exports.UPDATE_GRID = exports.InitGrid = exports.INIT_GRID = void 0;
// Grid actions
exports.INIT_GRID = "[Grid action] Init Grid";
class InitGrid {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GRID;
    }
}
exports.InitGrid = InitGrid;
exports.UPDATE_GRID = "[Grid action] Update Grid";
class UpdateGrid {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GRID;
    }
}
exports.UpdateGrid = UpdateGrid;
//# sourceMappingURL=grid.action.js.map