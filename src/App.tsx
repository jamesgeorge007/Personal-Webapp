import * as React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <NavBar />
      <Home />
      </div>
    );
  }
}

export default App;
