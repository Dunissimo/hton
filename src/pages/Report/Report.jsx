import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from "antd";
import { ReportButtons } from "../../components/Report/ReportButtons";
import { ReportFields } from "../../components/Report/ReportFields";
import { ReportForm } from "../../components/Report/ReportForm";
import { useReportForm } from "../../hooks/useReportForm";
import { fetchReportsReq } from "../../store/slices/reports";
import { useModal } from "../../hooks/useModal";
import { getAllFields, saveAllFields } from "../../api/report";
import { getAllProperties, getAllTasks } from "../../api/project.js";
import jsPDF from "jspdf";
import domtoimage from 'dom-to-image-more';

export const Report = () => {
    const dispatch = useDispatch();
    const { changeOpen, isOpen } = useModal();
    const { id } = useParams();
    const report = useSelector((state) => state.reports.reports.find(item => item.id === +id));
    const { loading } = useSelector((state) => state.reports);
    const [reportFields, setFields] = useState([]);
    const [properties, setProperties] = useState([])
    const [tasks, setTasks] = useState([])

    const getFields = async () => {
        if (!report) return;

        setFields(await getAllFields(1));
    }

    useEffect(() => {
        dispatch(fetchReportsReq());

        getAllProperties(id).then(d => {
            setProperties(d)
        });

        getAllTasks(id).then(d => {
            setTasks(d)
        })
    }, [id]);

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

    if (loading) {
        return <span>Loading...</span>
    }

    const handlePdfExport = () => {
        const doc = new jsPDF();
        const _fields = [...reportFields, ...fields];


        _fields.forEach((rep, i) => {
            if (rep.type === "TEXT") {
                doc.text(rep.data.text, 10, 10 * (i + 1));
            } else {
                // const charts = document.querySelectorAll(".reportField-chart canvas");
                
                // if (charts.length != 0) {
                //     charts.forEach((chart) => {
                //         domtoimage.toPng(chart).then((res) => {
                //             doc.addImage(res, "PNG", 10, (10 * i), 100, 100);
                //         });
                //     });
                // }
            }
        });

        doc.save("data.pdf");
    }

    const handleSave = () => {
        let resFields = [];

        if (reportFields) {
            resFields = [...reportFields, ...fields];
        } else {
            resFields = [...fields];
        }

        saveAllFields(id, resFields)

        // dispatch(saveReportFieldsReq({id: report.id, fields: resFields}));
    }

    return (
        <div className="my-container">
            <h2 className="mt-[40px] mb-[30px] text-center text-2xl font-bold">
                Отчет #{report?.id}
            </h2>

            <ReportFields fields={reportFields} tasks={tasks} />
            <ReportFields fields={fields} tasks={tasks} />

            <ReportButtons onSave={handleSave} onExport={{
                pdf: handlePdfExport
            }} />

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
                                button: () => { addField(); changeOpen(false); },
                                props: handlePropsChange,
                            }}
                            properties={properties}
                            className="flex flex-col items-center gap-2"
                        />
                    </form>
                </div>
            </Modal>
        </div>
    );
}