import * as Act from "./terminal.action";
import { TerminalModel } from "./terminal.model";
import State from "../99.core/state";
export declare function reducer(model: TerminalModel, act: Act.Actions, state?: State): TerminalModel | Promise<TerminalModel>;
