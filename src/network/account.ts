import {store} from "../redux/store";

export const connectToLatest=async ()=>{
    const {walletId} = store.getState().network;
    if(walletId){
        return;
    }
    let n = 0;
    while (n<5) {
        if(foundWallet()){
            break;
        }
        const waitTime=2 ** n;
        await new Promise((r)=>setTimeout(r,waitTime));
        n++;
    }
}

const foundWallet=():boolean=>{
    return !!window.starknet_argentX || !!window.starknet_braavos;
}