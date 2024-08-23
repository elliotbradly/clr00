//the colors we work from
var fate, near, near0;

import * as ActTtl from "../../00.core/title/title.action";
import * as ActSpc from "../spectrum.action";

export const readSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  if (bal.val == null) bal.val = 0;

  let hex;

  switch (bal.val) {
    // we give the read spectrum a hex and it returns a name

    case 1:
      let itm = near(bal.idx);
      hex = itm.name;
      break;

    case 0:
      hex = cpy.data[bal.idx];
      if (hex == null) console.log("can not read spectrum for " + bal.idx);
      break;
  }

  cpy.hexNow = hex;

  return cpy;
};

export const createSpectrum = async (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  return cpy;
};

export const selectSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  var val = fate.integer({ min: 0, max: cpy.guestList.length });
  cpy.selected = cpy.guestList.splice(val, 1)[0];

  //check to make sure the world has not crashed

  return cpy;
};

export const fetchSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  if (bal.val == null) bal.val = 1;

  var output = [];

  for (var i = 0; i < bal.val; i++) {
    var item = fate.pickone(cpy.list);
    output.push(item);
  }

  cpy.spectrumItem = output;
  return cpy;
};

export const matchSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  var clrNom0 = S(bal.idx).slugify().s;

  var clrList = [];

  bal.lst.forEach((a, b) => {
    bal.lst[b] = S(a).slugify().s;
    var item = cpy.spectrums[bal.lst[b]];
  });

  return cpy;
};

export const mapSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  debugger;
  return cpy;
};

export const mixSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  var clrNom0 = S(bal.idx).slugify().s;
  var clrNom1 = S(bal.src).slugify().s;

  var hex0 = cpy.data[clrNom0];
  var hex1 = cpy.data[clrNom1];

  var rgb0 = fromHexToRGB(hex0);
  var rgb1 = fromHexToRGB(hex1);

  var clr0 = Color.rgb(rgb0);
  var clr1 = Color.rgb(rgb1);

  if (bal.val == null) bal.val = 0.5;

  var mix = clr0.mix(clr1, bal.val);
  var repect = mix.rgb().array();

  var word = convert.rgb.hex([repect[0], repect[1], repect[2]]);

  if (near == null) return (cpy.spectrumItem = "no near");

  cpy.spectrumItem = { idx: near(word).name, src: near0(word).name };

  return cpy;
};

export const updateSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  //cpy.list = [{ name: "starcruiser", hex: "crash" }];
  cpy.list = JSON.parse(bal.dat);
  cpy.list.forEach((a) => {
    var idx = a.name.toLowerCase();
    cpy.data[idx] = a.hex;
  });

  near = require("nearest-color").from(cpy.data);
  near0 = require("nearest-color").from(cpy.boundaryData);

  return cpy;
};

export const setupSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  var FS = require("fs-extra");

  let srcDir = "../color/master/";
  FS.ensureDirSync(srcDir);

  var list = [];

  cpy.dataSource.forEach((a) => {
    var idx = a.idx + "." + a.name;
    list.push(idx);
    FS.ensureDirSync(srcDir + idx);
  });

  debugger;
  return cpy;
};

export const initSpectrum = (cpy: SpectrumModel, bal: SpectrumBit, ste: State) => {
  fate = new Fate("092125");

  var titleModel: TitleModel = ste.value.title;

  patch(ste, ActTtl.MAKE_REQUEST, { method: "GET", url: "./002.color/dat/color/colornames.json" });
  var promo0 = titleModel.request;
  promo0.then((rsp) => patch(ste, ActSpc.UPDATE_SPECTRUM, { dat: rsp }));
  promo0.catch((error) => console.log(" error " + JSON.stringify(error)));

  cpy.promoInit = Promise.all([promo0]);
  cpy.test = { idx: "init-spectrum" };

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

var fromHexToRGB = (hex: string) => {
  return convert.hex.rgb(hex);
};

import { SpectrumModel } from "../spectrum.model";
import SpectrumBit from "../fce/spectrum.bit";
import State from "../../00.core/state";

import * as nearestColor from "nearest-color";
import * as Color from "color";
import * as Fuse from "fuse.js";
import Vibrant = require("node-vibrant");
import convert = require("color-convert");
import * as S from "string";
import * as Fate from "chance";

import { TitleModel } from "../../00.core/title/title.model";
