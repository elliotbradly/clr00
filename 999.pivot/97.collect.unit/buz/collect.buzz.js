"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCollect = exports.dotCollect = exports.emptyCollect = exports.deleteCollect = exports.modelCollect = exports.getCollect = exports.putCollect = exports.removeCollect = exports.createCollect = exports.writeCollect = exports.readCollect = exports.fetchCollect = exports.updateCollect = exports.initCollect = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
var bit, lst, dat, idx, val, src, dex;
const initCollect = (cpy, bal, ste) => {
    return cpy;
};
exports.initCollect = initCollect;
const updateCollect = (cpy, bal, ste) => {
    return cpy;
};
exports.updateCollect = updateCollect;
//return the first item in a collection
const fetchCollect = (cpy, bal, ste) => {
    if (bal.val == null)
        bal.val = 1;
    if ((bal.bit == null))
        bal.slv({ clcBit: { idx: "fetch-collect-err", src: 'no-bit' } });
    var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
    var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
    if (bal.val == 1)
        bit = cabBit.bitList[0];
    else
        bit = cabBit;
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "fetch-collect", dat: bit } });
    return cpy;
};
exports.fetchCollect = fetchCollect;
const readCollect = async (cpy, bal, ste) => {
    if ((bal.bit == null))
        bal.slv({ clcBit: { idx: "read-collect-err", src: 'no-bit' } });
    var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
    if (cpy.caboodleBits[type] == null)
        (0, exports.createCollect)(cpy, { idx: type }, ste);
    var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
    if (cabBit.bits[bal.idx] == null) {
        bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, bit: bal.bit });
    }
    else {
        dat = cabBit.bitList[cabBit.bits[bal.idx]];
    }
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "read-collect", dat } });
    return cpy;
};
exports.readCollect = readCollect;
const writeCollect = async (cpy, bal, ste) => {
    dat = null;
    //let us check see if it exists 
    var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
    if (cpy.caboodleBits[type] == null)
        (0, exports.createCollect)(cpy, { idx: type }, ste);
    if ((bal.bit == null))
        bal.slv({ rskBit: { idx: "write-collect-err", src: 'no-bit' } });
    var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
    bal.idx;
    if (cabBit.bits[bal.idx] == null) {
        bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat });
        var objDat = bit[Object.keys(bit)[0]];
        dat = objDat.dat;
        if (dat == null)
            dat = {};
        dat.dex = cabBit.bitList.length;
        cabBit.bitList.push(dat);
        var idx = bal.idx;
        if (idx == null)
            idx = dat.idx;
        if (idx == null)
            throw new Error("write collect has no idx");
        cabBit.bits[idx] = dat.dex;
    }
    else {
        var cabDat = cabBit.bitList[cabBit.bits[bal.idx]];
        bal.dat;
        for (var key in bal.dat) {
            if (cabDat == null)
                cabDat = {};
            cabDat[key] = bal.dat[key];
        }
        cabBit.bitList[cabBit.bits[bal.idx]] = cabDat;
        dat = cabBit;
        //!!! SUPER IMPORTANT
    }
    if ((dat == null) && (bal.slv != null))
        bal.slv({ rskBit: { idx: "write-collect-err", src: 'no-dat' } });
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "write-collect", dat } });
    return cpy;
};
exports.writeCollect = writeCollect;
const createCollect = (cpy, bal, ste) => {
    var cabBit = { idx: bal.idx, dex: 0, bits: {}, bitList: [] };
    cabBit.dex = cpy.caboodleBitList.length;
    cpy.caboodleBitList.push(cabBit);
    cpy.caboodleBits[cabBit.idx] = cabBit.dex;
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "create-collect", dat: cabBit } });
    return cpy;
};
exports.createCollect = createCollect;
const removeCollect = async (cpy, bal, ste) => {
    var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
    if (cpy.caboodleBits[type] == null)
        return bal.slv({ rskBit: { idx: "remove-collect-not-present" } });
    var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
    if (cabBit.bits[bal.idx] == null)
        return bal.slv({ rskBit: { idx: "remove-collect-idx-not-present" } });
    bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat });
    var objDat = bit[Object.keys(bit)[0]];
    dat = objDat.dat;
    dex = dat.dex;
    for (var i = dex; i < cabBit.bitList.length - 1; i++) {
        var update = cabBit.bitList[i];
        update.dex -= 1;
    }
    for (var key in dat) {
        dat[key] = null;
    }
    delete cabBit.bits[bal.idx];
    var itm = cabBit.bitList.splice(dex, 1);
    cabBit.dex -= 1;
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "remove-collect", dat: itm[0] } });
    return cpy;
};
exports.removeCollect = removeCollect;
const putCollect = (cpy, bal, ste) => {
    cpy.caboodleBits[bal.idx] = bal.val;
    cpy.caboodleBitList[bal.val] = bal.dat;
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "put-collect", dat: bal.dat } });
    return cpy;
};
exports.putCollect = putCollect;
const getCollect = (cpy, bal, ste) => {
    val = cpy.caboodleBits[bal.idx];
    dat = cpy.caboodleBitList[val];
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "get-collect", val, dat } });
    return cpy;
};
exports.getCollect = getCollect;
const modelCollect = (cpy, bal, ste) => {
    //debugger
    if (bal.slv != null)
        bal.slv({ clcBit: { idx: "model-collect", dat: cpy } });
    return cpy;
};
exports.modelCollect = modelCollect;
const deleteCollect = (cpy, bal, ste) => {
    //debugger
    return cpy;
};
exports.deleteCollect = deleteCollect;
const emptyCollect = (cpy, bal, ste) => {
    //debugger
    return cpy;
};
exports.emptyCollect = emptyCollect;
const dotCollect = (cpy, bal, ste) => {
    var gel = bal.dat;
    var out = [];
    bal.src.split("\n").forEach((a, b) => {
        if (a.includes('//') == true)
            return;
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        out.push(outLine);
    });
    if (bal.slv != null)
        bal.slv({ colBit: { idx: "dot-vurt", lst: out, src: out.join('\n') } });
    return cpy;
};
exports.dotCollect = dotCollect;
const formatCollect = (cpy, bal, ste) => {
    lst = bal.src.split(':');
    var idx = lst[0];
    var out = [];
    idx = S(idx).collapseWhitespace().s;
    var opt = lst[1].split(',');
    opt.forEach((a, b) => {
        var now = S(a).collapseWhitespace().s;
        if (a.length < 1)
            return;
        out.push(now);
    });
    dat = [idx, out];
    bal.slv({ colBit: { idx: "format-collect", dat } });
    return cpy;
};
exports.formatCollect = formatCollect;
const S = require("string");
const doT = require("dot");
//# sourceMappingURL=collect.buzz.js.map