"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./sprite.action");
const sprite_model_1 = require("./sprite.model");
const Buzz = require("./sprite.buzzer");
function reducer(model = new sprite_model_1.SpriteModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SPRITE:
            return Buzz.updateSprite(clone(model), act.bale, state);
        case Act.INIT_SPRITE:
            return Buzz.initSprite(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=sprite.reduce.js.map