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
              Hi, my name's Lucas. Currently I'm transitioning from a seven year career as a professional figure skater on Team GB to a career in Full stack development.
          </p>
          </div>
        </div>
        <div id="skills" className="skills">
          <h1 ClassName="title">Skills</h1>
          <div className="categories">
            <div className="languages">
              <h1>Languages</h1>
              <div className="js" alt="Javascript" title="Javascript"></div>
              <div className="ruby" alt="Ruby" title="Ruby"></div>
              <div className="html" alt="HTML" title="Html"></div>
              <div className="css" alt="Css" title="Css"></div>
            </div>
            <div className="databases">
              <h1>Databases</h1>
              <div className="sql" alt="PostgreSQL" title="PostgreSQL"></div>
            </div>
            <div className="frameworks">
              <h1>Frameworks/libraries</h1>
              <div className="Node" alt="Node" title="Node"></div>
              <div className="React" alt="React" title="React"></div>
              <div className="Express" alt="Express" title="Express"></div>
              <div className="Websockets" alt="Websockets" title="Websockets"></div>
              <div className="Ajax" alt="Ajax" title="Ajax"></div>
              <div className="Jquery" alt="Jquery" title="Jquery"></div>
              <div className="Axios" alt="Axios" title="Axios"></div>
              <div className="Babel" alt="Babel" title="Babel"></div>
              <div className="EJS" alt="EJS" title="EJS"></div>
            </div>
            <div className="Testing">
              <h1>Testing</h1>
              <div className="Jest" alt="Jest" title="Jest"></div>
              <div className="Capybara" alt="Capybara" title="Capybara"></div>
              <div className="Cypress" alt="Cypress" title="Cypress"></div>
              <div className="Mocha" alt="Mocha" title="Mocha"></div>
              <div className="Chai" alt="Chai" title="Chai"></div>
            </div>
          </div>
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
              <a href="https://www.linkedin.com/in/lucaskitteridge/" target="_blank">
                <FaLinkedin className="Fa" size="2em" />
              </a>
              <p className="linkname">linkedin</p>
            </div>
            <div>
              <a href="https://github.com/Lucaskitteridge" target="_blank">
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
