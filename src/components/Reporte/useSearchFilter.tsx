import {IDocumentos} from "../../config/Interface/IDocumentos";
import {Button, Input, InputRef, Space} from "antd";
import { SearchOutlined} from "@ant-design/icons";
import {FilterConfirmProps} from "antd/es/table/interface";

type DataIndex = keyof IDocumentos;

const useSearchFilter = function (dataIndex: DataIndex) {

    const handleSearch = (selectedKeys: string[], confirm: (param?: FilterConfirmProps) => void, dataIndex: DataIndex,) => {
        confirm();
        /*setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);*/
    };

    const handleReset = (clearFilters: () => void, confirm: (param?: FilterConfirmProps) => void) => {
        clearFilters();
        confirm();
    };

    return {
        onFilter: function (value: string, record: IDocumentos) {
            const id = record["proveedor" as DataIndex].toString().toLowerCase().includes((value as string).toLowerCase());
            const name = record["proveedor_nombre" as DataIndex].toString().toLowerCase().includes((value as string).toLowerCase());

            return (id || name);
        },

        filterIcon: function (filtered: boolean) {
            return <SearchOutlined style={{color: filtered ? '#1890ff' : undefined, fontSize: "1rem"}}/>
        },

        filterDropdown: function ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) {
            return (
                <div className="px-3 py-5 w-full" onKeyDown={(e) => e.stopPropagation()}>
                    <Input
                        placeholder={`Buscar ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        style={{marginBottom: 8, display: 'block'}}
                    />
                    <Space>
                        <Button type="primary" ghost
                                onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                                size="small"
                                style={{width: 90}}>
                            Buscar
                        </Button>
                        <Button onClick={() => clearFilters && handleReset(clearFilters, confirm)} size="small"
                                style={{width: 90}}>
                            Limpiar
                        </Button>
                        <div className="w-[120px]"/>
                    </Space>
                </div>
            );
        }
    }
}

export default useSearchFilter;
