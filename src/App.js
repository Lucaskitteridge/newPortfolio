import './App.css';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPortrait } from 'react-icons/fa'
import { useState } from 'react'

function App() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 160) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className="App">
      <div className="Homebeforescrolling">
        <Navbar className={colorChange ? 'Navbar scroll' : 'Navbar'} position="fixed" sticky="top" id="navbar" expand="sm">
          <Navbar.Brand href="#welcomepage">Lucas Kitteridge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#aboutMe">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div >
          <div className="welcomepage" id="welcomepage">
            <h1>Hi, I'm Lucas Kitteridge and I'm a full stack web-developer</h1>
          </div>
        </div>
        <div id="aboutMe" className="aboutme">
          <h1 ClassName="title">About Me</h1>
          <div className="columns">
            <div className="profile"></div>
            <div className="aboutmecolumn">
              <p>
                Hi, my name's Lucas. Currently I'm transitioning from a seven year career as a professional figure skater on Team GB to a career in Full stack development.
            </p>
              <a href="https://resume.creddle.io/resume/3m97wunziro" target="_blank" rel="noreferrer">
                <FaPortrait className="Fa" size="2em" />
              </a>
              <p className="linkname" >Resume</p>
            </div>
          </div>
        </div>
        <div id="skills" className="skills">
          <h1 ClassName="title">Skills</h1>
          <div className="categories">
            <div className="group">
              <h1 className="skilltitle">Languages</h1>
              <p>Javascript, Ruby, Html, Css </p>
            </div>
            <div className="group">
              <h1 className="skilltitle">Databases</h1>
              <p>PostgreSQL</p>
            </div>
            <div className="group">
              <h1 className="skilltitle">Frameworks</h1>
              <p>Node, React, Express, Ajax, Axios, Jquery, Babel, Storybook, Normalise, EJS, Rails</p>
            </div>
            <div className="group">
              <h1 className="skilltitle">Testing</h1>
              <p>Jest, Mocha, Chai, Cypress, Capybara</p>
            </div>
          </div>
        </div>
        <div id="projects" className="projects">
          <h1 ClassName="title">Projects</h1>
          <Carousel className="carouselitems">
            <Carousel.Item >
              <div className="container">
                <img className="Typecraft" alt="Typecraft" />
                <p className="description">Typecraft</p>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container">
                <img className="Scheduler" alt="Typecraft" />
                <p className="description">Scheduler</p>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container">
                <img className="Tweeter" alt="Typecraft" />
                <p className="description">Tweeter</p>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container">
                <img className="Tinyapp" alt="Typecraft" />
                <p className="description">Tinyapp</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="contact" className="contact">
          <h1 ClassName="title">Contact</h1>
          <div className="icons">
            <div>
              <a href="https://www.linkedin.com/in/lucaskitteridge/" target="_blank" rel="noreferrer">
                <FaLinkedin className="Fa" size="2em" />
              </a>
              <p className="linkname">linkedin</p>
            </div>
            <div>
              <a href="https://github.com/Lucaskitteridge" target="_blank" rel="noreferrer">
                <FaGithub className="Fa" size="2em" />
              </a>
              <p className="linkname">Github</p>
            </div>
            <div>
              <a href="mailto:lucas.benjamin.kitteridge@gmail.com">
                <FaEnvelope className="Fa" size="2em" />
              </a>
              <p className="linkname">Email me</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        Copyright
      </footer>
    </div>
  );
}

export default App;
