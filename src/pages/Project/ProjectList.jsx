import { Link } from 'react-router-dom';
import { ProjectItem } from '../../components/ProjectItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createProjectReq, fetchProjectsReq } from '../../store/slices/projects';
import { Button, Input, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useModal } from '../../hooks/useModal';

export const ProjectList = () => {
    const { changeOpen, isOpen } = useModal();
    const { projects } = useSelector((state) => state.projects);
    const dispatch = useDispatch();
    const [projectName, setProjectName] = useState("");

    useEffect(() => {
        dispatch(fetchProjectsReq());
    }, []);

    const handleProjectCreate = () => {
        dispatch(createProjectReq(projectName));
    }

    return (
        <div className="my-container">
            <Button className="mt-6" onClick={() => changeOpen(true)}>
                <PlusCircleOutlined />
            </Button>

            <Modal open={isOpen} onOk={() => {handleProjectCreate(); changeOpen(false)}} onCancel={() => changeOpen(false)}>
                <h2 className='mb-4'>Создание проекта</h2>

                <form>
                    <Input
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder='Имя проекта'
                    />
                </form>
            </Modal>

            <div className="projects-list">
                {projects.length === 0 ? (
                    <p>Нет доступных проектов. Пожалуйста, добавьте новый проект.</p>
                ) : (
                    projects.map((item, index) => (
                        <Link key={index} to={`/projects/${item.id}`}>
                            <ProjectItem {...item} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};