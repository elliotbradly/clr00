import Model from "./99.core/interface/model.interface";

import LightUnit from "./00.light.unit/light.unit";
import ColorUnit from "./01.color.unit/color.unit";
import PixelUnit from "./02.pixel.unit/pixel.unit";
import SwatchUnit from "./03.swatch.unit/swatch.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Light from "./00.light.unit/fce/light.interface";
import { LightModel } from "./00.light.unit/light.model";
import Color from "./01.color.unit/fce/color.interface";
import { ColorModel } from "./01.color.unit/color.model";
import Pixel from "./02.pixel.unit/fce/pixel.interface";
import { PixelModel } from "./02.pixel.unit/pixel.model";
import Swatch from "./03.swatch.unit/fce/swatch.interface";
import { SwatchModel } from "./03.swatch.unit/swatch.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [LightUnit,ColorUnit,PixelUnit,SwatchUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromLight from "./00.light.unit/light.reduce";
import * as reduceFromColor from "./01.color.unit/color.reduce";
import * as reduceFromPixel from "./02.pixel.unit/pixel.reduce";
import * as reduceFromSwatch from "./03.swatch.unit/swatch.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 light : reduceFromLight.reducer, 
color : reduceFromColor.reducer, 
pixel : reduceFromPixel.reducer, 
swatch : reduceFromSwatch.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 light : Light = new LightModel();
color : Color = new ColorModel();
pixel : Pixel = new PixelModel();
swatch : Swatch = new SwatchModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
