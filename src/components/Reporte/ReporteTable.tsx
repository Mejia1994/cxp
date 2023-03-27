import React from 'react';
import {Table} from 'antd';
import {columns} from '../../config/ReporteTable'
import {useGetCuentasQuery} from "../../store/Service/CuentasApi";

const ReporteTable: React.FC = function () {

    const {data, isLoading, error} = useGetCuentasQuery(null)

    return (

        <Table
            size="small"
            bordered
            columns={columns}
            dataSource={data?.data}
            pagination={false}
            scroll={{y: "30vw", x: 900}}/>
    )
}

export default ReporteTable;
