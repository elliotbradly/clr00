"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./container.action");
const container_model_1 = require("./container.model");
const Buzz = require("./container.buzzer");
function reducer(model = new container_model_1.ContainerModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CONTAINER:
            return Buzz.updateContainer(clone(model), act.bale, state);
        case Act.INIT_CONTAINER:
            return Buzz.initContainer(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=container.reduce.js.map