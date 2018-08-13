import * as React from 'react';
import { Nav, Navbar, NavItem  } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Portfolio from './Portfolio';


class Wrapper extends React.Component<{}, any>{
      public render() {
        return (
          <div>
            <BrowserRouter>
            <div>
            <Navbar style={{borderRadius: 0, backgroundColor: '#000', marginBottom: -.5}} inverse={true} collapseOnSelect={true}>
    <Navbar.Header>
      <Navbar.Brand>
      <Link to="/" style={{outline: 'none'}}><a style={{color: '#fff', fontFamily: 'forte', textDecoration: 'none'}}>JG</a></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight={true}>
        <NavItem eventKey={1}>
          <Link to="/portfolio" style={{textDecoration: 'none', color: '#fff', outline: 'none'}}>Portfolio</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/contact" style={{textDecoration: 'none', color: '#fff', outline: 'none'}}>Get In Touch</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
          <Route path='*' component={Error}/>
    </Switch>
    </div>      
  </BrowserRouter>
          </div>
        );
      }
}

export default Wrapper;