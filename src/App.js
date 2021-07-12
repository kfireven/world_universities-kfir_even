import React from 'react';
import logo from './img/logo.png';
import { Navbar } from 'react-bootstrap';
import './App.scss';
import { useSelector } from "react-redux";

function App(props) {

  const userName = useSelector(state => state.login.name);

  return (
    <div className="App">
      <Navbar className="Navbar">
        <Navbar.Brand>
          <img
            src={logo}
            width="85px"
            height="30px"
          />
        </Navbar.Brand>
        <div>
          {userName != '' ? 'Welcome ' + userName : ''}
        </div>
      </Navbar>
      { props.children }
    </div>
  );
}

export default App;
