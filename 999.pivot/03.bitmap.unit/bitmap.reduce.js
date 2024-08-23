"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./bitmap.action");
const bitmap_model_1 = require("./bitmap.model");
const Buzz = require("./bitmap.buzzer");
function reducer(model = new bitmap_model_1.BitmapModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_BITMAP:
            return Buzz.updateBitmap(clone(model), act.bale, state);
        case Act.INIT_BITMAP:
            return Buzz.initBitmap(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=bitmap.reduce.js.map