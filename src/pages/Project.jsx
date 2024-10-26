import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Input, Select } from 'antd';
import { TasksTable } from '../components/TasksTable';

export const Project = () => {
    const { name } = useParams();

    // api -> get project's tasks
    const [tasks, setTasks] = useState([
        {
            id: 55127,
            project: "Самара",
            type: "Подзадача",
            status: "Выполнено",
            priority: "Средний",
            number: "SAMARA-2",
            name: "[BA] Выгрузка в файл",
            createdDate: "2023-03-13 06:10:00.000000",
            createdAuthor: "Андрей С.",
            updatedDate: "2023-03-30 08:52:00.000000",
            updatedAuthor: "no-reply system notifier",
            description: "Реализация функции выгрузки данных в файл включает:  Определение форматов файов для экспорта (например, CSV, XLSX). Реализация функционала выгрузки с учетом безопасности данных. Проведение тестирования на различных объемах данных. Эта функция улучшит возможность работы с данными вне системы.",
            executor: "Дмитрий В.",
            owner: "Андрей С.",
            deadline: "2023-04-28",
            estimation: null,
            sprintName: null,
            wastedTime: null,
            workGroup: null,
            resolution: null,
        },
        {
            id: 52901,
            project: "Самара",
            type: "Подзадача",
            status: "Выполнено",
            priority: "Средний",
            number: "SAMARA-1",
            name: "[BACK][ПРОД] Плановые даты во вкладке Информация",
            createdDate: "2023-02-21 13:06:00.000000",
            createdAuthor: "Дмитрий В.",
            updatedDate: "2023-03-14 08:06:00.000000",
            updatedAuthor: "no-reply system notifier",
            description: "Добавление плановых дат во вкладке 'Информация' включает:  Определение ключевых дат, которые должны отображаться. Реализация функционала для отображения этих дат. Тестирование на удобство восприятия информации. Эти изменения помогут пользователям лучше планировать свои действия.",
            parentId: 61468,
            executor: "Павел Х.",
            owner: "Дмитрий В.",
            deadline: "2023-03-31",
            estimation: null,
            sprintName: null,
            wastedTime: null,
            workGroup: null,
            resolution: null,
        },

        {
            id: 165637, project: "Санкт-Петербург", type: "Задача", status: "Закрыто", priority: "Низкий", number: "SPB-2844", name: "[FRONT][BACK] Создать базовую конфигурацию для работы с сущностью", createdDate: "2023-06-01 10:11:29.824804", createdAuthor: "Мария В.", updatedDate: "2023-09-28 20:01:40.583811", updatedAuthor: "Мария В.", description: "Создание базовой конфигурации для работы с сущностью включает:  Определение ключевых атрибутов сущности. Реализация базовой структуры конфигурации. Тестирование на корректность работы с новой сущностью. Это поможет упростить интеграцию новых компонентов в систему.", executor: "Антон И.", owner: "Мария В.", estimation: 60, sprintName: "Спринт 2023.2.5", wastedTime: 60, workGroup: null, resolution: "Архитектурная задача"
        },
        {
            id: 165637, project: "Санкт-Петербург", type: "Задача", status: "Закрыто", priority: "Низкий", number: "SPB-2844", name: "[UX] Создать шаблон на изменение статусной модели", createdDate: "2023-06-01 10:11:29.824804", createdAuthor: "Мария В.", updatedDate: "2023-09-28 20:01:40.583811", updatedAuthor: "Мария В.", description: "Разработка шаблона для изменения статусной модели включает несколько ключевых шагов:  Определить основные параметры статусов. Создать шаблон с необходимыми полями. Протестировать шаблон на разных сценариях использования. Этот шаблон упростит процесс обновления статусов и повысит качество данных. {color:#de350b}Приложил видео{color}", executor: "Антон И.", owner: "Мария В.", estimation: 60, sprintName: "Спринт 2023.4.1", wastedTime: 60, workGroup: null, resolution: "Архитектурная задача"
        }
    ]);

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