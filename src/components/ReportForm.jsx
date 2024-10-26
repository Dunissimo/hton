import { Button, Input, Select } from "antd";

export const ReportForm = ({ values = {}, defaultValues = {}, handlers = {}, variant = "create", className }) => {
    return (
        <div className={className}>
            <Select
                onChange={handlers.select && handlers.select}
                defaultValue={defaultValues.type || ""}
                value={values.select}
                className="w-full"
                options={[
                    { value: "", label: <span>Выберите тип</span> },
                    { value: "TEXT", label: <span>Текст</span> },
                    { value: "CHART_LINEAR", label: <span>Линейная диаграмма</span> },
                    { value: "CHART_CIRCLE", label: <span>Круговая диаграмма</span> },
                    { value: "CHART_SMTH", label: <span>Еще какая то диаграмма</span> },
                    // {value: "", label: <span></span>},
                ]}
            />

            {
                values.select === "TEXT" && <Input
                    value={values.input}
                    defaultValue={defaultValues.data || ""}
                    onChange={handlers.input && handlers.input}
                    placeholder="Введите текст"
                />
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
                            placeholder="Weight "
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

            <Button onClick={handlers.button && handlers.button} className="w-full" type="dashed">Применить</Button>
        </div>
    );
}