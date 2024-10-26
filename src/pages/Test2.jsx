import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ChartSettings } from '../components/charts/Settings';
import { PieChart } from '../components/charts/Pie';
import { HorizontalBarChart } from '../components/charts/HorizontalBar';
import { BarChart } from '../components/charts/Bar';



export const Test2 = () => {
    const [pieData, setPieData] = useState(testData);
    const [barData, setBarData] = useState(testData);
    const [horizontalBarData, setHorizontalBarData] = useState(testData);

    const [pieColors, setPieColors] = useState(initialColors);
    const [barColors, setBarColors] = useState(initialColors);
    const [horizontalBarColors, setHorizontalBarColors] = useState(initialColors);
    const [userSettings, setUserSettings] = useState({
        fields: [],
        colors: initialColors,
    });

    const handleResetSettings = () => {
        setPieData(testData);
        setBarData(testData);
        setHorizontalBarData(testData);
        setPieColors(initialColors);
        setBarColors(initialColors);
        setHorizontalBarColors(initialColors);
        setUserSettings({ fields: [], colors: initialColors });

        // Обновление модального окна с начальными данными
        setIsModalOpen(true);
    };

    const [currentChart, setCurrentChart] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (chart) => {
        setIsModalOpen(true);
        setCurrentChart(chart);

    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleApplySettings = (dataFields, colorsArray) => {
        // Создаем новый массив данных
        const updatedData = testData.map((item) => {
            const newItem = {};
            dataFields.forEach((field) => {
                if (item[field] !== undefined) {
                    newItem[field] = item[field];
                }
            });
            return newItem;
        });

        // Обновляем состояние в зависимости от текущей диаграммы
        if (currentChart === "pie") {
            setPieData(updatedData);
            setPieColors(colorsArray);
        } else if (currentChart === "bar") {
            setBarData(updatedData);
            setBarColors(colorsArray);
        } else if (currentChart === "horizontalBar") {
            setHorizontalBarData(updatedData);
            setHorizontalBarColors(colorsArray);
        }

        // Сохраняем настройки пользователя
        setUserSettings({ fields: dataFields, colors: colorsArray });
        setIsModalOpen(false);
    };

    const fields = getUniqueFields(testData);

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ChartSettings
                    onApplySettings={handleApplySettings}
                    onClose={() => setIsModalOpen(false)}
                    fields={fields}
                    initialFields={userSettings.fields}
                    initialColors={userSettings.colors}
                />
            </Modal>

            <div className="chart-container">
                <PieChart data={pieData} colors={pieColors} />
                <button onClick={() => showModal("pie")}>Настройки</button>
            </div>
            <div className="chart-container">
                <HorizontalBarChart data={horizontalBarData} colors={horizontalBarColors} />
                <button onClick={() => showModal("horizontalBar")}>Настройки</button>
            </div>
            <div className="chart-container">
                <BarChart data={barData} colors={barColors} />
                <button onClick={() => showModal("bar")}>Настройки</button>
            </div>
            {/* <button onClick={handleResetSettings}>Сбросить настройки</button> */}
        </>
    );
};

const getUniqueFields = (data) => {
    const fields = new Set();
    data.forEach((item) => {
        Object.keys(item).forEach((key) => {
            fields.add(key);
        });
    });
    return Array.from(fields);
};

const initialColors = ["#FF6384", "#36A2EB", "#FFCE56"];

const testData = [
    {
        id: 52901,
        project: "Самара",
        type: "Подзадача",
        status: "Выполнено",
        priority: "Средний",
        number: "SAMARA-1",
        createdDate: "2023-02-21 13:06:00.000000",
        createdAuthor: "Дмитрий В.",
        updatedDate: "2023-03-14 08:06:00.000000",
        updatedAuthor: "no-reply system notifier",
        description: "Добавление плановых дат во вкладке 'Информация' включает: Определение ключевых дат, которые должны отображаться. Реализация функционала для отображения этих дат. Тестирование на удобство восприятия информации. Эти изменения помогут пользователям лучше планировать свои действия.",
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
        id: 52902,
        project: "Самара",
        type: "Подзадача",
        status: "Выполнено",
        priority: "Средний",
        number: "SAMARA-1",
        createdDate: "2023-02-21 13:06:00.000000",
        createdAuthor: "Дмитрий В.",
        updatedDate: "2023-03-14 08:06:00.000000",
        updatedAuthor: "no-reply system notifier",
        description: "Добавление плановых дат во вкладке 'Информация' включает: Определение ключевых дат, которые должны отображаться. Реализация функционала для отображения этих дат. Тестирование на удобство восприятия информации. Эти изменения помогут пользователям лучше планировать свои действия.",
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
    // Другие тестовые данные...
];