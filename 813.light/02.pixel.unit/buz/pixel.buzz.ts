import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActClr from "../../01.color.unit/color.action";
import * as ActLgt from "../../00.light.unit/light.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActCns from "../../act/console.action";
import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"

//the only variables allowed
var bit, dat, lst;


export const initPixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {
    debugger
    return cpy;
};

export const updatePixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {
    return cpy;
};


export const processPixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {

    var convert = require('color-convert');

    var output = []

    bal.lst.forEach((a) => {

        var rgb = convert.hex.rgb(a.idx);
        rgb.push(255)

        a.lst.forEach((b) => {
            var itm = { x: b.x, y: b.y, lst: rgb }
            output.push(itm)
        })

    })

    bal.slv({ pxlBit: { idx: "process-pixel", lst: output } });

    return cpy;
};


//lst is the swatch
//dat are the pixels which need to be adjusted
export const regardPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

  
};


export const loadPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

    lst = []

    var fs = require("fs"),
        PNG = require("pngjs").PNG;

    fs.createReadStream(bal.src)
        .pipe(
            new PNG({
                filterType: 4,
            })
        )
        .on("parsed", function () {

            for (var y = 0; y < this.height; y++) {
                for (var x = 0; x < this.width; x++) {
                    var idx = (this.width * y + x) << 2;

                    var r = this.data[idx];
                    var b = this.data[idx + 1]
                    var g = this.data[idx + 2]
                    var a = this.data[idx + 3]

                    lst.push({ x, y, lst: [r, b, g, a] })

                }
            }

            //this.pack().pipe(fs.createWriteStream("out.png"));

            bal.slv({ pxlBit: { idx: "load-pixel", lst, dat: {} } });

        });

    //bit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/400.pixel.js', dat: shade })

    return cpy;
};


export const swatchPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {




    var dex = bal.dat.length - 1;
    lst = bal.dat

    var output = []

    var convert = require('color-convert');



    var nextDir = async () => {

        bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------pixel" + dex })

        if (dex < 1) {



            output


            bal.slv({ pxlBit: { idx: "swatch-pixel", lst: output } });
            return cpy;
        }

        var now = lst[dex];
        var r = now.lst[0]
        var g = now.lst[1]
        var b = now.lst[2]

        var id = convert.rgb.hex(r, g, b);

        var swatchList = bal.lst

        var match = []

        swatchList.forEach((a) => {

            var want = {
                "name": a.name,
                "hex": a.value
            }
            match.push(want)

        })

        bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: id, src: id, dat: { lst: match } })

        var colorData = bit.clrBit.dat.rgb

        var desire = { x: now.x, y: now.y, lst: [colorData.r, colorData.g, colorData.b] }
        output.push(desire)

        dex -= 1



        await nextDir()
    }

    await nextDir()





};




export const exportPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

    var fs = require("fs"),
        PNG = require("pngjs").PNG;

    var w = 960
    var h = 960

    if (bal.lst == null) {

        bal.lst = []

        for (var y = 0; y < h; y++) {
            for (var x = 0; x < w; x++) {
                bal.lst.push({ x, y, lst: [155, 155, 155] })
            }
        }

    }

    fs.createReadStream("./data/out.png")
        .pipe(
            new PNG({
                filterType: 4,
            })
        )
        .on("parsed", async function () {

            bal.lst.forEach((a) => {

                var x = a.x;
                var y = a.y;

                var idx = (this.width * y + x) << 2;
                this.data[idx] = a.lst[0];
                this.data[idx + 1] = a.lst[1];
                this.data[idx + 2] = a.lst[2];

                // and reduce opacity
                //this.data[idx + 3] =  1;

            })


            bit = await ste.bus(ActDsk.INDEX_DISK, { src: '../art' })
            var lst = bit.dskBit.lst;

            var idx = String( lst.length ).padStart(6, "0"); 

            var loc = '../art/' + idx + ".png"

            this.pack().pipe(fs.createWriteStream( loc ));
            bal.slv({ pxlBit: { idx: "export-pixel", src: "out.png" } });
        });


    return cpy;
};




export const indexPixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {

    var convert = require('color-convert');
    var collect = {}

    bal.lst.forEach((a) => {

        var lst = a.lst

        var idx = convert.rgb.hex(lst[0], lst[1], lst[2]);

        if (collect[idx] == null) collect[idx] = []
        collect[idx].push({ x: a.x, y: a.y })
    })

    collect

    var output = []

    for (var key in collect) {
        var itm = { idx: key, lst: collect[key] }
        output.push(itm)
    }

    bal.slv({ pxlBit: { idx: "index-pixel", lst: output } });

    return cpy;
};



export const paintPixel = async (cpy: PixelModel, bal:PixelBit, ste: State) => {
 
    var pixelList = bal.dat
    var swatchList = bal.lst

    var match = [];

    swatchList.forEach((a, b) => {
        match.push({ name: a.name, hex: a.value })
    })

    swatchList

    var check = []

    var dex = pixelList.length - 1;

    var output = []

    var convert = require('color-convert');

    var nextDir = async () => {

        if (dex < 0) {
            output
            bal.slv({ pxlBit: { idx: "paint-pixel", lst: output } });
            return cpy;
        }

        var now = pixelList[dex];

        //var r = now.lst[0]
        //var g = now.lst[1]
        //var b = now.lst[2]

        var idx = now.idx
        bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: idx, src: idx, dat: { lst: match } })

        var hex = bit.clrBit.dat.value
        output.push({ idx: hex, lst: now.lst })


        dex -= 1
        await nextDir()
    }

    await nextDir()

    return cpy;
    
 };
import { PixelModel } from "../pixel.model";
import PixelBit from "../fce/pixel.bit";
import State from "../../99.core/state";