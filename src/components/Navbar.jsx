import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../img/netflix.png";
import avatar from "../img/avatar_logo.jpeg";

function  navbar(){
  return (
    <Navbar className="py-0 navbar" collapseOnSelect expand="lg" bg="black" variant="black" >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo}width="120" 
          alt="logo"
          className="d-inline-block align-top"
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link className='text-white' href="#">Home</Nav.Link>
            <Nav.Link className='text-white'  href="#">Tv Shows</Nav.Link>
            <Nav.Link className='text-white' href="#">Movies</Nav.Link>
            <Nav.Link className='text-white' href="#">Recently Added</Nav.Link>
            <Nav.Link className='text-white' href="#">My List</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Account" id="collapsible-nav-dropdown">
            <div className='bg-black text-white'>
            <NavDropdown.Item href="#"><img src={avatar}width="120"/>
            </NavDropdown.Item>
              <li><a className='ancora' href="#action/3.1">Action</a></li>
              <li><a  className='ancora'  href="#action/3.2">Action</a></li>
              <li><a  className='ancora'  href="#action/3.3">Action</a></li>
              <NavDropdown.Divider />
    
            </div>
            </NavDropdown>        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;