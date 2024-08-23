"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.reducer = void 0;
var clone = __importStar(require("clone-deep"));
var Act = __importStar(require("./collect.action"));
var collect_model_1 = require("./collect.model");
var Buzz = __importStar(require("./collect.buzzer"));
function reducer(model, act, state) {
    if (model === void 0) { model = new collect_model_1.CollectModel(); }
    switch (act.type) {
        case Act.UPDATE_COLLECT:
            return Buzz.updateCollect(clone(model), act.bale, state);
        case Act.INIT_COLLECT:
            return Buzz.initCollect(clone(model), act.bale, state);
        case Act.READ_COLLECT:
            return Buzz.readCollect(clone(model), act.bale, state);
        case Act.WRITE_COLLECT:
            return Buzz.writeCollect(clone(model), act.bale, state);
        case Act.CREATE_COLLECT:
            return Buzz.createCollect(clone(model), act.bale, state);
        case Act.DELETE_COLLECT:
            return Buzz.deleteCollect(clone(model), act.bale, state);
        case Act.REMOVE_COLLECT:
            return Buzz.removeCollect(clone(model), act.bale, state);
        case Act.EMPTY_COLLECT:
            return Buzz.emptyCollect(clone(model), act.bale, state);
        case Act.FETCH_COLLECT:
            return Buzz.fetchCollect(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=collect.reduce.js.map