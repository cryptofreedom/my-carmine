import {notInitialized} from "react-redux/es/utils/useSyncExternalStore";
import {standardiseAddress} from "../utils/utils";
import {getTokenAddresses} from "../constants/amm";

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