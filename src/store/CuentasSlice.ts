import {createSlice} from '@reduxjs/toolkit'
import {ICuentas} from "../config/Interface/ICuentas";
interface ICuentasState {
    cuentas: Array<ICuentas>
}

const initialState: ICuentasState = {
    cuentas: [],
}

export const CuentasSlice = createSlice({
    name: 'Cuentas',
    initialState,
    reducers: {
        relaod: (state) => {
            console.log(state);
        },
    },
})

// Action creators are generated for each case reducer function
export const {relaod} = CuentasSlice.actions
export const cuentasReducer = CuentasSlice.reducer
