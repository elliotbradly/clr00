"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPort = exports.ADD_PORT = exports.ContentTerminal = exports.CONTENT_TERMINAL = exports.RootTerminal = exports.ROOT_TERMINAL = exports.CloseTerminal = exports.CLOSE_TERMINAL = exports.TableTerminal = exports.TABLE_TERMINAL = exports.InputTerminal = exports.INPUT_TERMINAL = exports.ClearTerminal = exports.CLEAR_TERMINAL = exports.UpdateTerminal = exports.UPDATE_TERMINAL = exports.WriteTerminal = exports.WRITE_TERMINAL = exports.FocusTerminal = exports.FOCUS_TERMINAL = exports.OpenTerminal = exports.OPEN_TERMINAL = exports.InitTerminal = exports.INIT_TERMINAL = void 0;
// Terminal actions
exports.INIT_TERMINAL = "[Terminal action] Init Terminal";
class InitTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_TERMINAL;
    }
}
exports.InitTerminal = InitTerminal;
exports.OPEN_TERMINAL = "[Terminal action] Open Terminal";
class OpenTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_TERMINAL;
    }
}
exports.OpenTerminal = OpenTerminal;
exports.FOCUS_TERMINAL = "[Terminal action] Focus Terminal";
class FocusTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FOCUS_TERMINAL;
    }
}
exports.FocusTerminal = FocusTerminal;
exports.WRITE_TERMINAL = "[Terminal action] Write Terminal";
class WriteTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_TERMINAL;
    }
}
exports.WriteTerminal = WriteTerminal;
exports.UPDATE_TERMINAL = "[Terminal action] Update Terminal";
class UpdateTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_TERMINAL;
    }
}
exports.UpdateTerminal = UpdateTerminal;
exports.CLEAR_TERMINAL = "[Terminal action] Clear Terminal";
class ClearTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLEAR_TERMINAL;
    }
}
exports.ClearTerminal = ClearTerminal;
exports.INPUT_TERMINAL = "[Terminal action] Input Terminal";
class InputTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INPUT_TERMINAL;
    }
}
exports.InputTerminal = InputTerminal;
exports.TABLE_TERMINAL = "[Terminal action] Table Terminal";
class TableTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TABLE_TERMINAL;
    }
}
exports.TableTerminal = TableTerminal;
exports.CLOSE_TERMINAL = "[Terminal action] Close Terminal";
class CloseTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_TERMINAL;
    }
}
exports.CloseTerminal = CloseTerminal;
exports.ROOT_TERMINAL = "[Terminal action] Root Terminal";
class RootTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ROOT_TERMINAL;
    }
}
exports.RootTerminal = RootTerminal;
exports.CONTENT_TERMINAL = "[Terminal action] Content Terminal";
class ContentTerminal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CONTENT_TERMINAL;
    }
}
exports.ContentTerminal = ContentTerminal;
exports.ADD_PORT = "[Terminal action] Add Port";
class AddPort {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ADD_PORT;
    }
}
exports.AddPort = AddPort;
//# sourceMappingURL=terminal.action.js.map