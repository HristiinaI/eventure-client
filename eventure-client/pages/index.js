import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Button } from 'react-bootstrap';

export default class App extends Component {
  render()  {
    return (
      <div>
        <Navbar bg="light" variant="light">
        <Button href = "/users/signIn" type = "submit" variant="outline-primary">Sign in</Button>
        <Button href = "/users/signUp" type = "submit" variant="outline-primary">Sign Up</Button>
        </Navbar>
        <br/>
        
      </div>
    );
  }
}