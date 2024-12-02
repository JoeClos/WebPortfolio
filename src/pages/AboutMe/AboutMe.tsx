import './aboutMe.css';

const AboutMe = () => {

  return (
    <section id="about" className="about-me">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hi, I'm Josephine, a frontend developer with a love for creating intuitive and visually awesome web apps.
        </p>
        <p>
          I have experience working with a range of technologies and tools, and I'm always eager to learn and adapt to new challenges.</p>
        <p> When I’m not coding, I’m likely immersed in the beauty of the outdoors, experimenting with new recipes, or staying on top of the latest tech trends. My empathetic and artistic nature drives me to help and motivate others, enriching my personal and professional experiences.</p>

        <hr />
      </div>
      <div>
        <h3 className='skills-title'>Skills</h3>
        <div className='skills-section' >
          <a href="https://www.flaticon.com/free-icons/html" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/html.png" alt="html" title='HTML5' className='skills' /></a>
          <a href="https://www.flaticon.com/free-icons/css" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/css.png" alt="css" title='CSS3' className='skills' /></a>
          <a href="https://www.flaticon.com/free-icons/node" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/node.png" alt="nodejs" title="Node.js" className='skills' /></a>
          <a href="https://www.flaticon.com/free-icons/javascript" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/js.png" alt="javascript" title="JavaScript" className='skills' /></a>
          <a href="https://www.flaticon.com/free-icons/react" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/react.png" alt="react" title="React" className='skills' /></a>
          <a href="https://www.flaticon.com/free-icons/typescript" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/typescript.png" alt="typescript" title="Typescript" className='skills' /></a>
          <a href="https://www.flaticon.com/free-icons/bootstrap" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/bootstrap-logo-shadow.png" alt="bootstrap" title="Bootstrap" className='skills' /></a>
          <a href="https://pluspng.com/logo-mongodb-png-1892.html" target='blank' rel="noopener noreferrer"><img src="/assets/skills_icons/mongodb.png" alt="MongoDB" title="MongoDB" className='skills' /></a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
