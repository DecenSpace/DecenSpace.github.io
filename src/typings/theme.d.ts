import "@mui/material/styles";

declare module "@mui/material/styles" {

    interface IFont {
        fontFamily?: string;
        fontSize?: number | string;
        fontWeight?: number | string;
        lineHeight?: number | string;
        letterSpacing?: number | string;
        color?: string;
    }

    export interface Typography {
        fontFamily: string;
        fontSize: number;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightBold: number;
        h1: IFont;
        h2: IFont;
        h3: IFont;
        h4: IFont;
        body1: IFont;
        subtitle1: IFont;
    }
}