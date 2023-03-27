import {configureStore} from '@reduxjs/toolkit'
import {cuentasApi} from "./Service/CuentasApi";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [cuentasApi.reducerPath]: cuentasApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cuentasApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch