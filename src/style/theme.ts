import {createTheme, ThemeOptions} from "@mui/material";

export enum ThemeVariants{
    dark="dark",
    light="light"
}
const darkTheme:ThemeOptions={
    palette:{
        mode:ThemeVariants.dark,
        primary:{
            main:"#ffb000"
        },
        background:{
            default:"#070718",
            paper:"#020210"
        }
    }
}

const lightTheme:ThemeOptions={
    palette:{
        mode:ThemeVariants.light
    }
}
export const getTheme=(c:ThemeVariants)=>
    c===ThemeVariants.dark?createTheme(darkTheme):createTheme(lightTheme);
const THEME_KEY="theme-variant";
