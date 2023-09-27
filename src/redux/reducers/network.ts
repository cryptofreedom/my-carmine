import {createSlice} from "@reduxjs/toolkit";
import {NetworkState} from "../../types/network";
import {retriveSettings} from "../../utils/settings";
import {getNetworkObjectByNetworkName, getProviderByNetwork} from "../../network/provider";

const getInitialNetworkState=():NetworkState=>{
    const networkName=retriveSettings().network;
    const provider =getProviderByNetwork(networkName);
    return {
        walletId:undefined,
        provider,
        network:getNetworkObjectByNetworkName(networkName)
    }
}
export const network=createSlice({
    name:"network",
    initialState:getInitialNetworkState(),
    reducers:{
        updateNetworkState:(state,action:{payload:Partial<NetworkState>})=>{
            state={...state,...action.payload};
            return state;
        }
    }
})
export const {updateNetworkState} = network.actions