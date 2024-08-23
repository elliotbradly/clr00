"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./choice.action");
const choice_model_1 = require("./choice.model");
const Buzz = require("./choice.buzzer");
function reducer(model = new choice_model_1.ChoiceModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CHOICE:
            return Buzz.updateChoice(clone(model), act.bale, state);
        case Act.INIT_CHOICE:
            return Buzz.initChoice(clone(model), act.bale, state);
        case Act.OPEN_CHOICE:
            return Buzz.openChoice(clone(model), act.bale, state);
        case Act.KEY_CHOICE:
            return Buzz.keyChoice(clone(model), act.bale, state);
        case Act.TOWER_CHOICE:
            return Buzz.towerChoice(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=choice.reduce.js.map