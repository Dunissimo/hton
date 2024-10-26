import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReportButtons } from "../../components/Report/ReportButtons";
import { ReportFields } from "../../components/Report/ReportFields";
import { ReportForm } from "../../components/Report/ReportForm";
import { useReportForm } from "../../hooks/useReportForm";
import { updateReport } from "../../store/slices/reports";

export const Report = () => {
    const { id } = useParams();
    const { reports } = useSelector((state) => state.reports)
    const [report, setReport] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setReport(reports.filter(rep => rep.id === +id)[0]);
    }, [reports]);
    
    const {
        addField, 
        data, 
        fields, 
        handleInputChange, 
        handlePropsChange, 
        handleSelectChange, 
        type
    } = useReportForm();

    const handleSave = () => {
        dispatch(updateReport({
            id: report.id,
            projectId: report.projectId,
            createdDate: report.createdDate,
            fields: [...report.fields, ...fields]
        }));

        alert("Данные сохранены");
    }

    return (
        <div className="my-container">
            <h2 className="mt-[40px] mb-[30px] text-center text-2xl font-bold">
                Отчет #{report.id}
            </h2>

            <ReportFields fields={report.fields} />
            <ReportFields fields={fields} />

            <ReportButtons onSave={handleSave} />

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
        </div>
    );
}