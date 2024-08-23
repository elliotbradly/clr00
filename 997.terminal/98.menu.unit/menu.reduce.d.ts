import * as Act from "./menu.action";
import { MenuModel } from "./menu.model";
import State from "../99.core/state";
export declare function reducer(model: MenuModel, act: Act.Actions, state?: State): MenuModel | Promise<any>;
