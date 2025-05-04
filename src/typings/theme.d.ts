import type { Color, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {

    interface PaletteOptions {
        primaryColor: PaletteColorOptions;
    }

    interface Palette {
        primaryColor: Color;
    }
}