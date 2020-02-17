import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Home extends Component {
  render()  {
    return (
      <Nav> 
        <NavItem> 
            <NavLink href = "/profile">My profile</NavLink>    
        </NavItem>
        <NavItem> 
            <NavLink href = "/addOrganization">Add organization</NavLink>    
        </NavItem>
      </Nav>
    );
  }
}