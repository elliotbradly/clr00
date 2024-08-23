"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBus = exports.CREATE_BUS = exports.UpdateBus = exports.UPDATE_BUS = exports.MessageBus = exports.MESSAGE_BUS = exports.ConnectBus = exports.CONNECT_BUS = exports.OpenBus = exports.OPEN_BUS = exports.InitBus = exports.INIT_BUS = void 0;
// Bus actions
exports.INIT_BUS = "[Bus action] Init Bus";
class InitBus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_BUS;
    }
}
exports.InitBus = InitBus;
exports.OPEN_BUS = "[Bus action] Open Bus";
class OpenBus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_BUS;
    }
}
exports.OpenBus = OpenBus;
exports.CONNECT_BUS = "[Bus action] Connect Bus";
class ConnectBus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CONNECT_BUS;
    }
}
exports.ConnectBus = ConnectBus;
exports.MESSAGE_BUS = "[Bus action] Message Bus";
class MessageBus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MESSAGE_BUS;
    }
}
exports.MessageBus = MessageBus;
exports.UPDATE_BUS = "[Bus action] Update Bus";
class UpdateBus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BUS;
    }
}
exports.UpdateBus = UpdateBus;
exports.CREATE_BUS = "[Bus action] Create Bus";
class CreateBus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_BUS;
    }
}
exports.CreateBus = CreateBus;
//# sourceMappingURL=bus.action.js.map