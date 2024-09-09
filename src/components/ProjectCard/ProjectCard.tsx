import { useState } from "react";
import { Project } from "../../types/project";
import { truncateText } from "../../utils/textUtils";
import './projectCard.css';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    }

    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <p>
                {showFullDescription
                    ? project.description
                    : truncateText(project.description, 100)}
                {project.description.length > 100 && (
                    <span onClick={toggleDescription} className="read-more">
                        {showFullDescription ? ' Show less' : ' Read more'}
                    </span>

                )}
            </p>
            <ul className="tech-stack">
                {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                ))}
            </ul>
            <div className="project-links">
                <a href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer" className={project.liveLink ? 'link-active' : 'link-inactive'}>
                    Live Demo
                </a>
                <a href={project.codeLink || '#'} target="_blank" rel="noopener noreferrer" className={project.codeLink ? 'link-active' : 'link-inactive'}>
                    View Code
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;