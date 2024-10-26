import { ReportField } from "./ReportField";

export const ReportFields = ({fields}) => {
    if (fields?.length == 0 || !Array.isArray(fields)) return;

    return (
        <>
            {fields.map(field => (
                <ReportField field={field} key={Math.random() * 100} />
            ))}
        </>
    )
}