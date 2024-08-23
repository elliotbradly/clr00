import * as ActMnu from "../menu.action";

import * as ActSwc from "../../03.swatch.unit/swatch.action";

//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActDsk from "../../act/disk.action"

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";
import * as ActPut from "../../act/input.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

var pixelData;

export const swatchMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ActSwc.WRITE_SWATCH, ActSwc.READ_SWATCH]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
  src = bit.chcBit.src;

  switch (src) {

    case ActSwc.WRITE_SWATCH:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/swatch' })
      var lst = bit.dskBit.lst;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      var colorsrc = bit.chcBit.src;

      bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json'  })
      dat = bit.dskBit.dat;
      var datClr = JSON.parse(dat)

      bit = await ste.hunt(ActSwc.WRITE_SWATCH, { dat: { colorsrc, dat:{swc:colorsrc, lst:datClr } } })
      debugger
      
      bit = await ste.hunt(ActMnu.PRINT_MENU, {src: 'size of swatch::: '+ bit.swcBit.dat.lst.length})
      break;

    case ActSwc.READ_SWATCH:
      bit = await ste.hunt(ActSwc.READ_SWATCH, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActMnu.UPDATE_MENU:
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  setTimeout(async () => {

    bit = await ste.hunt(ActMnu.SWATCH_MENU, {})

  }, 333)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

