"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./console.action");
const console_model_1 = require("./console.model");
const Buzz = require("./console.buzzer");
function reducer(model = new console_model_1.ConsoleModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CONSOLE:
            return Buzz.updateConsole(clone(model), act.bale, state);
        case Act.INIT_CONSOLE:
            return Buzz.initConsole(clone(model), act.bale, state);
        case Act.READ_CONSOLE:
            return Buzz.readConsole(clone(model), act.bale, state);
        case Act.WRITE_CONSOLE:
            return Buzz.writeConsole(clone(model), act.bale, state);
        case Act.REMOVE_CONSOLE:
            return Buzz.removeConsole(clone(model), act.bale, state);
        case Act.DELETE_CONSOLE:
            return Buzz.deleteConsole(clone(model), act.bale, state);
        case Act.CREATE_CONSOLE:
            return Buzz.createConsole(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=console.reduce.js.map