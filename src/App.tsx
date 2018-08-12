import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <NavBar />
        <h1>James George</h1>
      </div>
    );
  }
}

export default App;
