import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActClr from "../../01.color.unit/color.action";
import * as ActLgt from "../../00.light.unit/light.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action"

import * as clone from "clone-deep";

var bit, val, idx, dex, lst, dat, src;

export const initLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActLgt, ActClr], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-space" } });

    var Chance = require('chance');

    cpy.fate = new Chance(9211925);

    return cpy;
};

export const readLight = (cpy: LightModel, bal: LightBit, ste: State) => {

    if (bal.val == null) bal.val = 0

    switch (bal.val) {

        case 0:
            dat = clone(cpy.boundaryData)
            break

        case 1:
            dat = clone(cpy.boundaryTitle)
            break


    }

    if (bal.slv != null) bal.slv({ lgtBit: { idx: "read-light", dat } });

    return cpy;
};

export const updateLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '003.light' })

    if (bal.slv != null) bal.slv({ lgtBit: { idx: "udpate-light", dat: {} } });

    return cpy;
};


export const sourceLight = (cpy: LightModel, bal: LightBit, ste: State) => {
    debugger
    return cpy;
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });




import { LightModel } from "../light.model";
import LightBit from "../fce/light.bit";
import State from "../../99.core/state";