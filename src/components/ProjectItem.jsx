import { Card } from "antd";

export const ProjectItem = ({ id, createdDate, name }) => {
    return (
        <Card>
            <p>{name}</p>
            <p>{new Date(createdDate).toLocaleDateString('ru')}</p>
        </Card>
    );
};