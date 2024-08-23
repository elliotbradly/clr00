import Light from "./fce/light.interface";
import LightBit from "./fce/light.interface";

export class LightModel implements Light {
 idx:string = '003.light';
 //lightBitList: LightBit[] = [];
 //lightBits: any = {};
 sourceLight:any;
 fate:any;

 boundaryTitle: any = {
    "white": {idx:"00.AL.achromatic-snow", src:'white'},
    "red": {idx:"01.AB.achromatic-blood", src:'red'},
    "green": {idx:"02.CV.chromatic-virid", src:'green'},
    "blue": {idx:"03.CM.chromatic-marine", src:'blue'},
    "yello": {idx:"04.CS.chromatic-straw", src:'yello'},
    "black": {idx:"05.CI.chromatic-ink", src:'black'},
    "purple": {idx:"06.CN.chromatic-nobel", src:'purple'},
    "orange": {idx:"07.CA.chromatic-amber", src:'orange'},
    "pink": {idx:"08.CP.chromatic-peach", src:'pink'},
    "brown": {idx:"09.CC.chromatic-coffee", src:'brown'},
    "glop00": {idx:"10.AA.asymmetrical-achromatic", src:'glob00'},
    "glop01": {idx:"11.BA.bootlegged-achromatic",src:'glop01' },
    "glop02": {idx:"12.CA.criminal-achromatic", src:'glop02'},
    "glop03": {idx:"13.DA.defunct-achromatic", src:'glop03'},
    "glop04": {idx:"14.EA.execrable-achromatic", src:'glop04'},
    "glop05": {idx:"15.FAfallacious-achromatic", src:'glop05'},
    "glop06": {idx:"16.GA.grotesque-achromatic", src:'glop06'},
    "glop07": {idx:"17.HA.horrible-achromatic", src:'glop07'},
    "glop08": {idx:"18.IA.irrational-achromatic", src:'glop08'},
    "glop09": {idx:"19.JA.jejune-achromatic", src:'glop09'},
    "glop10": {idx:"20.KA.kleptomanical-achromatic", src:'glop10'},
    "glop11": {idx:"21.LA.loathsome-achromatic", src:'glop11'},
    "glop12": {idx:"22.MA.mordant-achromatic", src:'glop12'},
    "glop13": {idx:"23.NA.nasty-achromatic", src:'glop13'},
    "glop14": {idx:"24.OA.odious-achromatic", src:'glop14'},
    "glop15": {idx:"25.PA.profane-achromatic", src:'glop15'},
    "glop16": {idx:"26.QA.quixotic-achromatic", src:'glop16'},
    "glop17": {idx:"27.RA.rapacious-achromatic", src:'glop17'},
    "glop18": {idx:"29.SA.slanderous-achromatic", src:'glop18'},
    "glop19": {idx:"29.TA.tyrannical-achromatic", src:'glop19'},
    "glop20": {idx:"30.UA.unborn-achromatic", src:'glop20'},
    "glop21": {idx:"31.VA.vehement-achromatic", src:'glop21'},
    "glop22": {idx:"32.WA.worthless-achromatic", src:'glop22'},
    "glop23": {idx:"33.XA.xenophobic-achromatic", src:'glop23'},
    "glop24": {idx:"34.YA.yucky-achromatic", src:'glop24'},
    "glop25": {idx:"34.ZA.zeronic-achromatic", src:'glop25'}
  }

  boundaryData: any = {
    black: "#000000",
    white: "#ffffff",
    blue: "#0000FF",
    green: "#00FF00",
    yello: "#FFFF00",
    red: "#FF0000",
    purple: "#800080",
    orange: "#FFA500",
    brown: "#964B00",
    pink: "#ffc0cb",
    glop00: "#f5f5dc",
    glop01: "#4a0404",
    glop02: "#6082B6",
    glop03: "#93934a",
    glop04: "#32cd32",//
    glop05: "#c6b836",
    glop06: "#8A9A5B",
    glop07: "#7393B3",
    glop08: "#FF00FF",
    glop09: "#838383",
    glop10: "#e1ad01",
    glop11: "#A9A9A9",
    glop12: "#375915",
    glop13: "#a0bf16",
    glop14: "#B2BEB5",
    glop15: "#708090",
    glop16: "#b8bc86",
    glop17: "#899499",
    glop18: "#899499",
    glop19: "#818589",
    glop20: "#848884",
    glop21: "#71797E",
    glop22: "#899499",
    glop23: "#654321",
    glop24: "#808080", 
    glop25: "#36454F"
  }

}
