"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./terminal.action");
const terminal_model_1 = require("./terminal.model");
const Buzz = require("./terminal.buzzer");
function reducer(model = new terminal_model_1.TerminalModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_TERMINAL:
            return Buzz.updateTerminal(clone(model), act.bale, state);
        case Act.INIT_TERMINAL:
            return Buzz.initTerminal(clone(model), act.bale, state);
        case Act.RUN_TERMINAL:
            return Buzz.runTerminal(clone(model), act.bale, state);
        case Act.EDIT_TERMINAL:
            return Buzz.editTerminal(clone(model), act.bale, state);
        case Act.PRINT_TERMINAL:
            return Buzz.printTerminal(clone(model), act.bale, state);
        case Act.CLOSE_TERMINAL:
            return Buzz.closeTerminal(clone(model), act.bale, state);
        case Act.OPTION_TERMINAL:
            return Buzz.optionTerminal(clone(model), act.bale, state);
        case Act.OPEN_TERMINAL:
            return Buzz.openTerminal(clone(model), act.bale, state);
        case Act.INPUT_TERMINAL:
            return Buzz.inputTerminal(clone(model), act.bale, state);
        case Act.LAYOUT_TERMINAL:
            return Buzz.layoutTerminal(clone(model), act.bale, state);
        case Act.CLEAR_TERMINAL:
            return Buzz.clearTerminal(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=terminal.reduce.js.map