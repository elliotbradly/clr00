"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHexagon = exports.CREATE_HEXAGON = exports.DeleteHexagon = exports.DELETE_HEXAGON = exports.RemoveHexagon = exports.REMOVE_HEXAGON = exports.WriteHexagon = exports.WRITE_HEXAGON = exports.ReadHexagon = exports.READ_HEXAGON = exports.UpdateHexagon = exports.UPDATE_HEXAGON = exports.InitHexagon = exports.INIT_HEXAGON = void 0;
// Hexagon actions
exports.INIT_HEXAGON = "[Hexagon action] Init Hexagon";
class InitHexagon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_HEXAGON;
    }
}
exports.InitHexagon = InitHexagon;
exports.UPDATE_HEXAGON = "[Hexagon action] Update Hexagon";
class UpdateHexagon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_HEXAGON;
    }
}
exports.UpdateHexagon = UpdateHexagon;
exports.READ_HEXAGON = "[Read action] Read Hexagon";
class ReadHexagon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_HEXAGON;
    }
}
exports.ReadHexagon = ReadHexagon;
exports.WRITE_HEXAGON = "[Write action] Write Hexagon";
class WriteHexagon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_HEXAGON;
    }
}
exports.WriteHexagon = WriteHexagon;
exports.REMOVE_HEXAGON = "[Remove action] Remove Hexagon";
class RemoveHexagon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_HEXAGON;
    }
}
exports.RemoveHexagon = RemoveHexagon;
exports.DELETE_HEXAGON = "[Delete action] Delete Hexagon";
class DeleteHexagon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_HEXAGON;
    }
}
exports.DeleteHexagon = DeleteHexagon;
exports.CREATE_HEXAGON = "[Create action] Create Hexagon";
class CreateHexagon {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_HEXAGON;
    }
}
exports.CreateHexagon = CreateHexagon;
//# sourceMappingURL=hexagon.action.js.map