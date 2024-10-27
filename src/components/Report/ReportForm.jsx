import { Button, Checkbox, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const charts = ["CHART_PIE", "CHART_HOR_BAR", "CHART_BAR"];

export const ReportForm = ({
    field,
    values = {},
    defaultValues = {},
    handlers = {},
    variant = "create",
    className,
    properties
}) => {
    const [selectedProps, setSelectedProps] = useState([]);
    const [dataType, setDataType] = useState("date");
    const [isGroup, setIsGroup] = useState(false);

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
                charts.includes(values.select) && <div>
                    <div className="w-full flex flex-wrap justify-center gap-2">
                        {properties?.length == 0 && <span>Нет данных</span>}
                        {
                            properties?.map(prop => (
                                <Checkbox
                                    data-value={prop.name}
                                    onChange={handleCheckboxChange}
                                >
                                    {prop.name}
                                </Checkbox>
                            ))
                        }
                    </div>
                    <div className={"flex justify-center my-6"}>
                        <br />
                        <Checkbox
                            checked={isGroup}
                            onChange={(e) => setIsGroup(e.target.checked)}
                        >
                            Групировка
                        </Checkbox>
                    </div>

                    <div>
                        {isGroup && (dataType === 'date' ? (
                            <>
                                <Select defaultValue={""} className="w-[300px]" options={[
                                    { value: "", label: "Начальная дата" },
                                    { value: "20.02.2003", label: "20.02.2003" },
                                    { value: "20.02.2004", label: "20.02.2004" },
                                    { value: "20.02.2005", label: "20.02.2005" },
                                    { value: "20.02.2006", label: "20.02.2006" },
                                ]} /> <br />
                                <Select defaultValue={""} className="w-[300px]" options={[
                                    { value: "", label: "Конечная дата" },
                                    { value: "20.02.2010", label: "20.02.2010" },
                                    { value: "20.02.2011", label: "20.02.2011" },
                                    { value: "20.02.2012", label: "20.02.2012" },
                                    { value: "20.02.2013", label: "20.02.2013" },
                                ]} />
                            </>
                        ) : (
                            <>
                                <Select defaultValue={""} className="w-[300px]" options={[
                                    { value: "", label: "Начало" },
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                    { value: "3", label: "3" },
                                    { value: "4", label: "4" },
                                    { value: "5", label: "5" },
                                ]} /> <br />
                                <Select defaultValue={""} className="w-[300px]" options={[
                                    { value: "", label: "Конец" },
                                    { value: "100", label: "100" },
                                    { value: "200", label: "200" },
                                    { value: "300", label: "300" },
                                    { value: "400", label: "400" },
                                    { value: "500", label: "500" },
                                ]} />
                            </>
                        ))}
                    </div>

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

            <Button disabled={values.select != "TEXT" && properties?.length == 0} onClick={() => {
                handlers?.button();
                handlers?.props([]);
            }} className="max-w-[200px]" type="dashed">Применить</Button>
        </div>
    );
}