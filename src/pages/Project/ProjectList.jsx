import { Link } from 'react-router-dom';
import { ProjectItem } from '../../components/ProjectItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ProjectList = () => {
    const {projects} = useSelector((state) => state.projects);
    
    return (
        <div className="my-container">
            <div className="projects-list">
                {projects.length === 0 ? (
                    <p>Нет доступных проектов. Пожалуйста, добавьте новый проект.</p>
                ) : (
                    projects.map((item, index) => (
                        <Link key={index} to={`/projects/1`}>
                            <ProjectItem {...item} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};