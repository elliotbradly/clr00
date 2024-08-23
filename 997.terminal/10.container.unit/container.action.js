"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContainer = exports.UPDATE_CONTAINER = exports.InitContainer = exports.INIT_CONTAINER = void 0;
// Container actions
exports.INIT_CONTAINER = "[Container action] Init Container";
class InitContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CONTAINER;
    }
}
exports.InitContainer = InitContainer;
exports.UPDATE_CONTAINER = "[Container action] Update Container";
class UpdateContainer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CONTAINER;
    }
}
exports.UpdateContainer = UpdateContainer;
//# sourceMappingURL=container.action.js.map