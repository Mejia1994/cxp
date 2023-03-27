import React, {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useGetDocumentosQuery} from "../../store/Service/CuentasApi";
import {Table} from "antd";
import {ProveedorTableColumns, TableLocale} from "../../config/ReporteTable";

const ProveedorTable: FC = function () {

    const location = useLocation();
    const {data, isLoading, error} = useGetDocumentosQuery(location.pathname.replace("/", ""))


    return (

        <Table
            size="small"
            locale={TableLocale}
            bordered
            columns={ProveedorTableColumns}
            dataSource={data?.data}
            pagination={false}
            scroll={{y: "30vw", x: 900}}/>
    )
}

export default ProveedorTable;