import {createSlice} from "@reduxjs/toolkit";
import {retriveSettings, storeSettings} from "../../utils/settings";
import {Settings} from "../../types/settings";

export const settings = createSlice({
    name:"settings",
    initialState:retriveSettings(),
    reducers:{
        updateSettingState:(state,action:{payload:Partial<Settings>})=>{
            state={...state,...action.payload};
            storeSettings(state);
            return state;
        },
        setSlippageState: (state, action: { payload: number }) => {
            state.slippage = action.payload;
            return state;
        },
    }
});
export const {updateSettingState,setSlippageState}=settings.actions;

