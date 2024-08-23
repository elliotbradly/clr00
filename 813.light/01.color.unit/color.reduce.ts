import * as clone from "clone-deep";
import * as Act from "./color.action";
import { ColorModel } from "./color.model";
import * as Buzz from "./color.buzzer";
import State from "../99.core/state";

export function reducer(model: ColorModel = new ColorModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_COLOR:
 return Buzz.updateColor(clone(model), act.bale, state);

 case Act.INIT_COLOR:
 return Buzz.initColor(clone(model), act.bale, state);

case Act.OPEN_COLOR:
 return Buzz.openColor(clone(model), act.bale, state);
 
case Act.READ_COLOR:
 return Buzz.readColor(clone(model), act.bale, state);
 
case Act.WRITE_COLOR:
 return Buzz.writeColor(clone(model), act.bale, state);
 
case Act.REMOVE_COLOR:
 return Buzz.removeColor(clone(model), act.bale, state);
 
case Act.DELETE_COLOR:
 return Buzz.deleteColor(clone(model), act.bale, state);
 
case Act.CREATE_COLOR:
 return Buzz.createColor(clone(model), act.bale, state);
 
case Act.MIX_COLOR:
 return Buzz.mixColor(clone(model), act.bale, state);
 
case Act.FATE_COLOR:
 return Buzz.fateColor(clone(model), act.bale, state);
 
case Act.SWATCH_COLOR:
 return Buzz.swatchColor(clone(model), act.bale, state);
 
case Act.PALETTE_COLOR:
 return Buzz.paletteColor(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
