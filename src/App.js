import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container pb-5">
          <Home/>
        </div>
      </div>
    )
  }
}

export default App;
