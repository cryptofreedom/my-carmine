import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
import {settings} from "./reducers/settings";
import { logger } from "redux-logger";
import {network} from "./reducers/network";
const rootReducer=combineReducers({
    settings:settings.reducer,
    network:network.reducer
})

export const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false}).concat(logger),

});
export type RootState = ReturnType<typeof store.getState>;