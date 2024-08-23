"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActPvt = require("../../00.pivot.unit/pivot.action");
const ActTrm = require("../../01.terminal.unit/terminal.action");
const ActDsk = require("../../96.disk.unit/disk.action");
var bit, lst, dex, src;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: 'local' });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "PIVOT PIVOT V0", bit: 'local' });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
    var lst = [ActMnu.UNIT_MENU, ActPvt.UPDATE_PIVOT, ActPvt.COUNT_PIVOT, ActPvt.CREATE_PIVOT,
        ActPvt.BUNDLE_PIVOT, ActDsk.SWATCH_DISK,
        ActDsk.COLOR_DISK
    ];
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case ActPvt.COUNT_PIVOT:
            bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "count-menu" });
            bit = await ste.hunt(ActPvt.COUNT_PIVOT, {});
            bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 2, src: JSON.stringify(bit) });
            setTimeout(() => (0, exports.updateMenu)(cpy, bal, ste), 3333);
            break;
        case ActDsk.SWATCH_DISK:
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Swatch Color..."] });
            idx = bit.trmBit.src;
            bit = await ste.hunt(ActDsk.SWATCH_DISK, { idx });
            console.log(JSON.stringify(bit));
            break;
        case ActDsk.COLOR_DISK:
            bit = await ste.hunt(ActDsk.COLOR_DISK, { src: './data/swatch.png' });
            console.log(JSON.stringify(bit));
            break;
        case ActPvt.OPEN_PIVOT:
            bit = await ste.hunt(ActPvt.OPEN_PIVOT, {});
            break;
        case ActPvt.UPDATE_PIVOT:
            bit = await ste.hunt(ActPvt.LIST_PIVOT);
            lst = bit.pvtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst });
            var val = bit.trmBit.val;
            var src = lst[val];
            bit = await ste.hunt(ActPvt.UPDATE_PIVOT, { src });
            lst = bit.pvtBit.lst;
            lst.forEach((a) => {
                ste.hunt(ActTrm.WRITE_TERMINAL, { val: 3, src: a });
            });
            break;
        case ActMnu.UNIT_MENU:
            bit = await ste.hunt(ActMnu.UNIT_MENU, {});
            break;
        case ActPvt.CREATE_PIVOT:
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Nom Pivot..."] });
            idx = bit.trmBit.src;
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Name Pivot..."] });
            src = bit.trmBit.src;
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Dex Pivot..."] });
            dex = bit.trmBit.src;
            bit = await ste.hunt(ActPvt.CREATE_PIVOT, { idx, src, dex });
            (0, exports.updateMenu)(cpy, bal, ste);
            break;
        case ActPvt.EDIT_PIVOT:
            bit = await ste.hunt(ActPvt.EDIT_PIVOT, {});
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
            lst = [ActPvt.PATCH_PIVOT];
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = await ste.hunt(ActPvt.PATCH_PIVOT, {});
            break;
        case ActPvt.BUNDLE_PIVOT:
            bit = await ste.hunt(ActPvt.BUNDLE_PIVOT, {});
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "BUNLDING...", bit: 'local' });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" });
            bit = await ste.hunt(ActPvt.LIST_PIVOT);
            lst = bit.pvtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst });
            var val = bit.trmBit.val;
            var src = lst[val];
            bit = await ste.hunt(ActPvt.BUNDLE_PIVOT, { src });
            break;
        default:
            bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    await ste.bus(ActTrm.CLOSE_TERMINAL, {});
    return cpy;
};
exports.closeMenu = closeMenu;
const shadeMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.shadeMenu = shadeMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const visageMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.visageMenu = visageMenu;
//# sourceMappingURL=00.menu.buzz.js.map