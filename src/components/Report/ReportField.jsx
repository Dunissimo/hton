import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { HorizontalBarChart } from "../charts/HorizontalBar";
import { BarChart } from "../charts/Bar";
import { PieChart } from "../charts/Pie";
import { useDispatch, useSelector } from "react-redux";
import { selectProject } from "../../store/slices/projects";
// import { deleteProp } from "../../store/slices/reports";

export const ReportField = ({ field, tasks }) => {
    // const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(field.type);
    const [data, setData] = useState([]);
    // const project = useSelector((state) => selectProject(state, { name: 'Самара' }));

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const remove = (fieldId) => {
        // dispatch(deleteProp({projectName: project.name, fieldId}));        
    }

    const saveField = () => {

    }

    const renderChart = () => {
        const updatedData = []
        const mapData = new Map(Object.entries(tasks || {}));

        field.data?.props?.forEach((f) => {
            updatedData.push(mapData.get(f))
        });
            
        switch (type) {
            case "CHART_PIE":
                return <PieChart data={updatedData} colors={colors} />
            case "CHART_HOR_BAR":
                return <HorizontalBarChart data={updatedData} colors={colors} />
            case "CHART_BAR":
                return <BarChart data={updatedData} colors={colors} />

            default:
                break;
        }
    }

    return (
        <div
            className="flex"
            key={Math.random() * 100}
            style={field.styles}
        >
            {type === "TEXT" && field.data.text}

            <div className="max-w-1/2 reportField-chart">
                {type != "TEXT" && renderChart()}
            </div>

            <div className="ml-4 cursor-pointer hover:scale-110">
                <EditOutlined onClick={showDrawer} />
            </div>
            {/* <div className="ml-4 cursor-pointer hover:scale-110">
                <DeleteOutlined onClick={() => remove(field.id)} />
            </div> */}

            <Drawer title="Редактирование" onClose={onClose} open={open}>
                <ReportForm
                    field={field}
                    variant="edit"
                    className="flex flex-col gap-2"
                    defaultValues={{
                        type,
                        data: type === "TEXT" ? field.data.text : field.data
                    }}
                    values={{
                        select: type,
                        input: type === "TEXT" ? data.text : data
                    }}
                    handlers={{
                        select: (value) => setType(value),
                        input: (e) => setData(e.target.value),
                        button: saveField,
                        updateStyle: (key, value) => {
                            if (field.styles !== null) field.styles[key] = value
                        }
                    }}
                />
            </Drawer>
        </div>
    )
}