import BN from "bn.js";
import {OptionSide, OptionType} from "../types/options";

export const bnToOptionType=(n:BN):OptionType=>{
    return new BN(n).toNumber()===1?OptionType.Put:OptionType.Call;
}
export const bnToOptionSide=(n:BN):OptionSide=>{
    return new BN(n).toNumber()===1?OptionSide.Short:OptionSide.Long;
}