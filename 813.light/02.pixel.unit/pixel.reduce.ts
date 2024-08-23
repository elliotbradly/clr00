import * as clone from "clone-deep";
import * as Act from "./pixel.action";
import { PixelModel } from "./pixel.model";
import * as Buzz from "./pixel.buzzer";
import State from "../99.core/state";

export function reducer(model: PixelModel = new PixelModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PIXEL:
 return Buzz.updatePixel(clone(model), act.bale, state);

 case Act.INIT_PIXEL:
 return Buzz.initPixel(clone(model), act.bale, state);

case Act.PROCESS_PIXEL:
 return Buzz.processPixel(clone(model), act.bale, state);
 
case Act.REGARD_PIXEL:
 return Buzz.regardPixel(clone(model), act.bale, state);
 
case Act.LOAD_PIXEL:
 return Buzz.loadPixel(clone(model), act.bale, state);
 
case Act.SWATCH_PIXEL:
 return Buzz.swatchPixel(clone(model), act.bale, state);
 
case Act.EXPORT_PIXEL:
 return Buzz.exportPixel(clone(model), act.bale, state);
 
case Act.INDEX_PIXEL:
 return Buzz.indexPixel(clone(model), act.bale, state);
 
case Act.PAINT_PIXEL:
 return Buzz.paintPixel(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
