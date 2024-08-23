"use strict";
exports.__esModule = true;
exports.CreateBus = exports.CREATE_BUS = exports.UpdateBus = exports.UPDATE_BUS = exports.MessageBus = exports.MESSAGE_BUS = exports.ConnectBus = exports.CONNECT_BUS = exports.OpenBus = exports.OPEN_BUS = exports.InitBus = exports.INIT_BUS = void 0;
// Bus actions
exports.INIT_BUS = "[Bus action] Init Bus";
var InitBus = /** @class */ (function () {
    function InitBus(bale) {
        this.bale = bale;
        this.type = exports.INIT_BUS;
    }
    return InitBus;
}());
exports.InitBus = InitBus;
exports.OPEN_BUS = "[Bus action] Open Bus";
var OpenBus = /** @class */ (function () {
    function OpenBus(bale) {
        this.bale = bale;
        this.type = exports.OPEN_BUS;
    }
    return OpenBus;
}());
exports.OpenBus = OpenBus;
exports.CONNECT_BUS = "[Bus action] Connect Bus";
var ConnectBus = /** @class */ (function () {
    function ConnectBus(bale) {
        this.bale = bale;
        this.type = exports.CONNECT_BUS;
    }
    return ConnectBus;
}());
exports.ConnectBus = ConnectBus;
exports.MESSAGE_BUS = "[Bus action] Message Bus";
var MessageBus = /** @class */ (function () {
    function MessageBus(bale) {
        this.bale = bale;
        this.type = exports.MESSAGE_BUS;
    }
    return MessageBus;
}());
exports.MessageBus = MessageBus;
exports.UPDATE_BUS = "[Bus action] Update Bus";
var UpdateBus = /** @class */ (function () {
    function UpdateBus(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BUS;
    }
    return UpdateBus;
}());
exports.UpdateBus = UpdateBus;
exports.CREATE_BUS = "[Bus action] Create Bus";
var CreateBus = /** @class */ (function () {
    function CreateBus(bale) {
        this.bale = bale;
        this.type = exports.CREATE_BUS;
    }
    return CreateBus;
}());
exports.CreateBus = CreateBus;
//# sourceMappingURL=bus.action.js.map