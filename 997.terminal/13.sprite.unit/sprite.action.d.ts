import { Action } from "../99.core/interface/action.interface";
import SpriteBit from "./fce/sprite.bit";
export declare const INIT_SPRITE = "[Sprite action] Init Sprite";
export declare class InitSprite implements Action {
    bale: SpriteBit;
    readonly type = "[Sprite action] Init Sprite";
    constructor(bale: SpriteBit);
}
export declare const UPDATE_SPRITE = "[Sprite action] Update Sprite";
export declare class UpdateSprite implements Action {
    bale: SpriteBit;
    readonly type = "[Sprite action] Update Sprite";
    constructor(bale: SpriteBit);
}
export type Actions = InitSprite | UpdateSprite;
