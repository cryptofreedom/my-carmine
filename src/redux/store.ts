import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {settings} from "./reducers/settings";
import { logger } from "redux-logger";
const rootReducer=combineReducers({
    settings:settings.reducer
})

export const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:true
        }).concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;