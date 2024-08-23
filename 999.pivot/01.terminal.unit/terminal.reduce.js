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
        case Act.OPEN_TERMINAL:
            return Buzz.openTerminal(clone(model), act.bale, state);
        case Act.CLOSE_TERMINAL:
            return Buzz.closeTerminal(clone(model), act.bale, state);
        case Act.ROOT_TERMINAL:
            return Buzz.rootTerminal(clone(model), act.bale, state);
        case Act.CLEAR_TERMINAL:
            return Buzz.clearTerminal(clone(model), act.bale, state);
        case Act.WRITE_TERMINAL:
            return Buzz.writeTerminal(clone(model), act.bale, state);
        case Act.INIT_TERMINAL:
            return Buzz.initTerminal(clone(model), act.bale, state);
        case Act.INPUT_TERMINAL:
            return Buzz.inputTerminal(clone(model), act.bale, state);
        case Act.TABLE_TERMINAL:
            return Buzz.tableTerminal(clone(model), act.bale, state);
        case Act.FOCUS_TERMINAL:
            return Buzz.focusTerminal(clone(model), act.bale, state);
        case Act.CONTENT_TERMINAL:
            return Buzz.contentTerminal(clone(model), act.bale, state);
        case Act.ADD_PORT:
            return Buzz.addPort(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=terminal.reduce.js.map