"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDisk = exports.TYPE_DISK = exports.ColorDisk = exports.COLOR_DISK = exports.SwatchDisk = exports.SWATCH_DISK = exports.ExistDisk = exports.EXIST_DISK = exports.DeleteDisk = exports.DELETE_DISK = exports.EnsureDisk = exports.ENSURE_DISK = exports.TrashDisk = exports.TRASH_DISK = exports.BatchDisk = exports.BATCH_DISK = exports.FrameDisk = exports.FRAME_DISK = exports.CopyDisk = exports.COPY_DISK = exports.Load_listDisk = exports.LOAD_LIST_DISK = exports.IndexDisk = exports.INDEX_DISK = exports.WriteDisk = exports.WRITE_DISK = exports.ReadDisk = exports.READ_DISK = exports.UpdateDisk = exports.UPDATE_DISK = exports.InitDisk = exports.INIT_DISK = void 0;
exports.INIT_DISK = '[Disk action] Init Disk';
class InitDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_DISK;
    }
}
exports.InitDisk = InitDisk;
exports.UPDATE_DISK = '[Disk action] Update Disk';
class UpdateDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_DISK;
    }
}
exports.UpdateDisk = UpdateDisk;
exports.READ_DISK = '[Disk action] Read Disk';
class ReadDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_DISK;
    }
}
exports.ReadDisk = ReadDisk;
exports.WRITE_DISK = '[Disk action] Write Disk';
class WriteDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_DISK;
    }
}
exports.WriteDisk = WriteDisk;
exports.INDEX_DISK = '[Index action] Index Disk';
class IndexDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INDEX_DISK;
    }
}
exports.IndexDisk = IndexDisk;
exports.LOAD_LIST_DISK = '[Load_list action] Load_list Disk';
class Load_listDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOAD_LIST_DISK;
    }
}
exports.Load_listDisk = Load_listDisk;
exports.COPY_DISK = '[Copy action] Copy Disk';
class CopyDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.COPY_DISK;
    }
}
exports.CopyDisk = CopyDisk;
exports.FRAME_DISK = '[Frame action] Frame Disk';
class FrameDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FRAME_DISK;
    }
}
exports.FrameDisk = FrameDisk;
exports.BATCH_DISK = '[Batch action] Batch Disk';
class BatchDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BATCH_DISK;
    }
}
exports.BatchDisk = BatchDisk;
exports.TRASH_DISK = '[Trash action] Trash Disk';
class TrashDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TRASH_DISK;
    }
}
exports.TrashDisk = TrashDisk;
exports.ENSURE_DISK = '[Ensure action] Ensure Disk';
class EnsureDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ENSURE_DISK;
    }
}
exports.EnsureDisk = EnsureDisk;
exports.DELETE_DISK = '[Delete action] Delete Disk';
class DeleteDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_DISK;
    }
}
exports.DeleteDisk = DeleteDisk;
exports.EXIST_DISK = "[Exist action] Exist Disk";
class ExistDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EXIST_DISK;
    }
}
exports.ExistDisk = ExistDisk;
exports.SWATCH_DISK = "[Swatch action] Swatch Disk";
class SwatchDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SWATCH_DISK;
    }
}
exports.SwatchDisk = SwatchDisk;
exports.COLOR_DISK = "[Color action] Color Disk";
class ColorDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.COLOR_DISK;
    }
}
exports.ColorDisk = ColorDisk;
exports.TYPE_DISK = "[Type action] Type Disk";
class TypeDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TYPE_DISK;
    }
}
exports.TypeDisk = TypeDisk;
//# sourceMappingURL=disk.action.js.map