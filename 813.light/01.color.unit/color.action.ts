import { Action } from "../99.core/interface/action.interface";
import  ColorBit  from "./fce/color.bit";

// Color actions

export const INIT_COLOR = "[Color action] Init Color";
export class InitColor implements Action {
 readonly type = INIT_COLOR;
 constructor(public bale: ColorBit) {}
}

export const UPDATE_COLOR = "[Color action] Update Color";
export class UpdateColor implements Action {
 readonly type = UPDATE_COLOR;
 constructor(public bale: ColorBit) {}
}

export const OPEN_COLOR = "[Open action] Open Color";
 export class OpenColor implements Action {
 readonly type = OPEN_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const READ_COLOR = "[Read action] Read Color";
 export class ReadColor implements Action {
 readonly type = READ_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const WRITE_COLOR = "[Write action] Write Color";
 export class WriteColor implements Action {
 readonly type = WRITE_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const REMOVE_COLOR = "[Remove action] Remove Color";
 export class RemoveColor implements Action {
 readonly type = REMOVE_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const DELETE_COLOR = "[Delete action] Delete Color";
 export class DeleteColor implements Action {
 readonly type = DELETE_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const CREATE_COLOR = "[Create action] Create Color";
 export class CreateColor implements Action {
 readonly type = CREATE_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const MIX_COLOR = "[Mix action] Mix Color";
 export class MixColor implements Action {
 readonly type = MIX_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const FATE_COLOR = "[Fate action] Fate Color";
 export class FateColor implements Action {
 readonly type = FATE_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const SWATCH_COLOR = "[Swatch action] Swatch Color";
 export class SwatchColor implements Action {
 readonly type = SWATCH_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export const PALETTE_COLOR = "[Palette action] Palette Color";
 export class PaletteColor implements Action {
 readonly type = PALETTE_COLOR;
 constructor(public bale: ColorBit) {}
 }
 
export type Actions = | InitColor | UpdateColor 
| OpenColor
| ReadColor
| WriteColor
| RemoveColor
| DeleteColor
| CreateColor
| MixColor
| FateColor
| SwatchColor
| PaletteColor