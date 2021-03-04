import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="Homebeforescrolling">
      <Navbar className="Navbar" fixed="top">
        <div>
          <Navbar.Brand href="#home">Lucas Kitteridge</Navbar.Brand>
        </div>
        <div>
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="welcomepage">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </div>
      </div>
    </div>
  );
}

export default App;
