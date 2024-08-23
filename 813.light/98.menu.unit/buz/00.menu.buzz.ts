import * as ActMnu from "../menu.action";
import * as ActLgt from "../../00.light.unit/light.action";
import * as ActClr from "../../01.color.unit/color.action";

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";
import * as ActDsk from "../../act/disk.action"
import * as ActPut from "../../act/input.action";

var bit, lst, dex, idx, dat, src, val;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 3, ySpan: 12 })
  bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 9, ySpan: 12 })
  bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "LIGHT PIVOT V0" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  //lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, , ActMnu.RENDER_MENU]

  lst = [  ActMnu.PIXEL_MENU, ActMnu.SWATCH_MENU,  ActClr.MIX_COLOR, ActClr.WRITE_COLOR, ActClr.READ_COLOR, ActLgt.UPDATE_LIGHT, ActClr.OPEN_COLOR, ActLgt.READ_LIGHT, ActClr.PALETTE_COLOR, ActClr.SWATCH_COLOR]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
  src = bit.chcBit.src;

  switch (src) {


    case ActMnu.PIXEL_MENU:
      bit = await ste.hunt(ActMnu.PIXEL_MENU, {})
      break;

    case ActMnu.SWATCH_MENU:
      bit = await ste.hunt(ActMnu.SWATCH_MENU, {})
      break;


    case ActClr.MIX_COLOR:

      bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' })
      var dat = bit.dskBit.dat;
      dat = JSON.parse(dat)

      bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: 'clr00', dat: { lst: dat } })

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat })
      var clr0 = '#' + bit.putBit.src;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat })
      var clr1 = '#' + bit.putBit.src;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat })
      val = Number(bit.putBit.src);

      //bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' })
      //var dat = bit.dskBit.dat;
      //dat = JSON.parse(dat)

      //bit = await ste.hunt(ActClr.OPEN_COLOR, { dat })
      bit = await ste.hunt(ActClr.MIX_COLOR, { idx: 'clr00', dat: { lst: [clr0, clr1], val } })

      src = JSON.stringify(bit.clrBit.dat);
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src })

      break;


    case ActClr.SWATCH_COLOR:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/color-list/' })
      lst = bit.dskBit.lst;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
      bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/' + src })
      dat = bit.dskBit.dat;
      var datClr = JSON.parse(dat)

      bit = await ste.bus(ActDsk.ENSURE_DISK, { src: '../color/' + src })

      bit = await ste.hunt(ActClr.SWATCH_COLOR, { idx: 'clr-swatch', src: '../color', dat: { lst: datClr } })

      lst = bit.clrBit.dat.lst

      var dex = lst.length - 1;

      var next = async () => {

        if (dex <= 0) {
          return
        }

        var itm = lst[dex].dat
        dex -= 1;
        itm
        var hex = itm.value;
        var file = '../color/' + src + '/' + itm.flavor + '/';
        bit = await ste.bus(ActDsk.ENSURE_DISK, { src: file })
        file += itm.name + '.png'

        bit = await ste.bus(ActDsk.SWATCH_DISK, { idx: hex, src: file })
        await next()
      }

      await next()

      break;

    case ActClr.PALETTE_COLOR:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: '../palette/' })
      lst = bit.dskBit.lst;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
      bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      debugger

      bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/' + src })
      dat = bit.dskBit.dat;
      var datClr = JSON.parse(dat)

      bit = await ste.bus(ActDsk.ENSURE_DISK, { src: '../color/' + src })

      bit = await ste.hunt(ActClr.SWATCH_COLOR, { idx: 'clr-swatch', src: '../color', dat: { lst: datClr } })

      lst = bit.clrBit.dat.lst

      var dex = lst.length - 1;

      var next = async () => {

        if (dex <= 0) {
          return
        }

        var itm = lst[dex].dat
        dex -= 1;
        itm
        var hex = itm.value;
        var file = '../color/' + src + '/' + itm.flavor + '/';
        bit = await ste.bus(ActDsk.ENSURE_DISK, { src: file })
        file += itm.name + '.png'

        bit = await ste.bus(ActDsk.SWATCH_DISK, { idx: hex, src: file })
        await next()
      }

      await next()

      break;

    case ActClr.WRITE_COLOR:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/color-list/' })
      lst = bit.dskBit.lst;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
      bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/' + src })
      dat = bit.dskBit.dat;
      var datClr = JSON.parse(dat)



      bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: 'clr000', src: 'FF00FF', dat: { lst: datClr } })
      //src = JSON.stringify( bit.lgtBit.dat ) 

      //lst = src.split(',')
      //lst.forEach( async (a) =>{
      //  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })
      //})

      break;

    case ActClr.READ_COLOR:

      //bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 })
      //bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat })
      //idx = '#' + bit.putBit.src;

      bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' })
      var dat = bit.dskBit.dat;
      dat = JSON.parse(dat)

      bit = await ste.hunt(ActClr.OPEN_COLOR, { dat })

      bit = await ste.hunt(ActClr.READ_COLOR, { idx: 'clr000', src: '00FF00' })


      src = bit.clrBit.src;

      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src })

      break;

    case ActLgt.READ_LIGHT:

      lst = ['000', '001']

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
      bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      val = Number(src)

      bit = await ste.hunt(ActLgt.READ_LIGHT, { val })
      src = JSON.stringify(bit.lgtBit.dat)

      lst = src.split(',')
      lst.forEach(async (a) => {
        bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })
      })

      break;


    case ActLgt.UPDATE_LIGHT:
      bit = await ste.hunt(ActLgt.UPDATE_LIGHT, {})
      break;

    case ActClr.OPEN_COLOR:

      bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' })
      var dat = bit.dskBit.dat;
      dat = JSON.parse(dat)

      bit = await ste.hunt(ActClr.OPEN_COLOR, { dat })
      break;




    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src })

  updateMenu(cpy, bal, ste);


  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.bus(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

