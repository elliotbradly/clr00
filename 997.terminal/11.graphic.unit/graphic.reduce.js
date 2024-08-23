"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./graphic.action");
const graphic_model_1 = require("./graphic.model");
const Buzz = require("./graphic.buzzer");
function reducer(model = new graphic_model_1.GraphicModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_GRAPHIC:
            return Buzz.updateGraphic(clone(model), act.bale, state);
        case Act.INIT_GRAPHIC:
            return Buzz.initGraphic(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=graphic.reduce.js.map