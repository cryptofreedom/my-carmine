import {store} from "../redux/store";
import {NetworkName} from "../types/network";

type TokenAddresses={
    ETH_ADDRESS:string;
    USD_ADDRESS:string;
    MAIN_CONTRACT_ADDRESS:string;
    LPTOKEN_CONTRACT_ADDRESS:string;
    LPTOKEN_CONTRACT_ADDRESS_PUT:string;
    GOVERNANCE_CONTRACT_ADDRESS:string;
}
const testnetTokens:TokenAddresses={
    ETH_ADDRESS:"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    USD_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    MAIN_CONTRACT_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    LPTOKEN_CONTRACT_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    LPTOKEN_CONTRACT_ADDRESS_PUT:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    GOVERNANCE_CONTRACT_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426"
}

const devnetTokens:TokenAddresses={
    ETH_ADDRESS:"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    USD_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    MAIN_CONTRACT_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    LPTOKEN_CONTRACT_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    LPTOKEN_CONTRACT_ADDRESS_PUT:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426",
    GOVERNANCE_CONTRACT_ADDRESS:"0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426"
}


const networkToTokenMap = new Map<NetworkName,TokenAddresses>([
    [NetworkName.Devnet,devnetTokens],
    [NetworkName.Testnet,testnetTokens]
]);

export const getTokenAddresses = ():TokenAddresses=>{
    const network = store.getState().network.network.name;
    return networkToTokenMap.get(network);
}