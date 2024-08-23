"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitMenu = void 0;
const ActMnu = require("../menu.action");
//import * as ActWrk from "../../act/work.action";
const ActPvt = require("../../00.pivot.unit/pivot.action");
const ActTrm = require("../../01.terminal.unit/terminal.action");
//import * as ActDsk from "../../96.disk.unit/disk.action";
const ActUnt = require("../../02.unit.unit/unit.action");
var lst, bit, dat, src;
const unitMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 4, src: "UNIT MENU" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" });
    var list = [ActUnt.UPDATE_UNIT, ActUnt.CREATE_UNIT, ActUnt.CODE_UNIT, ActUnt.REPLACE_UNIT];
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
    bit = bit.trmBit;
    var idx = list[bit.val];
    switch (idx) {
        case ActUnt.CODE_UNIT:
            bit = await ste.hunt(ActPvt.LIST_PIVOT);
            list = bit.pvtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var src = list[val];
            bit = await ste.hunt(ActUnt.CODE_UNIT, { src });
            (0, exports.unitMenu)(cpy, bal, ste);
            break;
        case ActUnt.CREATE_UNIT:
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Create Unit"] });
            bal.src = bit.trmBit.src;
            bit = await ste.hunt(ActUnt.CREATE_UNIT, bal);
            (0, exports.unitMenu)(cpy, bal, ste);
            break;
        case ActUnt.REPLACE_UNIT:
            var list = ['core', 'bus', 'hunt', 'collect', 'vurt'];
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            bit = bit.trmBit;
            var idx = list[bit.val];
            if (idx == null) {
                bit = await ste.hunt(ActMnu.CLOSE_MENU, {});
                return;
            }
            bit = await ste.hunt(ActUnt.REPLACE_UNIT, { idx });
            (0, exports.unitMenu)(cpy, bal, ste);
            break;
        case ActUnt.UPDATE_UNIT:
            bit = await ste.hunt(ActPvt.LIST_PIVOT, {});
            list = bit.pvtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var src = list[val];
            bit = await ste.hunt(ActUnt.LIST_UNIT, { src });
            list = bit.untBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var idx = list[val];
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Input Verb"] });
            var dat = bit.trmBit.src;
            bit = await ste.hunt(ActUnt.UPDATE_UNIT, { src, idx, dat });
            (0, exports.unitMenu)(cpy, bal, ste);
            //var list = ['core', 'bus', 'hunt']
            //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst: list });
            //bit = bit.trmBit;
            //var idx = list[bit.val];
            //ste.hunt(ActVrt.REPLACE_VURT, { idx })
            break;
    }
    return cpy;
};
exports.unitMenu = unitMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//import * as PIVOT from "../../val/pivot"
//import { BusModel } from "999.vurt/99.bus.unit/bus.model";
//import * as COLOR_SORT from "../../val/color-sort"
//# sourceMappingURL=unit-menu.js.map