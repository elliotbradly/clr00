export declare const initTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const updateTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const openTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const closeTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const runTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const editTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const printTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const optionTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
export declare const inputTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const clearTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => Promise<TerminalModel>;
export declare const layoutTerminal: (cpy: TerminalModel, bal: TerminalBit, ste: State) => TerminalModel;
import { TerminalModel } from "../terminal.model";
import TerminalBit from "../fce/terminal.bit";
import State from "../../99.core/state";
