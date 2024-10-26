import { Button, Input, Select } from "antd";
import { ReportButtons } from "../components/ReportButtons"
import { useState } from "react";

export const CreateReport = () => {
    const [type, setType] = useState("");

    const handleChange = (value) => {
        setType(value);
    };

    return (
        <div className="create-report my-container">
            <h2 className="mt-[40px] mb-[30px] text-center text-2xl font-bold">
                Сформировать отчёт для проекта
            </h2>

            {/* список добавленных элементов */}

            <div className="max-w-[200px] m-auto">
                <form className="flex flex-col items-center gap-4">
                    <Select onChange={handleChange} defaultValue={""} className="w-full" options={[
                        { value: "", label: <span>Выберите тип</span> },
                        { value: "text", label: <span>Текст</span> },
                        { value: "chart-linear", label: <span>Линейная диаграмма</span> },
                        { value: "chart-circle", label: <span>Круговая диаграмма</span> },
                        { value: "chart-smth", label: <span>Еще какая то диаграмма</span> },
                        // {value: "", label: <span>Выберите тип</span>},
                    ]} />

                    {type === "text" && <Input placeholder="Введите текст" />}

                    <Button className="w-full" type="dashed">Добавить элемент</Button>
                </form>
            </div>

            <ReportButtons />
        </div>
    )
}