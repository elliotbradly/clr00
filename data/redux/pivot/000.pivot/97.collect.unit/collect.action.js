"use strict";
exports.__esModule = true;
exports.EmptyCollect = exports.EMPTY_COLLECT = exports.DeleteCollect = exports.DELETE_COLLECT = exports.RemoveCollect = exports.REMOVE_COLLECT = exports.CreateCollect = exports.CREATE_COLLECT = exports.WriteCollect = exports.WRITE_COLLECT = exports.ReadCollect = exports.READ_COLLECT = exports.FetchCollect = exports.FETCH_COLLECT = exports.UpdateCollect = exports.UPDATE_COLLECT = exports.InitCollect = exports.INIT_COLLECT = void 0;
// Collect actions
exports.INIT_COLLECT = "[Collect action] Init Collect";
var InitCollect = /** @class */ (function () {
    function InitCollect(bale) {
        this.bale = bale;
        this.type = exports.INIT_COLLECT;
    }
    return InitCollect;
}());
exports.InitCollect = InitCollect;
exports.UPDATE_COLLECT = "[Collect action] Update Collect";
var UpdateCollect = /** @class */ (function () {
    function UpdateCollect(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_COLLECT;
    }
    return UpdateCollect;
}());
exports.UpdateCollect = UpdateCollect;
exports.FETCH_COLLECT = "[Collect action] Fetch Collect";
var FetchCollect = /** @class */ (function () {
    function FetchCollect(bale) {
        this.bale = bale;
        this.type = exports.FETCH_COLLECT;
    }
    return FetchCollect;
}());
exports.FetchCollect = FetchCollect;
exports.READ_COLLECT = "[Read action] Read Collect";
var ReadCollect = /** @class */ (function () {
    function ReadCollect(bale) {
        this.bale = bale;
        this.type = exports.READ_COLLECT;
    }
    return ReadCollect;
}());
exports.ReadCollect = ReadCollect;
exports.WRITE_COLLECT = "[Write action] Write Collect";
var WriteCollect = /** @class */ (function () {
    function WriteCollect(bale) {
        this.bale = bale;
        this.type = exports.WRITE_COLLECT;
    }
    return WriteCollect;
}());
exports.WriteCollect = WriteCollect;
exports.CREATE_COLLECT = "[Create action] Create Collect";
var CreateCollect = /** @class */ (function () {
    function CreateCollect(bale) {
        this.bale = bale;
        this.type = exports.CREATE_COLLECT;
    }
    return CreateCollect;
}());
exports.CreateCollect = CreateCollect;
exports.REMOVE_COLLECT = "[Create action] Remove Collect";
var RemoveCollect = /** @class */ (function () {
    function RemoveCollect(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_COLLECT;
    }
    return RemoveCollect;
}());
exports.RemoveCollect = RemoveCollect;
exports.DELETE_COLLECT = "[Create action] Delete Collect";
var DeleteCollect = /** @class */ (function () {
    function DeleteCollect(bale) {
        this.bale = bale;
        this.type = exports.DELETE_COLLECT;
    }
    return DeleteCollect;
}());
exports.DeleteCollect = DeleteCollect;
exports.EMPTY_COLLECT = "[Empty action] Empty Collect";
var EmptyCollect = /** @class */ (function () {
    function EmptyCollect(bale) {
        this.bale = bale;
        this.type = exports.EMPTY_COLLECT;
    }
    return EmptyCollect;
}());
exports.EmptyCollect = EmptyCollect;
//# sourceMappingURL=collect.action.js.map