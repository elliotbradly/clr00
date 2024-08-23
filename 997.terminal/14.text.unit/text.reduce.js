"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./text.action");
const text_model_1 = require("./text.model");
const Buzz = require("./text.buzzer");
function reducer(model = new text_model_1.TextModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_TEXT:
            return Buzz.updateText(clone(model), act.bale, state);
        case Act.INIT_TEXT:
            return Buzz.initText(clone(model), act.bale, state);
        case Act.WRITE_TEXT:
            return Buzz.writeText(clone(model), act.bale, state);
        case Act.READ_TEXT:
            return Buzz.readText(clone(model), act.bale, state);
        case Act.REMOVE_TEXT:
            return Buzz.removeText(clone(model), act.bale, state);
        case Act.DELETE_TEXT:
            return Buzz.deleteText(clone(model), act.bale, state);
        case Act.CREATE_TEXT:
            return Buzz.createText(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=text.reduce.js.map