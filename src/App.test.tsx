import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './components/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
