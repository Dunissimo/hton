import { createSlice } from '@reduxjs/toolkit'
import { removeElement } from '../../../utils/helpers';

const initialState = {
    projects: [
        {
            id: 86181,
            name: "Самара",
            createdDate: "2023-05-22 12:30:18.595616",
            tasks: [
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
                    parentId: 55123,
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
            ]
        },
        {
            id: 86182,
            name: "Санкт-Петербург",
            createdDate: "2023-06-22 12:30:18.595616",
            tasks: [
                {
                    id: 165637, project: "Санкт-Петербург", type: "Задача", status: "Закрыто", priority: "Низкий", number: "SPB-2844", name: "[FRONT][BACK] Создать базовую конфигурацию для работы с сущностью", createdDate: "2023-06-01 10:11:29.824804", createdAuthor: "Мария В.", updatedDate: "2023-09-28 20:01:40.583811", updatedAuthor: "Мария В.", description: "Создание базовой конфигурации для работы с сущностью включает:  Определение ключевых атрибутов сущности. Реализация базовой структуры конфигурации. Тестирование на корректность работы с новой сущностью. Это поможет упростить интеграцию новых компонентов в систему.", deadline: null, parentId: null, executor: "Антон И.", owner: "Мария В.", estimation: 60, sprintName: "Спринт 2023.2.5", wastedTime: 60, workGroup: null, resolution: "Архитектурная задача"
                },
                {
                    id: 165637, project: "Санкт-Петербург", type: "Задача", status: "Закрыто", priority: "Низкий", number: "SPB-2844", name: "[UX] Создать шаблон на изменение статусной модели", createdDate: "2023-06-01 10:11:29.824804", createdAuthor: "Мария В.", updatedDate: "2023-09-28 20:01:40.583811", updatedAuthor: "Мария В.", description: "Разработка шаблона для изменения статусной модели включает несколько ключевых шагов:  Определить основные параметры статусов. Создать шаблон с необходимыми полями. Протестировать шаблон на разных сценариях использования. Этот шаблон упростит процесс обновления статусов и повысит качество данных. {color:#de350b}Приложил видео{color}", deadline: null, parentId: null, executor: "Антон И.", owner: "Мария В.", estimation: 60, sprintName: "Спринт 2023.4.1", wastedTime: 60, workGroup: null, resolution: "Архитектурная задача"
                }
            ]
        },
    ],
    properties: [
        "id",
        "project",
        "type",
        "status",
        "priority",
        "number",
        "name",
        "createdDate",
        "createdAuthor",
        "updatedDate",
        "updatedAuthor",
        "description",
        "executor",
        "owner",
        "deadline",
        "parentId",
        "estimation",
        "sprintName",
        "wastedTime",
        "workGroup",
        "resolution",
    ]
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, { payload }) => {
            state.projects.push(payload);
        },
        removeProject: (state, { payload }) => {
            state.projects = removeElement(state.projects, payload);
        }
    },
});

export const selectProject = (state, payload) => {
    return state.projects.projects.find(pr => pr.name === payload.name);
}

export const selectTasks = (state, payload) => {
    const pr = state.projects.projects.find(pr => pr.name === payload.name);

    return pr.tasks;
}

export const { addProject, removeProject } = projectsSlice.actions;

export default projectsSlice.reducer;