import * as React from 'react';
import { Nav, Navbar, NavItem  } from 'react-bootstrap';

class NavBar extends React.Component<{}, any>{
      public render() {
        return (
          <div>
            <Navbar style={{borderRadius: 0, backgroundColor: '#000', marginBottom: -.5}} inverse={true} collapseOnSelect={true}>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand" style={{color: '#fff', fontFamily: 'forte'}}>JG</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight={true}>
      <NavItem eventKey={1} href="#">
        Portfolio
      </NavItem>
      <NavItem eventKey={2} href="#">
        Get In Touch
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </div>
        );
      }
}

export default NavBar;