import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {

  return (
    <div className="App">
      <div className="Homebeforescrolling">
        <Navbar className="Navbar" position="fixed" sticky="top" id="navbar">
          <div>
            <Navbar.Brand href="#welcomepage">Lucas Kitteridge</Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" >
                <Nav.Link href="#aboutMe">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
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
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
          </p>
          </div>
        </div>
        <div id="skills" className="skills">
          <h1 ClassName="title">Skills</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
        </div>
        <div id="projects" className="projects">
          <h1 ClassName="title">Projects</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
        </div>
        <div id="contact" className="contact">
          <h1 ClassName="title">Contact</h1>
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
      <footer>
        Copyright
      </footer>
    </div>
  );
}

export default App;
