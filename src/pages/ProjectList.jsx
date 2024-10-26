import { Link } from 'react-router-dom';
import { ProjectItem } from '../components/ProjectItem';
import { useEffect, useState } from "react";
import { getAllProjects } from "../network/api.js";

export const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAllProjects().then(response => {
            console.log('Полученные данные проектов:', response);
            if (Array.isArray(response)) {
                setProjects(response);
            } else {
                console.error('Полученные данные не являются массивом:', response);
                setProjects([]);
            }
        }).catch(error => {
            console.error('Ошибка при получении проектов:', error);
            setProjects([]);
        });
    }, []);

    return (
        <div className="my-container">
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