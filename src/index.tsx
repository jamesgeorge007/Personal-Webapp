import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <NavBar />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
