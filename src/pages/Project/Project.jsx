import { Link, useParams } from 'react-router-dom';
import { Button, Input, Select } from 'antd';
import FileUploadComponent from "../../components/FileUploadComponent.jsx";
import { useEffect, useState } from "react";
import { getByIdProject } from "../../network/api.js";
import { TasksTable } from "../../components/TasksTable.jsx";
import { selectTasks } from "../../store/slices/projects/index.js";
import { useSelector } from "react-redux";
import { getAllTasks } from '../../api/project.js';

export const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null); // Инициализация project как null
    const [tasks, setTasks] = useState([])

    const name = useState("Самара")

    // const tasks = useSelector((state) => selectTasks(state, {name}));

    useEffect(() => {
        getByIdProject(id).then(r => {
            setProject(r);
        }).catch(error => {
            console.error('Ошибка при получении проекта:', error);
        });

        getAllTasks(id).then(d => {
            setTasks(d)
        });
    }, [id]);

    // Проверка на наличие проекта
    if (!project) {
        return <p>Загрузка проекта...</p>; // Сообщение о загрузке, если проект еще не загружен
    }

    return (
        <div className="my-container">
            <div className="project">
                <div className="mt-[40px] mb-[40px] flex items-center justify-center gap-[15px]">
                    <h2 className="text-2xl font-bold">Проект: {project.name}</h2>

                    <Link to={`/reports/create?projectId=${project.id}`}>
                        <Button type="default">Сформировать отчет</Button>
                    </Link>

                    <FileUploadComponent projectId={project.id}>
                        Импорт
                    </FileUploadComponent>

                    <FileUploadComponent projectId={project.id}>
                        Импорт обновлений
                    </FileUploadComponent>
                </div>

                {
                    tasks && <form className="mb-[20px] flex gap-4 items-center">
                        <Input className="max-w-[200px]" type="text" placeholder="Поиск" />

                        <Select defaultValue="" className="w-[200px]" options={[
                            { value: "", label: <span>Сортировать по</span> },
                            { value: "status_asc", label: <span>Статус (по возрастанию)</span> },
                            { value: "status_desc", label: <span>Статус (по убыванию)</span> },
                            { value: "created_asc", label: <span>Дата создания (по возрастанию)</span> },
                            { value: "created_desc", label: <span>Дата создания (по убыванию)</span> },
                        ]} />

                        <span>+ еще какие-то фильтры</span>
                    </form>
                }

                <div className="project-table-wrapper">
                    <TasksTable projectName={project.name} tasks={tasks}/>
                </div>
            </div>
        </div>
    );
};