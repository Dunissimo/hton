import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReportButtons } from "../components/ReportButtons";
import { ReportFields } from "../components/ReportFields";

export const Report = () => {
    const {id} = useParams(); 
    const {reports} = useSelector((state) => state.reports)
    const report = reports.filter(rep => rep.id === +id)[0];
    
    return (
        <div className="my-container">
            <h2 className="mt-[40px] mb-[30px] text-center text-2xl font-bold">
                Отчет #{report.id}
            </h2>

            <ReportFields fields={report.fields} />

            <ReportButtons />
        </div>
    );
}