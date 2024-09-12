import '../styles/main.css';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <section id="home" className="home">
      <div className="welcome-section">
        <h1>Welcome to my digital space!</h1>
        <p className='description'>Dive into my work and see what I've been up to!</p>
        <div className="button-style">
          <Link to="/projects" className="button-link">
              <span className="text">Explore My Work</span>
              <span className="arrow">&#8594;</span>
          </Link>
        </div>      </div>
    </section>
  );
};

export default Home;
