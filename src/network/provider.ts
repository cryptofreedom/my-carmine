import {constants, Provider, ProviderOptions} from "starknet";
import {Network, NetworkName} from "../types/network";

const devnetOptions:ProviderOptions = {
    sequencer:{
        baseUrl:"http://localhost:5050/",
        feederGatewayUrl:"feeder_gateway",
        gatewayUrl:"http://localhost:5050/",
        chainId:constants.StarknetChainId.SN_MAIN,
    }
}
const testnetOptions:ProviderOptions={
    sequencer:{
        network:constants.NetworkName.SN_GOERLI
    }
};
export const networkProviderOptionsMap=new Map<NetworkName,ProviderOptions>([
    [NetworkName.Devnet,devnetOptions],
    [NetworkName.Testnet,testnetOptions],
    [NetworkName.Testdev,testnetOptions],
    [
        NetworkName.Mainnet,
        {
            sequencer:{
                network:constants.NetworkName.SN_MAIN
            }
        }
    ]
]);

export const getProviderByNetwork=(network:NetworkName):Provider=>new Provider(networkProviderOptionsMap.get(network) as ProviderOptions);

export const getNetworkObjectByNetworkName=(name:NetworkName):Network=>{
    const chainId=name === NetworkName.Mainnet?constants.StarknetChainId.SN_MAIN:constants.StarknetChainId.SN_GOERLI
    return {
        name,chainId
    }
}



