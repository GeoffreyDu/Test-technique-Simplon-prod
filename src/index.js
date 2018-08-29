import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
