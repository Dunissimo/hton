import { Card } from "antd";

export const ProjectItem = ({ name }) => {
    return (
        <Card>
            <p>{name}</p>
            {/*<p>{new Date(createdDate).toLocaleDateString('ru')}</p>*/}
        </Card>
    );
};