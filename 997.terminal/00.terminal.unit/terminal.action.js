"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearTerminal = exports.CLEAR_TERMINAL = exports.OpenTerminal = exports.OPEN_TERMINAL = exports.LayoutTerminal = exports.LAYOUT_TERMINAL = exports.InputTerminal = exports.INPUT_TERMINAL = exports.OptionTerminal = exports.OPTION_TERMINAL = exports.CloseTerminal = exports.CLOSE_TERMINAL = exports.PrintTerminal = exports.PRINT_TERMINAL = exports.EditTerminal = exports.EDIT_TERMINAL = exports.RunTerminal = exports.RUN_TERMINAL = exports.UpdateTerminal = exports.UPDATE_TERMINAL = exports.InitTerminal = exports.INIT_TERMINAL = void 0;
exports.INIT_TERMINAL = "[Terminal action] Init Terminal";
class InitTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_TERMINAL;
    }
}
exports.InitTerminal = InitTerminal;
exports.UPDATE_TERMINAL = "[Terminal action] Update Terminal";
class UpdateTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_TERMINAL;
    }
}
exports.UpdateTerminal = UpdateTerminal;
exports.RUN_TERMINAL = "[Run action] Run Terminal";
class RunTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_TERMINAL;
    }
}
exports.RunTerminal = RunTerminal;
exports.EDIT_TERMINAL = "[Edit action] Edit Terminal";
class EditTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_TERMINAL;
    }
}
exports.EditTerminal = EditTerminal;
exports.PRINT_TERMINAL = "[Print action] Print Terminal";
class PrintTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PRINT_TERMINAL;
    }
}
exports.PrintTerminal = PrintTerminal;
exports.CLOSE_TERMINAL = "[Close action] Close Terminal";
class CloseTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_TERMINAL;
    }
}
exports.CloseTerminal = CloseTerminal;
exports.OPTION_TERMINAL = "[Option action] Option Terminal";
class OptionTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPTION_TERMINAL;
    }
}
exports.OptionTerminal = OptionTerminal;
exports.INPUT_TERMINAL = "[Input action] Input Terminal";
class InputTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INPUT_TERMINAL;
    }
}
exports.InputTerminal = InputTerminal;
exports.LAYOUT_TERMINAL = "[Layout action] Layout Terminal";
class LayoutTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LAYOUT_TERMINAL;
    }
}
exports.LayoutTerminal = LayoutTerminal;
exports.OPEN_TERMINAL = "[Layout action] Open Terminal";
class OpenTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_TERMINAL;
    }
}
exports.OpenTerminal = OpenTerminal;
exports.CLEAR_TERMINAL = "[Layout action] Clear Terminal";
class ClearTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLEAR_TERMINAL;
    }
}
exports.ClearTerminal = ClearTerminal;
//# sourceMappingURL=terminal.action.js.map