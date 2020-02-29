import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';

export default class App extends Component {
  render()  {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/signIn">Sign In</Navbar.Brand>
          <Navbar.Brand href="/signUp">Sign Up</Navbar.Brand>
        </Navbar>
        <br/>
      </div>
    );
  }
}