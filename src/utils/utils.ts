import {Theme} from "@mui/material";
import {ThemeVariants} from "../style/theme";

export const isDarkTheme=(theme:Theme)=>{
    theme.palette.mode===ThemeVariants.dark;
}