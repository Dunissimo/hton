import { Card } from "antd";

export const ReportItem = ({ id, createdDate }) => {
    return (
        <Card>
            <p>Отчёт #{id}</p>

            <p>{createdDate && new Date(createdDate).toLocaleDateString('ru')}</p>
        </Card>
    );
};