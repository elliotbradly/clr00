import { Action } from "../99.core/interface/action.interface";
import  PixelBit  from "./fce/pixel.bit";

// Pixel actions

export const INIT_PIXEL = "[Pixel action] Init Pixel";
export class InitPixel implements Action {
 readonly type = INIT_PIXEL;
 constructor(public bale: PixelBit) {}
}

export const UPDATE_PIXEL = "[Pixel action] Update Pixel";
export class UpdatePixel implements Action {
 readonly type = UPDATE_PIXEL;
 constructor(public bale: PixelBit) {}
}

export const PROCESS_PIXEL = "[Process action] Process Pixel";
 export class ProcessPixel implements Action {
 readonly type = PROCESS_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const REGARD_PIXEL = "[Regard action] Regard Pixel";
 export class RegardPixel implements Action {
 readonly type = REGARD_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const LOAD_PIXEL = "[Load action] Load Pixel";
 export class LoadPixel implements Action {
 readonly type = LOAD_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const SWATCH_PIXEL = "[Swatch action] Swatch Pixel";
 export class SwatchPixel implements Action {
 readonly type = SWATCH_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const EXPORT_PIXEL = "[Export action] Export Pixel";
 export class ExportPixel implements Action {
 readonly type = EXPORT_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const INDEX_PIXEL = "[Index action] Index Pixel";
 export class IndexPixel implements Action {
 readonly type = INDEX_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const PAINT_PIXEL = "[Paint action] Paint Pixel";
 export class PaintPixel implements Action {
 readonly type = PAINT_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export type Actions = | InitPixel | UpdatePixel 
| ProcessPixel
| RegardPixel
| LoadPixel
| SwatchPixel
| ExportPixel
| IndexPixel
| PaintPixel