import { ReportField } from "./ReportField";

export const ReportFields = ({fields, tasks}) => {
    if (fields?.length == 0 || !Array.isArray(fields)) return;

    return (
        <>
            {fields.map(field => (
                <ReportField field={field} tasks={tasks} key={Math.random() * 100} />
            ))}
        </>
    )
}