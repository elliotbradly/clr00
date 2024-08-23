"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotCollect = exports.DOT_COLLECT = exports.FormatCollect = exports.FORMAT_COLLECT = exports.GetCollect = exports.GET_COLLECT = exports.PutCollect = exports.PUT_COLLECT = exports.ModelCollect = exports.MODEL_COLLECT = exports.EmptyCollect = exports.EMPTY_COLLECT = exports.DeleteCollect = exports.DELETE_COLLECT = exports.RemoveCollect = exports.REMOVE_COLLECT = exports.CreateCollect = exports.CREATE_COLLECT = exports.WriteCollect = exports.WRITE_COLLECT = exports.ReadCollect = exports.READ_COLLECT = exports.FetchCollect = exports.FETCH_COLLECT = exports.UpdateCollect = exports.UPDATE_COLLECT = exports.InitCollect = exports.INIT_COLLECT = void 0;
// Collect actions
exports.INIT_COLLECT = "[Collect action] Init Collect";
class InitCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_COLLECT;
    }
}
exports.InitCollect = InitCollect;
exports.UPDATE_COLLECT = "[Collect action] Update Collect";
class UpdateCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_COLLECT;
    }
}
exports.UpdateCollect = UpdateCollect;
exports.FETCH_COLLECT = "[Collect action] Fetch Collect";
class FetchCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FETCH_COLLECT;
    }
}
exports.FetchCollect = FetchCollect;
exports.READ_COLLECT = "[Read action] Read Collect";
class ReadCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_COLLECT;
    }
}
exports.ReadCollect = ReadCollect;
exports.WRITE_COLLECT = "[Write action] Write Collect";
class WriteCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_COLLECT;
    }
}
exports.WriteCollect = WriteCollect;
exports.CREATE_COLLECT = "[Create action] Create Collect";
class CreateCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_COLLECT;
    }
}
exports.CreateCollect = CreateCollect;
exports.REMOVE_COLLECT = "[Create action] Remove Collect";
class RemoveCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_COLLECT;
    }
}
exports.RemoveCollect = RemoveCollect;
exports.DELETE_COLLECT = "[Create action] Delete Collect";
class DeleteCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_COLLECT;
    }
}
exports.DeleteCollect = DeleteCollect;
exports.EMPTY_COLLECT = "[Empty action] Empty Collect";
class EmptyCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EMPTY_COLLECT;
    }
}
exports.EmptyCollect = EmptyCollect;
exports.MODEL_COLLECT = "[Empty action] Model Collect";
class ModelCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MODEL_COLLECT;
    }
}
exports.ModelCollect = ModelCollect;
exports.PUT_COLLECT = "[Empty action] Put Collect";
class PutCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PUT_COLLECT;
    }
}
exports.PutCollect = PutCollect;
exports.GET_COLLECT = "[Empty action] Get Collect";
class GetCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.GET_COLLECT;
    }
}
exports.GetCollect = GetCollect;
exports.FORMAT_COLLECT = "[Format action] Format Collect";
class FormatCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FORMAT_COLLECT;
    }
}
exports.FormatCollect = FormatCollect;
exports.DOT_COLLECT = "[Format action] Dot Collect";
class DotCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DOT_COLLECT;
    }
}
exports.DotCollect = DotCollect;
//# sourceMappingURL=collect.action.js.map