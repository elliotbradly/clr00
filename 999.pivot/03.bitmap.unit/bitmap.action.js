"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBitmap = exports.UPDATE_BITMAP = exports.InitBitmap = exports.INIT_BITMAP = void 0;
// Bitmap actions
exports.INIT_BITMAP = "[Bitmap action] Init Bitmap";
class InitBitmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_BITMAP;
    }
}
exports.InitBitmap = InitBitmap;
exports.UPDATE_BITMAP = "[Bitmap action] Update Bitmap";
class UpdateBitmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BITMAP;
    }
}
exports.UpdateBitmap = UpdateBitmap;
//# sourceMappingURL=bitmap.action.js.map