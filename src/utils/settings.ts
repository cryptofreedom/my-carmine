import {Settings} from "../types/settings";
import {ThemeVariants} from "../style/theme";
import {NetworkName} from "../types/network";
const SETTINGS_KEY = "app-settings";
const DEFAULT_SETTINGS:Settings={
    autoconnect:true,
    theme:ThemeVariants.dark,
    slippage:5,
    network:NetworkName.Mainnet
}
export const validateSettings=(v:unknown):v is Settings=>{
    return true;
}
export const retriveSettings = ():Settings=>{
    const s = window.localStorage.getItem(SETTINGS_KEY);
    if(!s){
        return DEFAULT_SETTINGS;
    }
    try{
        const v:unknown=JSON.parse(s);
        if(validateSettings(v)){
            return v;
        }
        return DEFAULT_SETTINGS;
    }catch (e:any){
        console.log("Failed to retrieve settings", e?.message);
        return DEFAULT_SETTINGS;
    }
}
export const storeSettings=(s:Settings)=>{
    try{
        window.localStorage.setItem(SETTINGS_KEY,JSON.stringify(s));
    }catch (error){
        console.error(error);
    }
}