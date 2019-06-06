import * as React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import '../assets/css/Navbar.css';
import Error from './Error';
import Home from './Home';
import Portfolio from './Portfolio';


class Wrapper extends React.Component<{}, any>{
      public render() {
        return (
          <div>
          <BrowserRouter>
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
              <Link to="/"><a tabIndex={0} className="navbar-brand">JG</a></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/portfolio"> <a tabIndex={0} style={{color: '#fff'}} className="nav-link">Portfolio</a></Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/portfolio' component={Portfolio}/>
              <Route path='*' component={Error}/>
            </Switch>
            </div>
            </BrowserRouter>
        </div>
        );
      }
}

export default Wrapper;
