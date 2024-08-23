"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./pivot.action");
const pivot_model_1 = require("./pivot.model");
const Buzz = require("./pivot.buzzer");
function reducer(model = new pivot_model_1.PivotModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PIVOT:
            return Buzz.updatePivot(clone(model), act.bale, state);
        case Act.INIT_PIVOT:
            return Buzz.initPivot(clone(model), act.bale, state);
        case Act.OPEN_PIVOT:
            return Buzz.openPivot(clone(model), act.bale, state);
        case Act.RUN_PIVOT:
            return Buzz.runPivot(clone(model), act.bale, state);
        case Act.EDIT_PIVOT:
            return Buzz.editPivot(clone(model), act.bale, state);
        case Act.REPLACE_PIVOT:
            return Buzz.replacePivot(clone(model), act.bale, state);
        case Act.SHIP_PIVOT:
            return Buzz.shipPivot(clone(model), act.bale, state);
        case Act.PATCH_PIVOT:
            return Buzz.patchPivot(clone(model), act.bale, state);
        case Act.COUNT_PIVOT:
            return Buzz.countPivot(clone(model), act.bale, state);
        case Act.LIST_PIVOT:
            return Buzz.listPivot(clone(model), act.bale, state);
        case Act.CREATE_PIVOT:
            return Buzz.createPivot(clone(model), act.bale, state);
        case Act.CONTAINS_PIVOT:
            return Buzz.containsPivot(clone(model), act.bale, state);
        case Act.BUNDLE_PIVOT:
            return Buzz.bundlePivot(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=pivot.reduce.js.map