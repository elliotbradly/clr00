import { Action } from "../99.core/interface/action.interface";
import TextBit from "./fce/text.bit";
export declare const INIT_TEXT = "[Text action] Init Text";
export declare class InitText implements Action {
    bale: TextBit;
    readonly type = "[Text action] Init Text";
    constructor(bale: TextBit);
}
export declare const UPDATE_TEXT = "[Text action] Update Text";
export declare class UpdateText implements Action {
    bale: TextBit;
    readonly type = "[Text action] Update Text";
    constructor(bale: TextBit);
}
export declare const WRITE_TEXT = "[Write action] Write Text";
export declare class WriteText implements Action {
    bale: TextBit;
    readonly type = "[Write action] Write Text";
    constructor(bale: TextBit);
}
export declare const READ_TEXT = "[Read action] Read Text";
export declare class ReadText implements Action {
    bale: TextBit;
    readonly type = "[Read action] Read Text";
    constructor(bale: TextBit);
}
export declare const REMOVE_TEXT = "[Remove action] Remove Text";
export declare class RemoveText implements Action {
    bale: TextBit;
    readonly type = "[Remove action] Remove Text";
    constructor(bale: TextBit);
}
export declare const DELETE_TEXT = "[Delete action] Delete Text";
export declare class DeleteText implements Action {
    bale: TextBit;
    readonly type = "[Delete action] Delete Text";
    constructor(bale: TextBit);
}
export declare const CREATE_TEXT = "[Create action] Create Text";
export declare class CreateText implements Action {
    bale: TextBit;
    readonly type = "[Create action] Create Text";
    constructor(bale: TextBit);
}
export type Actions = InitText | UpdateText | WriteText | ReadText | RemoveText | DeleteText | CreateText;
