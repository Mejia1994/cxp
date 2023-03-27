import React, {FC, useEffect, useState} from "react";
import ReporteTable from "./ReporteTable";
import {Select} from "antd";
import BreadcrumbTable from "./BreadcrumbTable";
import ProveedorTable from "./ProveedorTable";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const ReporteIndex: FC = function () {

    return (
        <div className="content-shadow p-3">

            <div className="my-3 w-1/5">
                <label className="font-bold mb-2 text-neutral-500">Empresa</label>
                <Select className="w-full mt-2" defaultValue="5" placeholder="Seleccione una cuenta">
                    <Select.Option selected key="5" value='5'>Agropecuaria San Jorge, S.A.</Select.Option>
                </Select>
            </div>

            <BrowserRouter>
                <BreadcrumbTable/>
                <Routes>
                    <Route path="/" element={<ReporteTable/>}/>
                    <Route path="/:proveedor" element={<ProveedorTable/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReporteIndex;