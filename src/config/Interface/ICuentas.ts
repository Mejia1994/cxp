import React from "react";

export interface ICuentas {
    key: React.Key;
    proveedor: string;
    proveedor_nombre: string;
    moneda_documento: string,
    monto_documento: string;
    no_vencido: string;
    dias1_30: number;
    dias31_60: number;
    dias61_90: number;
    dias91_180: number;
    dias181: number;
}