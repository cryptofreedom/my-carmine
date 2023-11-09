import BN from "bn.js";
import {Decimal, Math64x61} from "../types/units";
import {BASE_MATH_64_61} from "../constants/amm";
import {shortInteger} from "./computations";
const PERCISSION_DIGITS=20;
const PERCISSION_BASE_VALUE=new BN(10).pow(new BN(PERCISSION_DIGITS));
export const math64x61toDecimal=(n:Math64x61):Decimal=>{
    const long = new BN(n).mul(PERCISSION_BASE_VALUE).div(BASE_MATH_64_61).toString(10);
    return shortInteger(long,PERCISSION_DIGITS);
}
export const decimalToInt = (n:Decimal,digits:number):Int=>longI