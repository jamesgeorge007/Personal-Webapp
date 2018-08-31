import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wrapper from './components/Wrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
