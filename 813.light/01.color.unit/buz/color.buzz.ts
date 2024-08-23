import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActClr from "../../01.color.unit/color.action";
import * as ActLgt from "../../00.light.unit/light.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"

var bit, dat;
var near, near0

export const initColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {
    debugger
    return cpy;
};

export const openColor = async (cpy: ColorModel, bal: ColorBit, ste: State) => {

    var data = {}

    var list = bal.dat;
    list.forEach((a) => {
        var idx = a.name.toLowerCase();
        data[idx] = a.hex;
    });

    
    cpy.colorData = data;

    debugger


    if (bal.slv != null) bal.slv({ clrBit: { idx: "open-color", dat: cpy.colorData } });

    return cpy;
};


export const createColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {

    var dat: HueBit = { idx: bal.idx, src: bal.src, bit: null, dat: null };

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    var data = {}

    if ( bal.dat == null ){

        cpy
        debugger
    }

    var list = bal.dat.lst;

    list.forEach((a) => {
        var idx = S(a.name).slugify().s;
        data[idx] = a.hex;
    });

    dat.dat = data;
    dat.bit = require("nearest-color").from(data);

    
    var modClr: LightModel = ste.value.light


    near = require("nearest-color").from(data);
    cpy.boundaryList = require("nearest-color").from(modClr.boundaryData);

    dat

    
    if (bal.slv != null) return bal.slv({ clrBit: { idx: "create-color", dat } });

    return cpy;
};

export const updateColor = async (cpy: ColorModel, bal: ColorBit, ste: State) => {

    bit = await ste.hunt(ActClr.READ_COLOR, { idx: bal.idx })
    dat = bit.clrBit.dat

    bal.src;

    var itm = dat.bit(bal.src)
    var now =cpy.boundaryList( bal.src)

    itm.flavor = now.name
    


    //whatare you closest too

    if (bal.slv != null) return bal.slv({ clrBit: { idx: "update-container", dat: itm } });

    return cpy;
};





export const readColor = async (cpy: ColorModel, bal: ColorBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'clr00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActClr.CREATE_COLOR })

    
    if (bal.src != null) {

        if (Array.from(bal.src)[0] != '#') bal.src = '#' + bal.src;

        bit = await ste.hunt(ActClr.UPDATE_COLOR, { idx: bal.idx, src: bal.src })
        var colorDat = bit.clrBit.dat
        bit = colorDat


    } else bit = bit.clcBit.dat;

    if (slv != null) slv({ clrBit: { idx: "read-color", dat: bit } });

    return cpy;
};


export const writeColor = async (cpy: ColorModel, bal: ColorBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClr.CREATE_COLOR })

    if (bal.src != null) {

        if (Array.from(bal.src)[0] != '#') bal.src = '#' + bal.src;

        bit = await ste.hunt(ActClr.UPDATE_COLOR, { idx: bal.idx, src: bal.src })
        var colorDat = bit.clrBit.dat
        bit = colorDat


    } else bit = bit.clcBit.dat;

    if (bal.slv != null) bal.slv({ clrBit: { idx: "write-color", dat: bit } });

    return cpy;
};

export const removeColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {
    debugger
    return cpy;
};

export const deleteColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {
    debugger
    return cpy;
};

export const mixColor = async (cpy: ColorModel, bal: ColorBit, ste: State) => {

    var lst = bal.dat.lst;
    var val = bal.dat.val;

    var rgb0 = convert.hex.rgb(lst[0]);
    var rgb1 = convert.hex.rgb(lst[1]);

    var clr0 = Color.rgb(rgb0);
    var clr1 = Color.rgb(rgb1);

    if (val == null) val = 0.5;

    val

    var mix = clr0.mix(clr1, val);

    var mixColor = mix.color;

    var mixHex = convert.rgb.hex(mixColor);

    bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: bal.idx, src: mixHex })
    dat = bit.clrBit.dat;

    if (bal.slv != null) bal.slv({ clrBit: { idx: "mix-color", dat } });

    return cpy;
};


export const fateColor = (cpy: ColorModel, bal: ColorBit, ste: State) => {
    debugger
    return cpy;
};



export const swatchColor = async (cpy: ColorModel, bal: ColorBit, ste: State) => {

    bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: 'swatch-color', dat: { lst: bal.dat.lst } })

    var list = bit.clrBit.dat.lst
    
    var data

    var dex = list.length - 1;

    var output = []


    var now = async () => {

        var itm = list[dex]

        
        if (dex <= 0) {

            bal.slv({ clrBit: { idx: "swatch-color", dat:{lst:output} } });
            return
        }

        var mixHex = itm.hex

        bit = await ste.hunt(ActClr.READ_COLOR, { idx: 'swatch-color', src:mixHex })
        
        var pow = bit.clrBit
        output.push( pow )
        //here is where we write 
        //here is where we take that information and make a swatch

        dex -= 1;
        await now()
    }

    await now()

    //loop through and write swatches

    cpy.colorData = data;

    return cpy;
};



export const paletteColor = (cpy: ColorModel, bal:ColorBit, ste: State) => {
 debugger
 return cpy;
 };
import * as Color from "color";
import { ColorModel } from "../color.model";
import ColorBit from "../fce/color.bit";
import State from "../../99.core/state";
import convert = require("color-convert");
import * as S from 'string'
import { LightModel } from "../../00.light.unit/light.model";
import HueBit from "../fce/hue.bit";

