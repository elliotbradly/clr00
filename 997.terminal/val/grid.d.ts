export declare const RIGHT_TITLE_IDX = "right-title";
export declare const TOP_FULL_IDX = "top-fill";
export declare const MID_FULL_IDX = "mid-fill";
export declare const BOT_FULL_IDX = "bot-fill";
export declare const RIGHT_TITLE_BIT: GridFill;
export declare const TOP_FULL_BIT: GridFill;
export declare const MID_FULL_BIT: GridFill;
export declare const BOT_FULL_BIT: GridFill;
export type Position<Type> = {
    x: number;
    y: number;
} & Type;
export type GridFill = Position<{
    xSpan: number;
    ySpan: number;
}>;
