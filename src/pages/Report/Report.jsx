import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from "antd";
import { ReportButtons } from "../../components/Report/ReportButtons";
import { ReportFields } from "../../components/Report/ReportFields";
import { ReportForm } from "../../components/Report/ReportForm";
import { useReportForm } from "../../hooks/useReportForm";
import { fetchReportsReq, saveReportFieldsReq } from "../../store/slices/reports";
import { useModal } from "../../hooks/useModal";
import { getAllFields } from "../../api/report";

export const Report = () => {
    const dispatch = useDispatch();
    const { changeOpen, isOpen } = useModal();
    const { id } = useParams();
    const report = useSelector((state) => state.reports.reports.find(item => item.id === +id));
    const [reportFields, setFields] = useState([]);

    const getFields = async () => {
        if (!report) return;

        setFields(await getAllFields(report.id));
    }

    useEffect(() => {
        dispatch(fetchReportsReq());
    }, []);

    useEffect(() => {
        getFields();
    }, [report])

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
        let resFields = [];

        if (reportFields) {
            resFields = [...reportFields, ...fields];
        } else {
            resFields = [...fields];
        }

        dispatch(saveReportFieldsReq({id: report.id, fields: resFields}));
    }

    return (
        <div className="my-container">
            <h2 className="mt-[40px] mb-[30px] text-center text-2xl font-bold">
                Отчет #{report?.id}
            </h2>

            <ReportFields fields={reportFields} />
            <ReportFields fields={fields} />

            <ReportButtons onSave={handleSave} />

            <Button onClick={() => changeOpen(true)}>
                <PlusCircleOutlined />
            </Button>

            <Modal open={isOpen} closable footer={null} onCancel={() => changeOpen(false)}>
                <div className="m-auto">
                    <form className="flex flex-col justify-center items-center gap-4">
                        <ReportForm
                            values={{
                                select: type,
                                input: type === "TEXT" ? data.text : data,
                            }}
                            handlers={{
                                select: handleSelectChange,
                                input: handleInputChange,
                                button: () => {addField(); changeOpen(false);},
                                props: handlePropsChange,
                            }}
                            className="flex flex-col items-center gap-2"
                        />
                    </form>
                </div>
            </Modal>
        </div>
    );
}