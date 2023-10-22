import {ParsedPool, RawPool} from "../types/pool";
import {TokenPair} from "../tokens/token";
import {bnToOptionType} from "../utils/conversions";
import {toHex} from "../utils/utils";

type Props = |{raw:RawPool}|{parsed:ParsedPool}

export class Pool{
    public raw:RawPool;
    public parsed:ParsedPool;
    public tokenPair:TokenPair;
    public id:string
    constructor(props:Props) {
        if("raw" in props){
            this.raw = this.props.raw;
            this.parsed = this.parseFromRow(props.raw);
            this.id=this.generateId();
        }
    }

    parseFromRow(raw:RawPool):ParsedPool{
        return {
            optionType:bnToOptionType(raw.option_type),
            quoteToken:toHex(raw.quote_token_address),
            baseToken:toHex(raw.base_token_address)
        }
    }
    generatedId():string{
        return JSON.stringify(this.parsed,Object.keys(this.parsed).sort());
    }
}