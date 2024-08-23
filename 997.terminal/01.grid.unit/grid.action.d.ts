import { Action } from "../99.core/interface/action.interface";
import GridBit from "./fce/grid.bit";
export declare const INIT_GRID = "[Grid action] Init Grid";
export declare class InitGrid implements Action {
    bale: GridBit;
    readonly type = "[Grid action] Init Grid";
    constructor(bale: GridBit);
}
export declare const UPDATE_GRID = "[Grid action] Update Grid";
export declare class UpdateGrid implements Action {
    bale: GridBit;
    readonly type = "[Grid action] Update Grid";
    constructor(bale: GridBit);
}
export type Actions = InitGrid | UpdateGrid;
