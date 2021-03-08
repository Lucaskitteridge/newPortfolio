import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {

  return (
    <div className="App">
      <Navbar className="Navbar" position="relative" sticky="top" id="navbar">
        <div>
          <Navbar.Brand href="#welcomepage">Lucas Kitteridge</Navbar.Brand>
        </div>
        <div>
          <Nav className="mr-auto">
            <Nav.Link href="#aboutMe">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="Homebeforescrolling">
        <div className="welcomepage" id="welcomepage">
          <h1>Hi, I'm Lucas and I'm a full stack web-developer</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
        </div>
      </div>
      <div id="aboutMe" className="aboutme">
        <h1>About Me</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
          </p>
      </div>
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
          </p>
      </div>
      <div id="contact" className="contact">
        <h1>Contact</h1>
        <div className="icons">
          <div>
            <a href="https://www.linkedin.com/in/lucaskitteridge/">
              <FaLinkedin className="Fa" size="2em" />
            </a>
            <p className="linkname">linkedin</p>
          </div>
          <div>
            <a href="https://github.com/Lucaskitteridge">
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
  );
}

export default App;
