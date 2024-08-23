import * as ActSwc from "../../03.swatch.unit/swatch.action";
import * as ActClr from "../../01.color.unit/color.action";
import * as ActLgt from "../../00.light.unit/light.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActCns from "../../act/console.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action"

import * as clone from "clone-deep";

var bit, val, idx, dex, lst, dat, src;


export const initSwatch = (cpy: SwatchModel, bal: SwatchBit, ste: State) => {
    debugger
    return cpy;
};

export const updateSwatch = (cpy: SwatchModel, bal: SwatchBit, ste: State) => {
    return cpy;
};

export const createSwatch = async (cpy: SwatchModel, bal: SwatchBit, ste: State) => {

    debugger

    var clrMod: ColorModel = ste.value.color
    var now = clrMod.colorData

    var clrList = bal.dat.lst;
    bal.dat.lst = null

    var dat: StripBit = { idx: bal.idx };
    for (var key in bal.dat) {

        if (key == 'id') dat['dex'] = bal.dat[key]
        else dat[key] = bal.dat[key]

    }

    dat

    src = bal.dat.colorsrc

    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/swatch/' + src })
    var lst = bit.dskBit.lst;

    var dex = lst.length - 1;

    var output = []

    var convert = require('color-convert');

    var nextDir = async () => {

        bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------swatch" + dex })

        if (dex < 0) {

            output
            dat.lst = output
            bal.slv({ swcBit: { idx: 'create-swatch', dat } });

            return cpy;
        }

        var now = lst[dex];

        var fs = require("fs"),
            PNG = require("pngjs").PNG;

        src

        var data = fs.readFileSync('./data/swatch/' + src + '/' + now);
        var png = PNG.sync.read(data);

        var x = 1;
        var y = 1;

        var idx = (png.width * y + x) << 2;

        var r = png.data[idx];
        var g = png.data[idx + 1];
        var b = png.data[idx + 2];
        var a = png.data[idx + 3];



        clrList = bal.dat.dat.lst

        var id = convert.rgb.hex(r, g, b);
        bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: id, src: id, dat: { lst: clrList } })

        var data = bit.clrBit.dat

        output.push(data)

        dex -= 1
        await nextDir()
    }

    await nextDir()

    return cpy;
};


export const readSwatch = async (cpy: SwatchModel, bal: SwatchBit, ste: State) => {

    

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'swc00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSwc.CREATE_SWATCH });

    var item = bit.clcBit.dat;

 

    slv({ swcBit: { idx: "read-swatch", dat: item } });
    return cpy;
};


export const writeSwatch = async (cpy: SwatchModel, bal: SwatchBit, ste: State) => {

    debugger
    var slv = bal.slv;

    if (bal.idx == null) bal.idx = 'swc00';

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSwc.CREATE_SWATCH });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt(ActSwc.UPDATE_SWATCH, { idx: bal.idx, dat: bal.dat });

    if (slv != null) slv({ swcBit: { idx: "write-swatch", dat: item } });

    return cpy;
};

export const removeSwatch = async (cpy: SwatchModel, bal: SwatchBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSwc.DELETE_SWATCH })
    if (bal.slv != null) bal.slv({ swcBit: { idx: "remove-swatch", dat: bit.clcBit } });

    return cpy;
};
export const deleteSwatch = (cpy: SwatchModel, bal: SwatchBit, ste: State) => {
    debugger
    return cpy;
};

import { SwatchModel } from "../swatch.model";
import SwatchBit from "../fce/swatch.bit";
import State from "../../99.core/state";
import StripBit from "../fce/strip.bit"; import { ColorModel } from "813.light/01.color.unit/color.model";

