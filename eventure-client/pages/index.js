import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class App extends Component {
  render()  {
    return (
      <Nav> 
        <NavItem> 
            <NavLink href = "/index">Home</NavLink>    
        </NavItem>
        <NavItem> 
            <NavLink href = "/signIn">Sign In</NavLink>    
        </NavItem>
        <NavItem> 
            <NavLink href = "/signUp">Sign Up</NavLink>    
        </NavItem>
      </Nav>
    );
  }
}