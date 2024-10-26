import { useState, useEffect } from "react";

export const ChartSettings = ({ onApplySettings, onClose, fields, initialFields, initialColors }) => {
    const [selectedFields, setSelectedFields] = useState(initialFields);
    const [colors, setColors] = useState(initialColors);

    useEffect(() => {
        setSelectedFields(initialFields);
        setColors(initialColors);
    }, [initialFields, initialColors]);

    const handleFieldChange = (field) => {
        setSelectedFields((prev) =>
            prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
        );
    };

    const handleColorChange = (event, index) => {
        const newColors = [...colors];
        newColors[index] = event.target.value;
        setColors(newColors);
    };

    const handleSubmit = () => {
        onApplySettings(selectedFields, colors);
    };

    const handleReset = () => {
        setSelectedFields([]);
        setColors(initialColors);
    };

    return (
        <div className="chart-settings-modal">
            <h2>Настройки диаграммы</h2>
            <h3>Выберите поля:</h3>
            {fields.map((field) => (
                <div key={field}>
                    <input
                        type="checkbox"
                        checked={selectedFields.includes(field)}
                        onChange={() => handleFieldChange(field)}
                    />
                    <label>{field}</label>
                </div>
            ))}
            <h3>Выберите цвета:</h3>
            {colors.map((color, index) => (
                <div key={index}>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => handleColorChange(e, index)}
                    />
                </div>
            ))}
            <button onClick={handleSubmit}>Применить</button>
            <button onClick={handleReset}>Сбросить</button>
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
};
