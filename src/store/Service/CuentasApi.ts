import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ICuentas} from "../../config/Interface/ICuentas";

export const cuentasApi = createApi({
    reducerPath: 'CuentasPP',
    baseQuery: fetchBaseQuery({baseUrl: '/api.insumos'}),
    endpoints: (builder) => ({
        getCuentas: builder.query({
            query: () => `/CuentasPP/Cuentas`,
        }),
        getDocumentos: builder.query({
            query: (provedor) => `/CuentasPP/Documentos/?proveedor=${provedor}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetCuentasQuery, useGetDocumentosQuery} = cuentasApi