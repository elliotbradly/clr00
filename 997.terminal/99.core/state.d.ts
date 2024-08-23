import { BehaviorSubject } from "rx-lite";
import { Action } from "./interface/action.interface";
import UnitModel from "../BEE";
export default class State extends BehaviorSubject<any> {
    hunt: any;
    value: any;
    pivot: any;
    bus: any;
    private dispatcher;
    constructor(init?: UnitModel);
    reducedApp(nextState: any, key: any): any;
    dispatch(value: Action): any;
    pat(value: Action): void;
    next(value: any): void;
}
