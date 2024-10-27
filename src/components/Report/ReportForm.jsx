import { Button, Checkbox, Input, Select } from "antd";
import {useEffect, useState} from "react";
import { useSelector } from "react-redux";

const charts = ["CHART_PIE", "CHART_HOR_BAR", "CHART_BAR"];

export const ReportForm = ({ field, values = {}, defaultValues = {}, handlers = {}, variant = "create", className, properties }) => {
    const [selectedProps, setSelectedProps] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.nativeEvent.target.dataset.value;

        if (!e.target.checked) {
            setSelectedProps((prev) => {
                const newData = prev.filter(prop => prop !== value);

                if (handlers.props) {
                    handlers.props(newData);
                }

                return newData;
            });
        } else {
            setSelectedProps(prev => {
                const newData = [...prev, value];

                if (handlers.props) {
                    handlers.props(newData);
                }

                return newData;

            });
        }
    }

    return (
        <div className={className}>
            <Select
                onChange={handlers.select}
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
                    onChange={handlers.input}
                    placeholder="Введите текст"
                    className="w-fit"
                />
            }

            {
                charts.includes(values.select) && <div className="w-full flex flex-wrap justify-center gap-2">
                    {properties.length == 0 && <span>Нет данных</span>}
                    {properties.map(prop => <Checkbox data-value={prop} onChange={handleCheckboxChange}>{prop}</Checkbox>)}
                </div>
            }

            {
                variant === "edit" && (
                    <>
                        {
                            values.select === "TEXT" && (
                                <Input
                                    value={field?.styles?.color ?? "000000"} // Проверка field и field.styles
                                    addonBefore="#"
                                    maxLength={6}
                                    placeholder="Цвет"
                                />
                            )
                        }
                        {
                            values.select === "TEXT" && (
                                <Select
                                    value={field?.styles?.["font-weight"] ?? "regular"} // Проверка field и field.styles
                                    placeholder="Weight"
                                    options={[
                                        { value: "regular", label: <span>Regular (400)</span> },
                                        { value: "bold", label: <span>Bold (700)</span> },
                                    ]}
                                />
                            )
                        }
                        <Input
                            value={field?.styles?.["font-size"] ?? ""}
                            onChange={(t) => {
                                handlers.updateStyle("font-size", t)
                            }}
                            placeholder="Размер"
                        />
                        <Select
                            placeholder="Позиция"
                            options={[
                                { value: "start", label: <span>Start</span> },
                                { value: "center", label: <span>Center</span> },
                                { value: "end", label: <span>End</span> },
                            ]}
                        />
                    </>
                )
            }

            <Button disabled={values.select != "TEXT" && properties.length == 0} onClick={() => { handlers?.button(); handlers?.props([]); }} className="max-w-[200px]" type="dashed">Применить</Button>
        </div>
    );
}