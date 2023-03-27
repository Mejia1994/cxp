import {FC} from "react";
import {Button, DatePicker, Form, Input, Modal} from "antd";
import {DataType} from "../../../config/ReporteTable";

interface PropsModal {
    isOpen: Boolean
    setOpen: (open: boolean) => void,
}

const FiltroModal: FC<PropsModal> = function (props) {

    const RangePicker = DatePicker.RangePicker;


    return (
        <Modal destroyOnClose={true} open={true} width="40vw"
               footer={
                   <div className="text-start">
                       <Button key="submit" type="primary" ghost>
                           Aplicar
                       </Button>
                       <Button key="clear" danger>
                           Limpiar
                       </Button>
                       <Button key="back" type="text" className="bg-[#00000026]" onClick={() => props.setOpen(false)}>
                           Cerrar
                       </Button>
                   </div>
               }>

            <Form
                /*form={form}*/
                className="my-2 grid grid-cols-2"
                layout="vertical"
                /*validateMessages={validateMessages}*/>

                <Form.Item name="fecha_documento"
                           label={<label className="font-bold text-neutral-500">Fecha Documento</label>}>
                    <RangePicker/>
                </Form.Item>
                <Form.Item name="fecha_vencimiento"
                           label={<label className="font-bold text-neutral-500">Fecha Vencimiento</label>}>
                    <RangePicker className="w-full"/>
                </Form.Item>
                <Form.Item name="proveedor" className="col-span-2"
                           label={<label className="font-bold text-neutral-500">Proveerdor</label>}>
                    <Input placeholder="Ingrese la identificación del proveedor"/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default FiltroModal;