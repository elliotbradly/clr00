import { Action } from "../99.core/interface/action.interface";
import CanvasBit from "./fce/canvas.bit";
export declare const INIT_CANVAS = "[Canvas action] Init Canvas";
export declare class InitCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Canvas action] Init Canvas";
    constructor(bale: CanvasBit);
}
export declare const UPDATE_CANVAS = "[Canvas action] Update Canvas";
export declare class UpdateCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Canvas action] Update Canvas";
    constructor(bale: CanvasBit);
}
export declare const HEXMAP_CANVAS = "[Canvas action] Hexmap Canvas";
export declare class HexmapCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Canvas action] Hexmap Canvas";
    constructor(bale: CanvasBit);
}
export declare const READ_CANVAS = "[Read action] Read Canvas";
export declare class ReadCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Read action] Read Canvas";
    constructor(bale: CanvasBit);
}
export declare const WRITE_CANVAS = "[Write action] Write Canvas";
export declare class WriteCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Write action] Write Canvas";
    constructor(bale: CanvasBit);
}
export declare const DELETE_CANVAS = "[Delete action] Delete Canvas";
export declare class DeleteCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Delete action] Delete Canvas";
    constructor(bale: CanvasBit);
}
export declare const REMOVE_CANVAS = "[Remove action] Remove Canvas";
export declare class RemoveCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Remove action] Remove Canvas";
    constructor(bale: CanvasBit);
}
export declare const CREATE_CANVAS = "[Create action] Create Canvas";
export declare class CreateCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Create action] Create Canvas";
    constructor(bale: CanvasBit);
}
export declare const NEST_CANVAS = "[Nest action] Nest Canvas";
export declare class NestCanvas implements Action {
    bale: CanvasBit;
    readonly type = "[Nest action] Nest Canvas";
    constructor(bale: CanvasBit);
}
export type Actions = InitCanvas | UpdateCanvas | ReadCanvas | WriteCanvas | DeleteCanvas | RemoveCanvas | CreateCanvas | NestCanvas | HexmapCanvas;
