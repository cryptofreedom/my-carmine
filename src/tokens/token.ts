import {notInitialized} from "react-redux/es/utils/useSyncExternalStore";
import {standardiseAddress} from "../utils/utils";
import {getTokenAddresses} from "../constants/amm";
import {OptionType} from "../types/options";
import {Pool} from "../classes/Pool";

export interface Token{
    id:TokenKey;
    symbol:string;
    decimals:number;
    tokenAddress:string;
}

export interface TokenPair{
    base:Token;
    quote:Token;
}

export enum TokenKey{
    ETH="ethereum",
    USDC="usd-coin"
}

export enum TokenPairKey{
    EthUsdc="EthUsdc"
}
export type TokenList={
    [key in TokenKey]:Token;
};

export type TokenPairList={
    [key in TokenPairKey]:TokenPair;
}
export type TokensList={
    [key in TokenKey]:Token;
}
export const tokensList:TokensList={
    [TokenKey.ETH]:{
        id:TokenKey.ETH,
        symbol:"ETH",
        decimals:18,
        tokenAddress:standardiseAddress(getTokenAddresses().ETH_ADDRESS)
    },
    [TokenKey.USDC]:{
        id:TokenKey.USDC,
        symbol:"USDC",
        decimals:6,
        tokenAddress:standardiseAddress(getTokenAddresses().USD_ADDRESS)
    }
}
export const tokenPairList:TokenPairList = {
    EthUsdc:{
        base:tokensList[TokenKey.ETH],
        quote:tokensList[TokenKey.USDC]
    }
}

export const tokenList:TokenList={
    [TokenKey.ETH]:{
        id:TokenKey.ETH,
        symbol:"ETH",
        decimals:18,
        tokenAddress:standardiseAddress(getTokenAddresses().ETH_ADDRESS)
    },
    [TokenKey.USDC]:{
        id:TokenKey.USDC,
        symbol:"USDC",
        decimals:6,
        tokenAddress:standardiseAddress(getTokenAddresses().USD_ADDRESS)
    }
};

export const getTokenPairByAddresses = (base:string,quote:string):TokenPair=>{
    const found = Object.values(tokenPairList).find((pair)=>{
        return pair.base.tokenAddress === standardiseAddress(base) && pair.quote.tokenAddress === standardiseAddress(quote)
    });
    if(found){
        return found;
    }
    throw Error(`Could nott find pair:base:${base},quote:${quote}`)
}
export const getPoolByPairType = (pairKey:TokenPairKey,type:OptionType):Pool{
    const pair = tokenPairList[pairKey];
    return new Pool({
        parsed:{
            optionType:type,
            baseToken:pair.base.tokenAddress,
            quoteToken:pair.quote.tokenAddress
        }
    })
}