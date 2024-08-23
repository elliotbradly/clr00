import * as Act from "./collect.action";
import { CollectModel } from "./collect.model";
import State from "../99.core/state";
export declare function reducer(model: CollectModel, act: Act.Actions, state?: State): Promise<any> | CollectModel;
