import {ParsedPool, RawPool} from "../types/pool";
import {Token, TokenPair} from "../tokens/token";
import {bnToOptionType} from "../utils/conversions";
import {toHex} from "../utils/utils";
import {OptionType} from "../types/options";
import {getMultipleTokensValueInUsd} from "../tokens/tokenPrices";

type Props = |{raw:RawPool}|{parsed:ParsedPool}

export class Pool{
    public raw:RawPool;
    public parsed:ParsedPool;
    public tokenPair:TokenPair;
    public id:string
    constructor(props:Props) {
        if("raw" in props){
            this.raw = props.raw;
            this.parsed = this.parseFromRow(props.raw);
            this.id=this.generatedId();
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
    eq(other:Pool):boolean{
        return this.id === other.id;
    }
    isType(type:OptionType):boolean{
        return this.parsed.optionType === type;
    }
    async tokenPricesInUsd(){
        const [base,quote]=await getMultipleTokensValueInUsd([
            this.tokenPair.base.id,
            this.tokenPair.quote.id
        ]);
        return {base,quote};
    }

    //Getters
    get typeAsText():string{
        return this.parsed.optionType === OptionType.Call ? "Call":"Put";
    }
    get isCall():boolean{
        return this.parsed.optionType === OptionType.Call;
    }
    get isPut():boolean{
        return this.parsed.optionType === OptionType.Put;
    }
    get underlying():Token{
        return this.isCall? this.tokenPair.base : this.tokenPair.quote;
    }
    get digits():number{
        return this.underlying.decimals;
    }
    get tokenAddress(): string {
        return this.underlying.tokenAddress;
    }

    get symbol(): string {
        return this.underlying.symbol;
    }
    get name():string{
        return `${this.tokenPair.base.symbol}/${this.tokenPair.quote.symbol} ${this.typeAsText} Pool (${this.symbol})`
    }
}