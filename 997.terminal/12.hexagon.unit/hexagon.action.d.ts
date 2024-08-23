import { Action } from "../99.core/interface/action.interface";
import HexagonBit from "./fce/hexagon.bit";
export declare const INIT_HEXAGON = "[Hexagon action] Init Hexagon";
export declare class InitHexagon implements Action {
    bale: HexagonBit;
    readonly type = "[Hexagon action] Init Hexagon";
    constructor(bale: HexagonBit);
}
export declare const UPDATE_HEXAGON = "[Hexagon action] Update Hexagon";
export declare class UpdateHexagon implements Action {
    bale: HexagonBit;
    readonly type = "[Hexagon action] Update Hexagon";
    constructor(bale: HexagonBit);
}
export declare const READ_HEXAGON = "[Read action] Read Hexagon";
export declare class ReadHexagon implements Action {
    bale: HexagonBit;
    readonly type = "[Read action] Read Hexagon";
    constructor(bale: HexagonBit);
}
export declare const WRITE_HEXAGON = "[Write action] Write Hexagon";
export declare class WriteHexagon implements Action {
    bale: HexagonBit;
    readonly type = "[Write action] Write Hexagon";
    constructor(bale: HexagonBit);
}
export declare const REMOVE_HEXAGON = "[Remove action] Remove Hexagon";
export declare class RemoveHexagon implements Action {
    bale: HexagonBit;
    readonly type = "[Remove action] Remove Hexagon";
    constructor(bale: HexagonBit);
}
export declare const DELETE_HEXAGON = "[Delete action] Delete Hexagon";
export declare class DeleteHexagon implements Action {
    bale: HexagonBit;
    readonly type = "[Delete action] Delete Hexagon";
    constructor(bale: HexagonBit);
}
export declare const CREATE_HEXAGON = "[Create action] Create Hexagon";
export declare class CreateHexagon implements Action {
    bale: HexagonBit;
    readonly type = "[Create action] Create Hexagon";
    constructor(bale: HexagonBit);
}
export type Actions = InitHexagon | UpdateHexagon | ReadHexagon | WriteHexagon | RemoveHexagon | DeleteHexagon | CreateHexagon;
