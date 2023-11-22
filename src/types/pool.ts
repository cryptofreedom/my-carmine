import BN from "bn.js";
import { OptionType } from "./options";
import {
  Address,
  AddressBN,
  Decimal,
  Int,
  Math64x61,
  Math64x61BN,
} from "./units";
import { uint256 } from "starknet";

export type ParsedPool = {
  quoteToken: string;
  baseToken: string;
  optionType: OptionType;
};

export interface RawPool {
  quote_token_address: AddressBN;
  base_token_address: AddressBN;
  option_type: BN;
}

export interface RawPoolInfo extends RawPool {
  lptoken_address: AddressBN;
  staked_capital: uint256.Uint256; // lpool_balance
  unlocked_capital: uint256.Uint256;
  value_of_pool_position: Math64x61BN;
}

export interface ParsedPoolInfo extends ParsedPool {
  lptokenAddress: Address;
  stakedCapital: Int; // lpool_balance
  unlockedCapital: Int;
  valueOfPoolPosition: Math64x61;
}

export interface PoolInfo {
  raw: RawPoolInfo;
  parsed: ParsedPoolInfo;
}

export interface RawUserPoolInfo extends RawPoolInfo {
  value_of_user_stake: uint256.Uint256;
  size_of_users_tokens: uint256.Uint256;
}

export interface ParsedUserPoolInfo extends ParsedPoolInfo {
  valueOfUserStakeBase: Int;
  valueOfUserStakeDecimal: Decimal;
  sizeOfUsersTokensBase: Int;
  sizeOfUsersTokensDecimal: Decimal;
}

export interface UserPoolInfo {
  raw: RawUserPoolInfo;
  parsed: ParsedUserPoolInfo;
}

export interface ResponsePoolInfo {
  pool: RawPool;
  lptoken_address: AddressBN;
  staked_capital: uint256.Uint256; // lpool_balance
  unlocked_capital: uint256.Uint256;
  value_of_pool_position: Math64x61BN;
}

export interface ResponseUserPoolInfo {
  pool_info: ResponsePoolInfo;
  value_of_user_stake: uint256.Uint256;
  size_of_users_tokens: uint256.Uint256;
}

export interface UserPoolDisplayData {
  size: Decimal;
  fullSize: Int;
  value: Decimal;
  fullValue: Int;
  type: OptionType;
}
