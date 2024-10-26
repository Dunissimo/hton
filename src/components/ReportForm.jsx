import { Button, Checkbox, Input, Select } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

const charts = ["CHART_PIE", "CHART_HOR_BAR", "CHART_BAR"];

export const ReportForm = ({ values = {}, defaultValues = {}, handlers = {}, variant = "create", className }) => {
    const { properties } = useSelector((state) => state.projects);
    const [selectedProps, setSelectedProps] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.nativeEvent.target.dataset.value;

        if (!e.target.checked) {
            setSelectedProps((prev) => {
                const newData = prev.filter(prop => prop !== value);
                handlers.props(newData);
                return newData;
            });
        } else {
            setSelectedProps(prev => {
                const newData = [...prev, value];
                handlers.props(newData);
                return newData;

            });
        }
    }

    return (
        <div className={className}>
            <Select
                onChange={handlers.select && handlers.select}
                defaultValue={defaultValues.type || ""}
                value={values.select}
                className="w-[300px]"
                options={[
                    { value: "", label: <span>Выберите тип</span> },
                    { value: "TEXT", label: <span>Текст</span> },
                    { value: "CHART_PIE", label: <span>Круговая диаграмма</span> },
                    { value: "CHART_BAR", label: <span>Линейная диаграмма</span> },
                    { value: "CHART_HOR_BAR", label: <span>Линейная горизонтальная диаграмма</span> },
                ]}
            />

            {
                values.select === "TEXT" && <Input
                    value={values.input}
                    defaultValue={defaultValues.data || ""}
                    onChange={handlers.input && handlers.input}
                    placeholder="Введите текст"
                    className="w-fit"
                />
            }

            {
                charts.includes(values.select) && <div className="w-full flex flex-wrap justify-center gap-2">
                    {properties.map(prop => <Checkbox data-value={prop} onChange={handleCheckboxChange}>{prop}</Checkbox>)}
                </div>
            }

            {variant === "edit" && (
                <>
                    {
                        values.select === "TEXT" && <Input
                            addonBefore="#"
                            maxLength={6}
                            placeholder="Цвет"
                        />
                    }
                    {
                        values.select === "TEXT" && <Select
                            placeholder="Weight"
                            options={[
                                { value: "regular", label: <span>Regular (400)</span> },
                                { value: "bold", label: <span>Bold (700)</span> },
                            ]}
                        />
                    }

                    <Input placeholder="Размер" />
                    <Select
                        placeholder="Позиция"
                        options={[
                            { value: "start", label: <span>Start</span> },
                            { value: "center", label: <span>Center</span> },
                            { value: "end", label: <span>End</span> },
                        ]}
                    />
                </>
            )}

            <Button onClick={() => { handlers?.button(); handlers?.props([]);  }} className="max-w-[200px]" type="dashed">Применить</Button>
        </div>
    );
}