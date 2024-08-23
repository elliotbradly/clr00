"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sim = {
    hunt: null,
    state: null
};
sim.hunt = (typ, obj) => { return host(obj, typ); };
var host = (obj, typ) => {
    init();
    var slv;
    const promo = new Promise((rslv, rjct) => (slv = rslv));
    if (obj == null)
        obj = {};
    if (obj.slv == null)
        obj.slv = (val0) => slv(val0);
    sim.state.dispatch({ type: typ, bale: obj });
    return promo;
};
var init = () => {
    if (sim.state != null)
        return;
    sim.state = new state_1.default();
    sim.state.pivot = sim;
    sim.state.hunt = sim.hunt;
    for (var k in Import.list)
        new Import.list[k](sim.state);
};
const Import = require("./BEE");
const state_1 = require("./99.core/state");
module.exports = sim;
//# sourceMappingURL=hunt.js.map