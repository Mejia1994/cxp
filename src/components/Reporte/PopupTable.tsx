import {List} from "antd";
import {FC} from "react";
import Popup from "../../config/Interface/Popup";

const PopupTable: FC<Popup> = function (props) {

    const PopupTableIndex = [
        {
            name: "Visualizar Documentos",
            event: function () {
                console.log(props.record)
            }
        }
    ]

    return (
        <List
            className="absolute bg-white content-shadow pr-5"
            style={{left: `${props.x}px`, top: `${props.y}px`, zIndex: 11111111}}
            size="small"
            bordered
            dataSource={PopupTableIndex}
            renderItem={(item, index) => <List.Item onClick={item.event}
                                                    className="cursor-pointer font-bold !text-neutral-600"
                                                    key={index}>{item.name}</List.Item>}
        />
    );
}

export default PopupTable;