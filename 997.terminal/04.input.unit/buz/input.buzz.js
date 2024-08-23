"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openInput = exports.updateInput = exports.initInput = void 0;
const initInput = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initInput = initInput;
const updateInput = (cpy, bal, ste) => {
    return cpy;
};
exports.updateInput = updateInput;
const openInput = (cpy, bal, ste) => {
    let blessed = ste.value.terminal.blessed;
    let screen = ste.value.terminal.screen;
    var dat = { idx: 'input-bit', clr0: Color.GREEN, clr1: Color.CYAN };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    let net = bal.net;
    if (bal.txt == null)
        bal.txt = 'input below';
    var title = blessed.textbox({
        parent: screen,
        name: 'input',
        keys: true,
        left: net.left,
        top: 1,
        width: net.width,
        height: 2,
        content: 'rename',
        border: { type: 'line' },
        label: bal.txt,
        style: {
        // bg: dat.clr1,
        }
    });
    var input = blessed.textbox({
        parent: screen,
        name: 'input',
        input: true,
        keys: true,
        left: net.left,
        top: net.top,
        width: net.width,
        height: net.height,
        inputOnFocus: true,
        style: {
            bg: dat.clr1,
            focus: {
                bg: 'red'
            },
            hover: {
                bg: 'red'
            }
        }
    });
    input.focus();
    input.on("submit", (src) => {
        if (bal.slv != null)
            bal.slv({ putBit: { idx: "open-input", src } });
    });
    return cpy;
};
exports.openInput = openInput;
const Color = require("../../val/console-color");
//# sourceMappingURL=input.buzz.js.map