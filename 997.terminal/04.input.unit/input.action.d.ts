import { Action } from "../99.core/interface/action.interface";
import InputBit from "./fce/input.bit";
export declare const INIT_INPUT = "[Input action] Init Input";
export declare class InitInput implements Action {
    bale: InputBit;
    readonly type = "[Input action] Init Input";
    constructor(bale: InputBit);
}
export declare const UPDATE_INPUT = "[Input action] Update Input";
export declare class UpdateInput implements Action {
    bale: InputBit;
    readonly type = "[Input action] Update Input";
    constructor(bale: InputBit);
}
export declare const OPEN_INPUT = "[Open action] Open Input";
export declare class OpenInput implements Action {
    bale: InputBit;
    readonly type = "[Open action] Open Input";
    constructor(bale: InputBit);
}
export type Actions = InitInput | UpdateInput | OpenInput;
