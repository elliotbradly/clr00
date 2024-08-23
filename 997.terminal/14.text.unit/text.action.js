"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateText = exports.CREATE_TEXT = exports.DeleteText = exports.DELETE_TEXT = exports.RemoveText = exports.REMOVE_TEXT = exports.ReadText = exports.READ_TEXT = exports.WriteText = exports.WRITE_TEXT = exports.UpdateText = exports.UPDATE_TEXT = exports.InitText = exports.INIT_TEXT = void 0;
// Text actions
exports.INIT_TEXT = "[Text action] Init Text";
class InitText {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_TEXT;
    }
}
exports.InitText = InitText;
exports.UPDATE_TEXT = "[Text action] Update Text";
class UpdateText {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_TEXT;
    }
}
exports.UpdateText = UpdateText;
exports.WRITE_TEXT = "[Write action] Write Text";
class WriteText {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_TEXT;
    }
}
exports.WriteText = WriteText;
exports.READ_TEXT = "[Read action] Read Text";
class ReadText {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_TEXT;
    }
}
exports.ReadText = ReadText;
exports.REMOVE_TEXT = "[Remove action] Remove Text";
class RemoveText {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_TEXT;
    }
}
exports.RemoveText = RemoveText;
exports.DELETE_TEXT = "[Delete action] Delete Text";
class DeleteText {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_TEXT;
    }
}
exports.DeleteText = DeleteText;
exports.CREATE_TEXT = "[Create action] Create Text";
class CreateText {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_TEXT;
    }
}
exports.CreateText = CreateText;
//# sourceMappingURL=text.action.js.map