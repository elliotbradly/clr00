import { Action } from "../99.core/interface/action.interface";
import TerminalBit from "./fce/terminal.bit";
export declare const INIT_TERMINAL = "[Terminal action] Init Terminal";
export declare class InitTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Init Terminal";
    constructor(bale: TerminalBit);
}
export declare const UPDATE_TERMINAL = "[Terminal action] Update Terminal";
export declare class UpdateTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Update Terminal";
    constructor(bale: TerminalBit);
}
export declare const RUN_TERMINAL = "[Run action] Run Terminal";
export declare class RunTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Run action] Run Terminal";
    constructor(bale: TerminalBit);
}
export declare const EDIT_TERMINAL = "[Edit action] Edit Terminal";
export declare class EditTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Edit action] Edit Terminal";
    constructor(bale: TerminalBit);
}
export declare const PRINT_TERMINAL = "[Print action] Print Terminal";
export declare class PrintTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Print action] Print Terminal";
    constructor(bale: TerminalBit);
}
export declare const CLOSE_TERMINAL = "[Close action] Close Terminal";
export declare class CloseTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Close action] Close Terminal";
    constructor(bale: TerminalBit);
}
export declare const OPTION_TERMINAL = "[Option action] Option Terminal";
export declare class OptionTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Option action] Option Terminal";
    constructor(bale: TerminalBit);
}
export declare const INPUT_TERMINAL = "[Input action] Input Terminal";
export declare class InputTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Input action] Input Terminal";
    constructor(bale: TerminalBit);
}
export declare const LAYOUT_TERMINAL = "[Layout action] Layout Terminal";
export declare class LayoutTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Layout action] Layout Terminal";
    constructor(bale: TerminalBit);
}
export declare const OPEN_TERMINAL = "[Layout action] Open Terminal";
export declare class OpenTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Layout action] Open Terminal";
    constructor(bale: TerminalBit);
}
export declare const CLEAR_TERMINAL = "[Layout action] Clear Terminal";
export declare class ClearTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Layout action] Clear Terminal";
    constructor(bale: TerminalBit);
}
export type Actions = InitTerminal | UpdateTerminal | RunTerminal | EditTerminal | PrintTerminal | CloseTerminal | OptionTerminal | InputTerminal | LayoutTerminal | OpenTerminal | ClearTerminal;
