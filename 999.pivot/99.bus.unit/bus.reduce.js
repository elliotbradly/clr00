"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./bus.action");
const bus_model_1 = require("./bus.model");
const Buzz = require("./bus.buzzer");
function reducer(model = new bus_model_1.BusModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_BUS:
            return Buzz.updateBus(clone(model), act.bale, state);
        case Act.OPEN_BUS:
            return Buzz.openBus(clone(model), act.bale, state);
        case Act.CONNECT_BUS:
            return Buzz.connectBus(clone(model), act.bale, state);
        case Act.CREATE_BUS:
            return Buzz.createBus(clone(model), act.bale, state);
        case Act.MESSAGE_BUS:
            return Buzz.connectBus(clone(model), act.bale, state);
        case Act.INIT_BUS:
            return Buzz.initBus(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=bus.reduce.js.map