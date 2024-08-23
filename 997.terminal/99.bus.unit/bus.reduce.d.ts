import * as Act from "./bus.action";
import { BusModel } from "./bus.model";
import State from "../99.core/state";
export declare function reducer(model: BusModel, act: Act.Actions, state?: State): void | BusModel | Promise<unknown>;
