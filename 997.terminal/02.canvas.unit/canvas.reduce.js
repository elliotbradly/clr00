"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./canvas.action");
const canvas_model_1 = require("./canvas.model");
const Buzz = require("./canvas.buzzer");
function reducer(model = new canvas_model_1.CanvasModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CANVAS:
            return Buzz.updateCanvas(clone(model), act.bale, state);
        case Act.INIT_CANVAS:
            return Buzz.initCanvas(clone(model), act.bale, state);
        case Act.READ_CANVAS:
            return Buzz.readCanvas(clone(model), act.bale, state);
        case Act.WRITE_CANVAS:
            return Buzz.writeCanvas(clone(model), act.bale, state);
        case Act.DELETE_CANVAS:
            return Buzz.deleteCanvas(clone(model), act.bale, state);
        case Act.REMOVE_CANVAS:
            return Buzz.removeCanvas(clone(model), act.bale, state);
        case Act.CREATE_CANVAS:
            return Buzz.createCanvas(clone(model), act.bale, state);
        case Act.NEST_CANVAS:
            return Buzz.nestCanvas(clone(model), act.bale, state);
        case Act.HEXMAP_CANVAS:
            return Buzz.hexmapCanvas(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=canvas.reduce.js.map