import React, {FC, ReactElement, useEffect} from 'react';
import ReporteIndex from "./Reporte/ReporteIndex";
import {Col, Row} from "antd";
import {Provider} from 'react-redux';
import {store} from '../store/store';

const App: FC = function (): ReactElement {

    useEffect(function () {
        let saldo = 3200;
      //  let saldo = 12_000 / 4;
        let inss = saldo * (0.07 );
        let deducion = saldo - inss;

       // let excedenteBMin = 200_000 / 48;
        let excedenteBMin = 100_000 / 48;

        let exedente =  Math.abs(deducion - excedenteBMin);
       // let x = 0.2;
        let x = 0.15 ;
        let iq = (exedente * x);

        console.log((iq ) );
    }, []);
    return (
        <Provider store={store}>
            <Row>
                <Col span={24} style={{background: "cbcbcbcb", padding: '3rem'}}>
                    <ReporteIndex/>
                </Col>
            </Row>
        </Provider>
    )
}

export default App
