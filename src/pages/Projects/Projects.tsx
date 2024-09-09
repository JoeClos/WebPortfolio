import { projects } from '../../data/projectsData';
import './projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My Work</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;