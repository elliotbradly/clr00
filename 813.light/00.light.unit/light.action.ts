import { Action } from "../99.core/interface/action.interface";
import  LightBit  from "./fce/light.bit";

// Light actions

export const INIT_LIGHT = "[Light action] Init Light";
export class InitLight implements Action {
 readonly type = INIT_LIGHT;
 constructor(public bale: LightBit) {}
}

export const UPDATE_LIGHT = "[Light action] Update Light";
export class UpdateLight implements Action {
 readonly type = UPDATE_LIGHT;
 constructor(public bale: LightBit) {}
}

export const READ_LIGHT = "[Read action] Read Light";
 export class ReadLight implements Action {
 readonly type = READ_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export const SOURCE_LIGHT = "[Source action] Source Light";
 export class SourceLight implements Action {
 readonly type = SOURCE_LIGHT;
 constructor(public bale: LightBit) {}
 }
 
export type Actions = | InitLight | UpdateLight 
| ReadLight
| SourceLight