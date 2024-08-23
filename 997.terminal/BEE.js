"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const terminal_unit_1 = require("./00.terminal.unit/terminal.unit");
const grid_unit_1 = require("./01.grid.unit/grid.unit");
const canvas_unit_1 = require("./02.canvas.unit/canvas.unit");
const console_unit_1 = require("./03.console.unit/console.unit");
const input_unit_1 = require("./04.input.unit/input.unit");
const choice_unit_1 = require("./05.choice.unit/choice.unit");
const container_unit_1 = require("./10.container.unit/container.unit");
const graphic_unit_1 = require("./11.graphic.unit/graphic.unit");
const hexagon_unit_1 = require("./12.hexagon.unit/hexagon.unit");
const sprite_unit_1 = require("./13.sprite.unit/sprite.unit");
const text_unit_1 = require("./14.text.unit/text.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const terminal_model_1 = require("./00.terminal.unit/terminal.model");
const grid_model_1 = require("./01.grid.unit/grid.model");
const canvas_model_1 = require("./02.canvas.unit/canvas.model");
const console_model_1 = require("./03.console.unit/console.model");
const input_model_1 = require("./04.input.unit/input.model");
const choice_model_1 = require("./05.choice.unit/choice.model");
const container_model_1 = require("./10.container.unit/container.model");
const graphic_model_1 = require("./11.graphic.unit/graphic.model");
const hexagon_model_1 = require("./12.hexagon.unit/hexagon.model");
const sprite_model_1 = require("./13.sprite.unit/sprite.model");
const text_model_1 = require("./14.text.unit/text.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [terminal_unit_1.default, grid_unit_1.default, canvas_unit_1.default, console_unit_1.default, input_unit_1.default, choice_unit_1.default, container_unit_1.default, graphic_unit_1.default, hexagon_unit_1.default, sprite_unit_1.default, text_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromTerminal = require("./00.terminal.unit/terminal.reduce");
const reduceFromGrid = require("./01.grid.unit/grid.reduce");
const reduceFromCanvas = require("./02.canvas.unit/canvas.reduce");
const reduceFromConsole = require("./03.console.unit/console.reduce");
const reduceFromInput = require("./04.input.unit/input.reduce");
const reduceFromChoice = require("./05.choice.unit/choice.reduce");
const reduceFromContainer = require("./10.container.unit/container.reduce");
const reduceFromGraphic = require("./11.graphic.unit/graphic.reduce");
const reduceFromHexagon = require("./12.hexagon.unit/hexagon.reduce");
const reduceFromSprite = require("./13.sprite.unit/sprite.reduce");
const reduceFromText = require("./14.text.unit/text.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    terminal: reduceFromTerminal.reducer,
    grid: reduceFromGrid.reducer,
    canvas: reduceFromCanvas.reducer,
    console: reduceFromConsole.reducer,
    input: reduceFromInput.reducer,
    choice: reduceFromChoice.reducer,
    container: reduceFromContainer.reducer,
    graphic: reduceFromGraphic.reducer,
    hexagon: reduceFromHexagon.reducer,
    sprite: reduceFromSprite.reducer,
    text: reduceFromText.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.terminal = new terminal_model_1.TerminalModel();
        this.grid = new grid_model_1.GridModel();
        this.canvas = new canvas_model_1.CanvasModel();
        this.console = new console_model_1.ConsoleModel();
        this.input = new input_model_1.InputModel();
        this.choice = new choice_model_1.ChoiceModel();
        this.container = new container_model_1.ContainerModel();
        this.graphic = new graphic_model_1.GraphicModel();
        this.hexagon = new hexagon_model_1.HexagonModel();
        this.sprite = new sprite_model_1.SpriteModel();
        this.text = new text_model_1.TextModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map