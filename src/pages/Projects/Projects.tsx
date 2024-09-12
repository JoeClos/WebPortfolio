import { projects } from '../../data/projectsData';
import './projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer';

const Projects = () => {

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My Work</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <Footer />
        </section>
    )
}

export default Projects;