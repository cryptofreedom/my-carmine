import {Decimal} from "../types/units";

export const shortInteger = (str:string,digits:number):Decimal=>{
    if(!str){
        return 0;
    }
    const padded = str.padStart(digits,"0")
}