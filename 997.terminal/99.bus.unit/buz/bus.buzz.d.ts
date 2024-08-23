export declare const initBus: (cpy: BusModel, bal: BusBit, ste: State) => BusModel;
export declare const createBus: (cpy: BusModel, bal: BusBit, ste: State) => BusModel;
export declare const openBus: (cpy: BusModel, bal: BusBit, ste: State) => Promise<BusModel>;
export declare const connectBus: (cpy: BusModel, bal: BusBit, ste: State) => void;
export declare const messageBus: (cpy: BusModel, bal: BusBit, ste: State) => Promise<BusModel>;
export declare const updateBus: (cpy: BusModel, bal: BusBit, ste: State) => Promise<unknown>;
import { BusModel } from "../bus.model";
import BusBit from "../fce/bus.bit";
import State from "../../99.core/state";
