import { Link } from 'react-router-dom';
import { ProjectItem } from '../components/ProjectItem';
import { useSelector } from 'react-redux';

export const ProjectList = () => {
    const {projects} = useSelector((state) => state.projects);
    
    return (
        <div className="my-container">
            <div className="projects-list">
                {projects.map((item, index) => (
                    <Link key={index} to={`/projects/${item.name}`}>
                        <ProjectItem {...item} />
                    </Link>
                ))}
            </div>
        </div>
    )
}