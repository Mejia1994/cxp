import React, {useEffect, useState} from 'react';
import {Breadcrumb} from 'antd';
import {Link, useLocation} from "react-router-dom";

const BreadcrumbTable: React.FC = function () {

    const location = useLocation();
    const [tag, setTag] = useState<string | null>(null)

    useEffect(function () {
        setTag(location?.state?.tag);
    }, [location]);

    return (
        <Breadcrumb className="mt-7 p-1">
            <Breadcrumb.Item>
                <Link to="/">Cuentas Por Pagar</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                {tag}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbTable;