"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSprite = exports.UPDATE_SPRITE = exports.InitSprite = exports.INIT_SPRITE = void 0;
// Sprite actions
exports.INIT_SPRITE = "[Sprite action] Init Sprite";
class InitSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SPRITE;
    }
}
exports.InitSprite = InitSprite;
exports.UPDATE_SPRITE = "[Sprite action] Update Sprite";
class UpdateSprite {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SPRITE;
    }
}
exports.UpdateSprite = UpdateSprite;
//# sourceMappingURL=sprite.action.js.map