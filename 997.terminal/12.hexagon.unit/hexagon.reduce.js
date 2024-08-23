"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./hexagon.action");
const hexagon_model_1 = require("./hexagon.model");
const Buzz = require("./hexagon.buzzer");
function reducer(model = new hexagon_model_1.HexagonModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_HEXAGON:
            return Buzz.updateHexagon(clone(model), act.bale, state);
        case Act.INIT_HEXAGON:
            return Buzz.initHexagon(clone(model), act.bale, state);
        case Act.READ_HEXAGON:
            return Buzz.readHexagon(clone(model), act.bale, state);
        case Act.WRITE_HEXAGON:
            return Buzz.writeHexagon(clone(model), act.bale, state);
        case Act.REMOVE_HEXAGON:
            return Buzz.removeHexagon(clone(model), act.bale, state);
        case Act.DELETE_HEXAGON:
            return Buzz.deleteHexagon(clone(model), act.bale, state);
        case Act.CREATE_HEXAGON:
            return Buzz.createHexagon(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=hexagon.reduce.js.map