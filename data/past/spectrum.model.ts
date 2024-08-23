import Spectrum from "./fce/Spectrum.interface";
import SpectrumBit from "./fce/spectrum.interface";

export class SpectrumModel implements Spectrum {
  dataSource: any = require("../../../002.color/dat/color/colorsource.json");

  list: Array<{ name: string; hex: string }> = [];
  data: any = {};

  hexNow: string;

  spectrumValue: number;
  spectrumItem: any;
  spectrumHex: any;
  spectrums: any;
  nearest: any;
  selected: any;

  guestList: Array<{ name: string; hex: string }>;
  //idx:string;
  //colorBitList: ColorBit[] = [];
  //colorBits: any = {};
  test: any;

  promoInit: Promise<any>;
  promoCreate: Promise<any>;


}
