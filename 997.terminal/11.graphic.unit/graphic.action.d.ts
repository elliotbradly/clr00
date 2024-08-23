import { Action } from "../99.core/interface/action.interface";
import GraphicBit from "./fce/graphic.bit";
export declare const INIT_GRAPHIC = "[Graphic action] Init Graphic";
export declare class InitGraphic implements Action {
    bale: GraphicBit;
    readonly type = "[Graphic action] Init Graphic";
    constructor(bale: GraphicBit);
}
export declare const UPDATE_GRAPHIC = "[Graphic action] Update Graphic";
export declare class UpdateGraphic implements Action {
    bale: GraphicBit;
    readonly type = "[Graphic action] Update Graphic";
    constructor(bale: GraphicBit);
}
export type Actions = InitGraphic | UpdateGraphic;
