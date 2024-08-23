var modClr: LightModel = ste.value.light

if (bal.val == null) bal.val = 0;

let src;
let r, g, b, hex;
let flv;

if (bal == null) {
    console.log("pow!!!")
    bal.slv({ clrBit: { idx: "read-color-error" } });
    return;
}

switch (bal.val) {
    // we give the read spectrum a hex and it returns a name

    case 2:

        break

    case 1:

        let itm = near(bal.idx);

        var flavor = cpy.boundaryList(bal.idx)

        var flavorName = flavor.name;

        flv = modClr.boundaryTitle[flavorName]

        if (flv == null) {
            bal.slv({ clrBit: { idx: "read-color-error" } });
            return
        }

        flv = flv.idx

        if (flv == null) {
            bal.slv({ clrBit: { idx: "read-color-error" } });
            return
        }

        r = itm.rgb.r;
        g = itm.rgb.g;
        b = itm.rgb.b
        hex = S(itm.value).slugify().s

        src = itm.name;
        src = S(src).slugify().s;
        src += '.' + S(itm.value).slugify().s;

        src += '.' + String(itm.rgb.r).padStart(3, '0');
        src += '.' + String(itm.rgb.g).padStart(3, '0');
        src += '.' + String(itm.rgb.b).padStart(3, '0');

        src

        break;

    case 0:
        src = cpy.colorData[bal.idx];
        if (src == null) console.log("can not read spectrum for " + bal.idx);
        break;
}

src

if (bal.slv != null) bal.slv({ clrBit: { idx: "read-color", src, dat: { r, g, b, hex, src, flv } } });
