import { Button, Input, Select } from "antd";
import { ReportButtons } from "../../components/Report/ReportButtons"
import { useEffect, useState } from "react";
import { ReportFields } from "../../components/Report/ReportFields";
import { useDispatch } from "react-redux";
import { addReport } from "../../store/slices/reports";
import { useNavigate } from "react-router-dom";
import { ReportForm } from "../../components/Report/ReportForm";
import { useReportForm } from "../../hooks/useReportForm";

export const CreateReport = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        addField, 
        data, 
        fields, 
        handleInputChange, 
        handlePropsChange, 
        handleSelectChange, 
        type
    } = useReportForm();

    const handleSave = (data) => {
        const now = Date.now();
        const projectId = now; // replace to real id

        dispatch(addReport({
            id: now,
            projectId,
            createdDate: now,
            fields
        }));

        navigate(`/reports/${now}`); // replace to report id
    }

    return (
        <div className="create-report my-container">
            <h2 className="mt-[40px] mb-[30px] text-center text-2xl font-bold">
                Сформировать отчёт для проекта
            </h2>

            {/* список добавленных элементов */}
            <ReportFields fields={fields} />

            <div className="m-auto">
                <form className="flex flex-col justify-center items-center gap-4">
                    <ReportForm
                        values={{
                            select: type,
                            input: data,
                        }}
                        handlers={{
                            select: handleSelectChange,
                            input: handleInputChange,
                            button: addField,
                            props: handlePropsChange,
                        }}
                        className="flex flex-col items-center gap-2"
                    />
                </form>
            </div>

            <ReportButtons onSave={handleSave} />
        </div>
    )
}