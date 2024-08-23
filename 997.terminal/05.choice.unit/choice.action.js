"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerChoice = exports.TOWER_CHOICE = exports.KeyChoice = exports.KEY_CHOICE = exports.OpenChoice = exports.OPEN_CHOICE = exports.UpdateChoice = exports.UPDATE_CHOICE = exports.InitChoice = exports.INIT_CHOICE = void 0;
// Choice actions
exports.INIT_CHOICE = "[Choice action] Init Choice";
class InitChoice {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CHOICE;
    }
}
exports.InitChoice = InitChoice;
exports.UPDATE_CHOICE = "[Choice action] Update Choice";
class UpdateChoice {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CHOICE;
    }
}
exports.UpdateChoice = UpdateChoice;
exports.OPEN_CHOICE = "[Open action] Open Choice";
class OpenChoice {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_CHOICE;
    }
}
exports.OpenChoice = OpenChoice;
exports.KEY_CHOICE = "[Key action] Key Choice";
class KeyChoice {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.KEY_CHOICE;
    }
}
exports.KeyChoice = KeyChoice;
exports.TOWER_CHOICE = "[Tower action] Tower Choice";
class TowerChoice {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TOWER_CHOICE;
    }
}
exports.TowerChoice = TowerChoice;
//# sourceMappingURL=choice.action.js.map