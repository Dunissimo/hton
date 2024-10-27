import { ReportButtons } from "../../components/Report/ReportButtons"
import { useEffect, useState } from "react";
import { ReportFields } from "../../components/Report/ReportFields";
import { useDispatch } from "react-redux";
import { addReport } from "../../store/slices/reports";
import {useNavigate, useSearchParams} from "react-router-dom";
import { ReportForm } from "../../components/Report/ReportForm";
import { useReportForm } from "../../hooks/useReportForm";
import { getAllProperties, getAllTasks } from "../../api/project.js";

export const CreateReport = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [elements, setElements] = useState([])
    const [properties, setProperties] = useState([]);
    let [searchParams] = useSearchParams();
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const id = searchParams.get('projectId');
        getAllProperties(id).then(d => {
            setProperties(d)
        });

        // getAllTasks(id).then(d => {
        //     setTasks(d)
        // });
    }, [])

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
                Отчёт
            </h2>

            {elements.length !== 0 ? (
                elements.map((item, index) => (
                    <p key={index} style={item.styles}>{item.data.text}</p>
                ))
            ) : null}

            <ReportFields fields={fields} tasks={tasks} />

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
                        properties={properties}
                    />
                </form>
            </div>

            <ReportButtons onSave={handleSave}/>
        </div>
    )
}