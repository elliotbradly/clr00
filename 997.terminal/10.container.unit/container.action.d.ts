import { Action } from "../99.core/interface/action.interface";
import ContainerBit from "./fce/container.bit";
export declare const INIT_CONTAINER = "[Container action] Init Container";
export declare class InitContainer implements Action {
    bale: ContainerBit;
    readonly type = "[Container action] Init Container";
    constructor(bale: ContainerBit);
}
export declare const UPDATE_CONTAINER = "[Container action] Update Container";
export declare class UpdateContainer implements Action {
    bale: ContainerBit;
    readonly type = "[Container action] Update Container";
    constructor(bale: ContainerBit);
}
export type Actions = InitContainer | UpdateContainer;
