"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestCanvas = exports.NEST_CANVAS = exports.CreateCanvas = exports.CREATE_CANVAS = exports.RemoveCanvas = exports.REMOVE_CANVAS = exports.DeleteCanvas = exports.DELETE_CANVAS = exports.WriteCanvas = exports.WRITE_CANVAS = exports.ReadCanvas = exports.READ_CANVAS = exports.HexmapCanvas = exports.HEXMAP_CANVAS = exports.UpdateCanvas = exports.UPDATE_CANVAS = exports.InitCanvas = exports.INIT_CANVAS = void 0;
// Canvas actions
exports.INIT_CANVAS = "[Canvas action] Init Canvas";
class InitCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CANVAS;
    }
}
exports.InitCanvas = InitCanvas;
exports.UPDATE_CANVAS = "[Canvas action] Update Canvas";
class UpdateCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CANVAS;
    }
}
exports.UpdateCanvas = UpdateCanvas;
exports.HEXMAP_CANVAS = "[Canvas action] Hexmap Canvas";
class HexmapCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.HEXMAP_CANVAS;
    }
}
exports.HexmapCanvas = HexmapCanvas;
exports.READ_CANVAS = "[Read action] Read Canvas";
class ReadCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_CANVAS;
    }
}
exports.ReadCanvas = ReadCanvas;
exports.WRITE_CANVAS = "[Write action] Write Canvas";
class WriteCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_CANVAS;
    }
}
exports.WriteCanvas = WriteCanvas;
exports.DELETE_CANVAS = "[Delete action] Delete Canvas";
class DeleteCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_CANVAS;
    }
}
exports.DeleteCanvas = DeleteCanvas;
exports.REMOVE_CANVAS = "[Remove action] Remove Canvas";
class RemoveCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_CANVAS;
    }
}
exports.RemoveCanvas = RemoveCanvas;
exports.CREATE_CANVAS = "[Create action] Create Canvas";
class CreateCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_CANVAS;
    }
}
exports.CreateCanvas = CreateCanvas;
exports.NEST_CANVAS = "[Nest action] Nest Canvas";
class NestCanvas {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.NEST_CANVAS;
    }
}
exports.NestCanvas = NestCanvas;
//# sourceMappingURL=canvas.action.js.map