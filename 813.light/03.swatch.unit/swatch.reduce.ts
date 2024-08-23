import * as clone from "clone-deep";
import * as Act from "./swatch.action";
import { SwatchModel } from "./swatch.model";
import * as Buzz from "./swatch.buzzer";
import State from "../99.core/state";

export function reducer(model: SwatchModel = new SwatchModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SWATCH:
 return Buzz.updateSwatch(clone(model), act.bale, state);

 case Act.INIT_SWATCH:
 return Buzz.initSwatch(clone(model), act.bale, state);

case Act.READ_SWATCH:
 return Buzz.readSwatch(clone(model), act.bale, state);
 
case Act.WRITE_SWATCH:
 return Buzz.writeSwatch(clone(model), act.bale, state);
 
case Act.REMOVE_SWATCH:
 return Buzz.removeSwatch(clone(model), act.bale, state);
 
case Act.DELETE_SWATCH:
 return Buzz.deleteSwatch(clone(model), act.bale, state);
 
case Act.CREATE_SWATCH:
 return Buzz.createSwatch(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
