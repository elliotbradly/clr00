import { Action } from "../99.core/interface/action.interface";
import ChoiceBit from "./fce/choice.bit";
export declare const INIT_CHOICE = "[Choice action] Init Choice";
export declare class InitChoice implements Action {
    bale: ChoiceBit;
    readonly type = "[Choice action] Init Choice";
    constructor(bale: ChoiceBit);
}
export declare const UPDATE_CHOICE = "[Choice action] Update Choice";
export declare class UpdateChoice implements Action {
    bale: ChoiceBit;
    readonly type = "[Choice action] Update Choice";
    constructor(bale: ChoiceBit);
}
export declare const OPEN_CHOICE = "[Open action] Open Choice";
export declare class OpenChoice implements Action {
    bale: ChoiceBit;
    readonly type = "[Open action] Open Choice";
    constructor(bale: ChoiceBit);
}
export declare const KEY_CHOICE = "[Key action] Key Choice";
export declare class KeyChoice implements Action {
    bale: ChoiceBit;
    readonly type = "[Key action] Key Choice";
    constructor(bale: ChoiceBit);
}
export declare const TOWER_CHOICE = "[Tower action] Tower Choice";
export declare class TowerChoice implements Action {
    bale: ChoiceBit;
    readonly type = "[Tower action] Tower Choice";
    constructor(bale: ChoiceBit);
}
export type Actions = InitChoice | UpdateChoice | OpenChoice | KeyChoice | TowerChoice;
