import { EditOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { HorizontalBarChart } from "./charts/HorizontalBar";
import { BarChart } from "./charts/Bar";
import { PieChart } from "./charts/Pie";
import { useSelector } from "react-redux";
import { selectProject } from "../store/slices/projects";

export const ReportField = ({ field }) => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [data, setData] = useState([]);
    const project = useSelector((state) => selectProject(state, {name: 'Самара'}));

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const saveField = () => {

    }

    const renderChart = () => {
        const updatedData = project.tasks.map((item) => {
            const newItem = {};
            field.data?.forEach((f) => {
                if (item[f] !== undefined) {
                    newItem[f] = item[f];
                }
            });
            return newItem;
        });

        // console.log(updatedData);
        const colors = ["#eee", "#33a033", "#d85151"];
        switch (field.type) {
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
        <div className="flex" key={field.data} style={field.styles}>
            {field.type === "TEXT" && field.data}

            <div className="max-w-1/2">
                {field.type != "TEXT" && renderChart()}
            </div>

            <div className="ml-4 cursor-pointer hover:scale-110">
                <EditOutlined onClick={showDrawer} />
            </div>

            <Drawer title="Редактирование" onClose={onClose} open={open}>
                <ReportForm
                    variant="edit"
                    className="flex flex-col gap-2"
                    defaultValues={{ type: field.type, data: field.data }}
                    values={{ select: type, input: data }}
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