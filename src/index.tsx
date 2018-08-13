import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wrapper from './components/Wrapper';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
