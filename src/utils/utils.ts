import {Theme} from "@mui/material";
import {ThemeVariants} from "../style/theme";
import {OptionSide, OptionType} from "../types/options";

export const isDarkTheme=(theme:Theme)=>{
    theme.palette.mode===ThemeVariants.dark;
}

export const isCall=(type:OptionType):boolean=>type===OptionType.Call;

export const isLong=(side:OptionSide):boolean=>side===OptionSide.Long;