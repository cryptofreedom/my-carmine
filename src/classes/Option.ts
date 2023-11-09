import {ParsedOptionBase, RawOptionBase} from "../types/options";
import {Pool} from "./Pool";
import {getTokenPairByAddresses, TokenPair} from "../tokens/token";
import {bnToOptionSide} from "../utils/conversions";
import BN from "bn.js";


type Props =
    | {
    raw: RawOptionBase;
}
    | {
    parsed: ParsedOptionBase;
};

export class Option extends Pool{
    raw:RawOptionBase;
    parsed:ParsedOptionBase;
    id:string;
    tokenPair:TokenPair;
    constructor(props:Props) {
        super(props);
        if("raw" in props){
            this.raw= props.raw;
            this.parsed=this.parseFromRow(props.raw);
            this.id=this.generatedId();;
            this.tokenPair=getTokenPairByAddresses(
                this.parsed.baseToken,
                this.parsed.quoteToken
            )
        }
    }

    parsedFromRaw(raw:RawOptionBase):ParsedOptionBase{
        return {
            optionSide:bnToOptionSide(raw.option_side),
            optionType:bnToOptionSide(raw.option_type),
            maturity:new BN(raw.maturity).toNumber(),
            strikePrice:ma
        }
    }
}