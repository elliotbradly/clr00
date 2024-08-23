import { Action } from "../99.core/interface/action.interface";
import  SwatchBit  from "./fce/swatch.bit";

// Swatch actions

export const INIT_SWATCH = "[Swatch action] Init Swatch";
export class InitSwatch implements Action {
 readonly type = INIT_SWATCH;
 constructor(public bale: SwatchBit) {}
}

export const UPDATE_SWATCH = "[Swatch action] Update Swatch";
export class UpdateSwatch implements Action {
 readonly type = UPDATE_SWATCH;
 constructor(public bale: SwatchBit) {}
}

export const READ_SWATCH = "[Read action] Read Swatch";
 export class ReadSwatch implements Action {
 readonly type = READ_SWATCH;
 constructor(public bale: SwatchBit) {}
 }
 
export const WRITE_SWATCH = "[Write action] Write Swatch";
 export class WriteSwatch implements Action {
 readonly type = WRITE_SWATCH;
 constructor(public bale: SwatchBit) {}
 }
 
export const REMOVE_SWATCH = "[Remove action] Remove Swatch";
 export class RemoveSwatch implements Action {
 readonly type = REMOVE_SWATCH;
 constructor(public bale: SwatchBit) {}
 }
 
export const DELETE_SWATCH = "[Delete action] Delete Swatch";
 export class DeleteSwatch implements Action {
 readonly type = DELETE_SWATCH;
 constructor(public bale: SwatchBit) {}
 }
 
export const CREATE_SWATCH = "[Create action] Create Swatch";
 export class CreateSwatch implements Action {
 readonly type = CREATE_SWATCH;
 constructor(public bale: SwatchBit) {}
 }
 
export type Actions = | InitSwatch | UpdateSwatch 
| ReadSwatch
| WriteSwatch
| RemoveSwatch
| DeleteSwatch
| CreateSwatch