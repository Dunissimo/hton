import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReportButtons } from "../components/ReportButtons";

export const Report = () => {
    const {reports} = useSelector((state) => state.reports)
    const [fields, setFields] = useState([
        {
            type: "TEXT",
            data: "test",
            styles: {
                color: "red",
            },
        },
        {
            type: "TEXT",
            data: "test 2",
            styles: {
                color: "green",
            },
        },
        {
            type: "TEXT",
            data: "test 2",
            styles: {
                color: "blue",
                fontSize: 20
            },
        },
        {
            type: "CHART",
            data: null,
            styles: {
                // ...
            },
        },
    ]);

    const {id} = useParams(); 
    const report = reports.filter(rep => rep.id === +id)[0];
    
    return (
        <div className="my-container">
            <h2 className="mt-[40px] mb-[30px] text-center text-2xl font-bold">
                Отчет #{report.id}
            </h2>

            {fields.map(field => (
                <div>
                    {field.type}: {field.data || "null"}
                </div>
            ))}

            <ReportButtons />
        </div>
    );
}