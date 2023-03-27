import React from "react";
import {ColumnsType} from "antd/es/table";
import {Link} from "react-router-dom";
import {ICuentas} from "./Interface/ICuentas";
import {IDocumentos} from "./Interface/IDocumentos";
import useSearchFilter from "../components/Reporte/useSearchFilter";

const render: React.FC<number> = function (numero) {
    return (
        <>
            {
                numero > 0 && numero.toLocaleString("en-Es")
            }
        </>
    )
}

export const TableLocale = {

    emptyText: (
        <span className="text-neutral-500">
            Sin datos para mostrar.
        </span>
    )
}

export const columns: ColumnsType<ICuentas> = [
    {
        title: 'Nombre Proveedor',
        width: "25%",
        fixed: "left",
        render: function (record) {
            const tag = `${record.proveedor} - ${record.proveedor_nombre}`
            return <Link state={{tag}} to={`/${record.proveedor}`}
                         className="w-full block"> {`${record.proveedor} - ${record.proveedor_nombre}`}</Link>
        },

      ...useSearchFilter('proveedor')
    },
    {
        title: "Moneda",
        dataIndex: "moneda_documento",
        width: 100,
        filters: [
            {
                text: "NIO",
                value: "NIO"
            },
            {
                text: "USD",
                value: "USD"
            }
        ],
        onFilter: (value, record) => record.moneda_documento === value,
    },
    {
        title: 'Saldo',
        dataIndex: 'monto_documento',
        width: 150,
        align: "right",
        render
    },
    {
        title: 'No Vencido',
        dataIndex: 'no_vencido',
        width: 150,
        align: "right",
        render
    },
    {
        title: '01 - 30 Dias',
        dataIndex: 'dias0_30',
        align: "right",
        render
    },
    {
        title: '31 - 60 Dias',
        dataIndex: 'dias31_60',
        align: "right",
        render
    },
    {
        title: '61 - 90 Dias',
        dataIndex: 'dias61_90',
        align: "right",
        render
    },
    {
        title: '91 - 180 Dias',
        dataIndex: 'dias91_180',
        align: "right",
        render
    },
    {
        title: 'Más de 180 Dias',
        dataIndex: 'dias181',
        align: "right",
        render
    },
];

export const ProveedorTableColumns: ColumnsType<IDocumentos> = [
    {
        title: "No Documento",
        dataIndex: "numero_documento"
    },
    {
        title: "Moneda",
        dataIndex: "moneda_documento",
        filters: [
            {
                text: "NIO",
                value: "NIO"
            },
            {
                text: "USD",
                value: "USD"
            }
        ],
        onFilter: (value , record) => record.moneda_documento === value,
    },
    {
        title: 'Saldo',
        dataIndex: 'monto_documento',
        width: 150,
        align: "right",
        render
    },
    {
        title: 'No Vencido',
        dataIndex: 'no_vencido',
        width: 150,
        align: "right",
        render
    },
    {
        title: '01 - 30 Dias',
        dataIndex: 'dias0_30',
        align: "right",
        render
    },
    {
        title: '31 - 60 Dias',
        dataIndex: 'dias31_60',
        align: "right",
        render
    },
    {
        title: '61 - 90 Dias',
        dataIndex: 'dias61_90',
        align: "right",
        render
    },
    {
        title: '91 - 180 Dias',
        dataIndex: 'dias91_180',
        align: "right",
        render
    },
    {
        title: 'Más de 180 Dias',
        dataIndex: 'dias181',
        align: "right",
        render
    },
]