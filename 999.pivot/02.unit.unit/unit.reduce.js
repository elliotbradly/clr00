"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./unit.action");
const unit_model_1 = require("./unit.model");
const Buzz = require("./unit.buzzer");
function reducer(model = new unit_model_1.UnitModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_UNIT:
            return Buzz.updateUnit(clone(model), act.bale, state);
        case Act.INIT_UNIT:
            return Buzz.initUnit(clone(model), act.bale, state);
        case Act.CREATE_UNIT:
            return Buzz.createUnit(clone(model), act.bale, state);
        case Act.CODE_UNIT:
            return Buzz.codeUnit(clone(model), act.bale, state);
        case Act.LIST_UNIT:
            return Buzz.listUnit(clone(model), act.bale, state);
        case Act.REPLACE_UNIT:
            return Buzz.replaceUnit(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=unit.reduce.js.map