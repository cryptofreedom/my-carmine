import {SupportedWalletIds} from "./wallet";
import {constants, Provider} from "starknet";

export enum NetworkName {
    Testnet="Testnet",
    Devnet="Devnet",
    Mainnet="Mainnet",
    Testdev="Testdev",
}

export interface Network{
    name:NetworkName;
    chainId:constants.StarknetChainId;
}

export interface NetworkState{
    walletId?:SupportedWalletIds;
    provider:Provider;
    network:Network
}