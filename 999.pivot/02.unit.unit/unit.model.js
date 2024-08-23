"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitModel = void 0;
class UnitModel {
    constructor() {
        this.idx = '02.unit';
        //unitBitList: UnitBit[] = [];
        //unitBits: any = {};
        this.buzzTemplate = `export const {{=it.buzNom}} = (cpy: {{=it.cpyNom}}, bal:{{=it.balNom}}, ste: State) => {
    debugger
    return cpy;
   };`;
        this.buzzerTemplate = `export { {{=it.actTle}}  } from "./buz/{{=it.root}}.buzz";`;
        this.actTemplate = `export const {{=it.actUpr}} = "{{=it.actMsg}}";
 export class {{=it.actTle}} implements Action {
  readonly type = {{=it.actUpr}};
  constructor(public bale: {{=it.bitNom}}) {}
 }`;
        this.actTemplateLower = `
 export type Actions = | {{=it.actTle}}
 `;
        this.reduceTemplate = `case Act.{{=it.actUpr}}:
 return Buzz.{{=it.actTle}}(clone(model), act.bale, state);
 `;
    }
}
exports.UnitModel = UnitModel;
//# sourceMappingURL=unit.model.js.map