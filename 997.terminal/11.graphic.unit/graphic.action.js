"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGraphic = exports.UPDATE_GRAPHIC = exports.InitGraphic = exports.INIT_GRAPHIC = void 0;
// Graphic actions
exports.INIT_GRAPHIC = "[Graphic action] Init Graphic";
class InitGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GRAPHIC;
    }
}
exports.InitGraphic = InitGraphic;
exports.UPDATE_GRAPHIC = "[Graphic action] Update Graphic";
class UpdateGraphic {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GRAPHIC;
    }
}
exports.UpdateGraphic = UpdateGraphic;
//# sourceMappingURL=graphic.action.js.map