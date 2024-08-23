import { Action } from "../99.core/interface/action.interface";
import BusBit from "./fce/bus.bit";
export declare const INIT_BUS = "[Bus action] Init Bus";
export declare class InitBus implements Action {
    bale: BusBit;
    readonly type = "[Bus action] Init Bus";
    constructor(bale: BusBit);
}
export declare const OPEN_BUS = "[Bus action] Open Bus";
export declare class OpenBus implements Action {
    bale: BusBit;
    readonly type = "[Bus action] Open Bus";
    constructor(bale: BusBit);
}
export declare const CONNECT_BUS = "[Bus action] Connect Bus";
export declare class ConnectBus implements Action {
    bale: BusBit;
    readonly type = "[Bus action] Connect Bus";
    constructor(bale: BusBit);
}
export declare const MESSAGE_BUS = "[Bus action] Message Bus";
export declare class MessageBus implements Action {
    bale: BusBit;
    readonly type = "[Bus action] Message Bus";
    constructor(bale: BusBit);
}
export declare const UPDATE_BUS = "[Bus action] Update Bus";
export declare class UpdateBus implements Action {
    bale: BusBit;
    readonly type = "[Bus action] Update Bus";
    constructor(bale: BusBit);
}
export declare const CREATE_BUS = "[Bus action] Create Bus";
export declare class CreateBus implements Action {
    bale: BusBit;
    readonly type = "[Bus action] Create Bus";
    constructor(bale: BusBit);
}
export type Actions = InitBus | OpenBus | UpdateBus | ConnectBus | MessageBus | CreateBus;
