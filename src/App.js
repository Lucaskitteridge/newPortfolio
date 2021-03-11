import './App.css';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaBookOpen, FaPhone } from 'react-icons/fa'
import { useState } from 'react'

function App() {

  window.document.title="Lucas Kitteridge Portfolio";

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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@300&display=swap" rel="stylesheet" />
      <div className="Homebeforescrolling">
        <Navbar className={colorChange ? 'Navbar scroll' : 'Navbar'} position="fixed" sticky="top" id="navbar" expand="sm">
          <Navbar.Brand className="logo" href="#welcomepage">Lucas Kitteridge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#aboutMe">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div >
          <div className="welcomepage" id="welcomepage">
            <h1>I'm Lucas Kitteridge and I'm a Full Stack Web-developer</h1>
          </div>
        </div>
        <div id="aboutMe" className="aboutme">
          <h1 className="title">About Me</h1>
          <div className="columns">
            <div className="profile"></div>
            <div className="aboutmecolumn">
              <p>
                As a recent graduate of the web development bootcamp from Lighthouse Labs, I am excited to start my carrer as a web developer. I am bringing my work ethic and creative problem soling skills that I developed during my seven year carrer as a professional figure skater and from my bachelors degree in Fine Art.
            </p>
              <a href="https://resume.creddle.io/resume/3m97wunziro" target="_blank" rel="noreferrer">
                <FaBookOpen className="Fa" size="2em" />
              </a>
              <p className="linkname" >Resume</p>
            </div>
          </div>
        </div>
        <div id="skills" className="skills">
          <h1 className="title">Skills</h1>
          <div className="categories">
            <div className="group">
              <h1 className="skilltitle">Languages</h1>
              <p className="skills">Javascript, Ruby, Html, Css </p>
            </div>
            <div className="group">
              <h1 className="skilltitle">Databases</h1>
              <p className="skills">PostgreSQL</p>
            </div>
            <div className="group">
              <h1 className="skilltitle">Frameworks</h1>
              <p className="skills">Node, React, Express, Ajax, Axios, Jquery, Babel, Storybook, Normalise, EJS, Rails</p>
            </div>
            <div className="group">
              <h1 className="skilltitle">Testing</h1>
              <p className="skills">Jest, Mocha, Chai, Cypress, Capybara</p>
            </div>
          </div>
        </div>
        <div id="projects" className="projects">
          <h1 className="title">Projects</h1>
          <Carousel className="carouselitems">
            <Carousel.Item >
              <div className="container">
                <a href="https://github.com/rbbenett/final-project-lhl" target="_blank" rel="noreferrer">
                  <img className="Typecraft" alt="Typecraft" />
                  <p className="description">A typing game using multiple api's to help improve typing speeds as well as able to compare speeds to other users<br />Tech Stack: React, Axios, Websockets, Geocoding, Bootstrap</p>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container">
                <a href="https://github.com/Lucaskitteridge/scheduler" target="_blank" rel="noreferrer">
                  <img className="Scheduler" alt="Scheduler" />
                  <p className="description">A app that dynamically allows users to book and cancel interviews as well as edit existing ones<br />Tech Stack: Jest, Cypress, Storybook, React, Axios, Classnames, Normalize, Babel</p>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container">
                <a href="https://github.com/Lucaskitteridge/tweeter" target="_blank" rel="noreferrer">
                  <img className="Tweeter" alt="Typecraft" />
                  <p className="description">A single page twitter clone app that allows users to create new tweets<br />Tech Stack: Node, Express, Mongo, jQuery, Ajax</p>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container">
                <a href="https://github.com/Lucaskitteridge/tinyapp" target="_blank" rel="noreferrer">
                  <img className="Tinyapp" alt="Typecraft" />
                  <p className="description">A simple multi-page app that allows users to shorten urls<br />Tech Stack: Express, Node</p>
                </a>
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
            <div>
              <a href="tel:6472172725">
                <FaPhone className="Fa" size="2em" />
              </a>
              <p className="linkname">Call me</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
      Copyright &copy; 2021, Lucas Kitteridge. All rights reserved
      </footer>
    </div>
  );
}

export default App;
