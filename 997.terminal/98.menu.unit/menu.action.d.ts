import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";
export declare const INIT_MENU = "[Menu action] Init Menu";
export declare class InitMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Init Menu";
    constructor(bale: MenuBit);
}
export declare const UPDATE_MENU = "[Menu action] Update Menu";
export declare class UpdateMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Update Menu";
    constructor(bale: MenuBit);
}
export declare const TEST_MENU = "[Menu action] Test Menu";
export declare class TestMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Test Menu";
    constructor(bale: MenuBit);
}
export declare const CLOSE_MENU = "[Menu action] Close Menu";
export declare class CloseMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Close Menu";
    constructor(bale: MenuBit);
}
export declare const SHADE_MENU = "[Shade action] Shade Menu";
export declare class ShadeMenu implements Action {
    bale: MenuBit;
    readonly type = "[Shade action] Shade Menu";
    constructor(bale: MenuBit);
}
export declare const VISAGE_MENU = "[Visage action] Visage Menu";
export declare class VisageMenu implements Action {
    bale: MenuBit;
    readonly type = "[Visage action] Visage Menu";
    constructor(bale: MenuBit);
}
export declare const CONTAINER_MENU = "[Visage action] Container Menu";
export declare class ContainerMenu implements Action {
    bale: MenuBit;
    readonly type = "[Visage action] Container Menu";
    constructor(bale: MenuBit);
}
export declare const PRINT_MENU = "[Visage action] Print Menu";
export declare class PrintMenu implements Action {
    bale: MenuBit;
    readonly type = "[Visage action] Print Menu";
    constructor(bale: MenuBit);
}
export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu | ShadeMenu | VisageMenu | ContainerMenu | PrintMenu;
