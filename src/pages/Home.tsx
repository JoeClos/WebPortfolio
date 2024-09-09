import '../styles/main.css';
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <section id="home" className="home">
      <div className="welcome-section">
        <h1>Welcome to my digital space!</h1>
        <p className='description'>I'm Josephine, a passionate frontend developer who loves creating innovative solutions. Dive into my work and see what I've been up to!</p>
        <Link to="/projects"><button >Explore My Work <span className="arrow">&#8594;</span> </button></Link>
      </div>
    </section>
  );
};

export default Home;
