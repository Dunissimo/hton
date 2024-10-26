import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Input, Select } from 'antd';
import { TasksTable } from '../components/TasksTable';
import { useSelector } from 'react-redux';
import { selectTasks } from '../store/slices/projects';

export const Project = () => {
    const { name } = useParams();

    const tasks = useSelector((state) => selectTasks(state, {name}));

    return (
        <div className="my-container">
            <div className="project">
                <div className="mt-[40px] mb-[40px] flex items-center justify-center gap-[15px]">
                    <h2 className="text-2xl font-bold">Проект: {name}</h2>

                    <Link to="/reports/create">
                        <Button type="default">Сформировать отчет</Button>
                    </Link>
                </div>

                <form className="mb-[20px] flex gap-4 items-center">
                    <Input className="max-w-[200px]" type="text" placeholder="Поиск" />

                    <Select defaultValue="" className="w-[200px]" options={[
                        {value: "", label: <span>Сортировать по</span>},
                        {value: "status_asc", label: <span>Статус (по возрастанию)</span>},
                        {value: "status_desc", label: <span>Статус (по убыванию)</span>},
                        {value: "created_asc", label: <span>Дата создания (по возрастанию)</span>},
                        {value: "created_desc", label: <span>Дата создания (по убыванию)</span>},
                    ]} />

                    <span>+ еще какие то фильтры</span>
                </form>

                <div className="project-table-wrapper">
                    <TasksTable projectName={name} tasks={tasks} />
                </div>
            </div>
        </div>
    );
}