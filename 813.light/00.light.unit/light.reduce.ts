import * as clone from "clone-deep";
import * as Act from "./light.action";
import { LightModel } from "./light.model";
import * as Buzz from "./light.buzzer";
import State from "../99.core/state";

export function reducer(model: LightModel = new LightModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_LIGHT:
 return Buzz.updateLight(clone(model), act.bale, state);

 case Act.INIT_LIGHT:
 return Buzz.initLight(clone(model), act.bale, state);

case Act.READ_LIGHT:
 return Buzz.readLight(clone(model), act.bale, state);
 
case Act.SOURCE_LIGHT:
 return Buzz.sourceLight(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
