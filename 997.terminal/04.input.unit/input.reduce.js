"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./input.action");
const input_model_1 = require("./input.model");
const Buzz = require("./input.buzzer");
function reducer(model = new input_model_1.InputModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_INPUT:
            return Buzz.updateInput(clone(model), act.bale, state);
        case Act.INIT_INPUT:
            return Buzz.initInput(clone(model), act.bale, state);
        case Act.OPEN_INPUT:
            return Buzz.openInput(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=input.reduce.js.map