import { EditOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { ReportForm } from "./ReportForm";

export const ReportField = ({ field }) => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [data, setData] = useState([]);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const saveField = () => {

    }
    

    return (
        <div className="flex" key={field.data} style={field.styles}>
            {field.type}: {field.data || "null"}

            <div className="ml-4 cursor-pointer hover:scale-110">
                <EditOutlined onClick={showDrawer} />
            </div>

            <Drawer title="Редактирование" onClose={onClose} open={open}>
                <ReportForm 
                    variant="edit"
                    className="flex flex-col gap-2" 
                    defaultValues={{type: field.type, data: field.data}}
                    values={{select: type, input: data}}
                    handlers={{
                        select: (value) => setType(value),
                        input: (e) => setData(e.target.value),
                        button: saveField,
                    }}
                />
            </Drawer>
        </div>
    )
}