import {ThemeVariants} from "../style/theme";
import {NetworkName} from "./network";

export interface Settings {
    autoconnect:boolean;
    slippage:number;
    theme:ThemeVariants;
    network:NetworkName
}