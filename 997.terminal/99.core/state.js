"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rx_lite_1 = require("rx-lite");
const rx_lite_2 = require("rx-lite");
const BEE_1 = require("../BEE");
const Effect = require("../BEE");
class State extends rx_lite_1.BehaviorSubject {
    constructor(init = new BEE_1.default()) {
        super(init);
        this.dispatcher = new rx_lite_2.Subject();
        this.dispatcher
            .scan((state, action) => this.reducedApp(state, action), init)
            .subscribe((state) => {
            super.onNext(state);
        });
    }
    reducedApp(nextState, key) {
        for (var k in Effect.reducer)
            Effect.reducer[k](nextState[k], key, this);
        return nextState;
    }
    dispatch(value) {
        var result = this.dispatcher.onNext(value);
        return result;
    }
    pat(value) {
        this.dispatch(value);
    }
    next(value) {
        this.dispatcher.onNext(value);
    }
}
exports.default = State;
//# sourceMappingURL=state.js.map