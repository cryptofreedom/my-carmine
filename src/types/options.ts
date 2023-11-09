import {AddressBN, Decimal, Hex, Int, IntBN, Math64x61, OptionSideBN} from "../utils/units";
import BN from "bn.js";
import {uint256} from "starknet";
import {ParsedPool} from "./pool";

export enum OptionType {
    Call = "0",
    Put = "1"
}

export enum OptionSide {
    Long = "0",
    Short = "1"
}

export interface OptionStruct {
    option_type:Hex;
    strike_price:Math64x61;
    maturity:Int;
    option_side:Hex;
    quote_token_address:AddressBN;
    base_token_address:AddressBN;
}

export interface RawOption extends RawOptionBase {
    token_address?:BN;
    balance?:BN;
    premia?:BN;
    position_size?:BN;
    value_of_position?:BN;
}

export interface RawOptionBase extends RawPool{
    option_side:OptionSideBN;
    maturity:IntBN;
    strike_price:Math64x61;
}
export interface ParsedOptionBase extends ParsedPool{
    optionSide:OptionSide;
    maturity:Decimal;
    strikePrice:number;
}
export interface RawPool {
    quote_token_address:AddressBN;
    base_token_address:AddressBN;
    option_type:BN;
}

export interface RawPoolInfo extends RawPool{
    lptoken_address:AddressBN;
    staked_capital: uint256.Uint256;
    unlocked_capital:uint256.Uint256;
    value_of_pool_position:Math64x61;
}

