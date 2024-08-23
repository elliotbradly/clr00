"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipPivot = exports.SHIP_PIVOT = exports.ReplacePivot = exports.REPLACE_PIVOT = exports.BundlePivot = exports.BUNDLE_PIVOT = exports.ContainsPivot = exports.CONTAINS_PIVOT = exports.CreatePivot = exports.CREATE_PIVOT = exports.ListPivot = exports.LIST_PIVOT = exports.CountPivot = exports.COUNT_PIVOT = exports.PatchPivot = exports.PATCH_PIVOT = exports.EditPivot = exports.EDIT_PIVOT = exports.RunPivot = exports.RUN_PIVOT = exports.OpenPivot = exports.OPEN_PIVOT = exports.UpdatePivot = exports.UPDATE_PIVOT = exports.InitPivot = exports.INIT_PIVOT = void 0;
exports.INIT_PIVOT = "[Pivot action] Init Pivot";
class InitPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PIVOT;
    }
}
exports.InitPivot = InitPivot;
exports.UPDATE_PIVOT = "[Pivot action] Update Pivot";
class UpdatePivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PIVOT;
    }
}
exports.UpdatePivot = UpdatePivot;
exports.OPEN_PIVOT = "[Open action] Open Pivot";
class OpenPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_PIVOT;
    }
}
exports.OpenPivot = OpenPivot;
exports.RUN_PIVOT = "[Run action] Run Pivot";
class RunPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_PIVOT;
    }
}
exports.RunPivot = RunPivot;
exports.EDIT_PIVOT = "[Edit action] Edit Pivot";
class EditPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_PIVOT;
    }
}
exports.EditPivot = EditPivot;
exports.PATCH_PIVOT = "[Patch action] Patch Pivot";
class PatchPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_PIVOT;
    }
}
exports.PatchPivot = PatchPivot;
exports.COUNT_PIVOT = "[Patch action] Count Pivot";
class CountPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.COUNT_PIVOT;
    }
}
exports.CountPivot = CountPivot;
exports.LIST_PIVOT = "[Patch action] List Pivot";
class ListPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_PIVOT;
    }
}
exports.ListPivot = ListPivot;
exports.CREATE_PIVOT = "[Patch action] Create Pivot";
class CreatePivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_PIVOT;
    }
}
exports.CreatePivot = CreatePivot;
exports.CONTAINS_PIVOT = "[Patch action] Contains Pivot";
class ContainsPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CONTAINS_PIVOT;
    }
}
exports.ContainsPivot = ContainsPivot;
exports.BUNDLE_PIVOT = "[Patch action] Bundle Pivot";
class BundlePivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BUNDLE_PIVOT;
    }
}
exports.BundlePivot = BundlePivot;
exports.REPLACE_PIVOT = "[Patch action] Replace Pivot";
class ReplacePivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REPLACE_PIVOT;
    }
}
exports.ReplacePivot = ReplacePivot;
exports.SHIP_PIVOT = "[Patch action] Ship Pivot";
class ShipPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SHIP_PIVOT;
    }
}
exports.ShipPivot = ShipPivot;
//# sourceMappingURL=pivot.action.js.map