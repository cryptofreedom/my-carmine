import {Theme} from "@mui/material";
import {ThemeVariants} from "../style/theme";
import {OptionSide, OptionType} from "../types/options";
import BN from "bn.js";

export const isDarkTheme=(theme:Theme)=>{
    theme.palette.mode===ThemeVariants.dark;
}

export const isCall=(type:OptionType):boolean=>type===OptionType.Call;

export const isLong=(side:OptionSide):boolean=>side===OptionSide.Long;

export const toHex = (v:BN)=>"0x"+v.toString(16);

export const hexToBN = (v:string):BN =>new BN(v.substring(2),"hex");
export const standardiseAddress = (address:string):string=>{
    const withoutPrefix = address.replace(/^0x0*/g,"").toLowerCase();
    return "0x"+withoutPrefix;
}