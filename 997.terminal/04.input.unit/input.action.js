"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenInput = exports.OPEN_INPUT = exports.UpdateInput = exports.UPDATE_INPUT = exports.InitInput = exports.INIT_INPUT = void 0;
// Input actions
exports.INIT_INPUT = "[Input action] Init Input";
class InitInput {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_INPUT;
    }
}
exports.InitInput = InitInput;
exports.UPDATE_INPUT = "[Input action] Update Input";
class UpdateInput {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_INPUT;
    }
}
exports.UpdateInput = UpdateInput;
exports.OPEN_INPUT = "[Open action] Open Input";
class OpenInput {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_INPUT;
    }
}
exports.OpenInput = OpenInput;
//# sourceMappingURL=input.action.js.map