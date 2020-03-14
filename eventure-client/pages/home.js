import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Form, NavDropdown, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import Router from 'next/router';

import { Input } from 'reactstrap';
 
export default class Home extends Component {
  state = {
    //id: '',  
    item: '',
    role: '',
    isReqDone: '',
    findOrg: false,
    findUser: false,
    hasUser: false,
    hasOrg: false,
  };

  onSearch = user => {
    this.setState({item: user.target.value});
  }

  handleClick = user => {
    user.preventDefault();
    if(JSON.parse(localStorage.getItem('role')) == "Organization") {
      Router.push('/organizations/myOrganization');
    } else {
      Router.push('/users/profile');
    }
  }

  handleSubmit = user => {
    user.preventDefault();
    const item = this.state.item;
    if(item) {
      if(this.state.findOrg == true) {
        axios.get('http://localhost:8080/organizations?name=' + item)
            .then(res => {
              //this.setState({ id: res.data._id });
              this.setState({ role: "Organization" });
              this.setState({ hasOrg: true });
              localStorage.setItem('avatar', JSON.stringify(res.data.name));
              Router.push('/organizations/orgAvatar');
              Router.reload('/organizations/orgAvatar');
            });
      } else if(this.state.findUser == true) {
          axios.get('http://localhost:8080/users?param=' + item)
            .then(res => {
              //this.setState({ id: res.data._id });
              this.setState({ role: "User" });
              localStorage.setItem('avatar', JSON.stringify(res.data.email));
              this.setState({ hasUser: true });
              Router.push('/users/userAvatar');
              Router.reload('/users/userAvatar');
          });  
      } 
      //localStorage.setItem('avatar', JSON.stringify(this.state.id)); 
    }
    this.setState({ findUser: false});
    this.setState({ findOrg: false});
    this.setState({ hasUser: false});
    this.setState({ hasOrg: false});
  };

  hanleLogOut = user => {
    localStorage.clear();
    Router.push('/');
  }
    
  deleteProfile() {
    const id = JSON.parse(localStorage.getItem('id'));
    if(JSON.parse(localStorage.getItem('role')) == "Organization") {
      axios.delete('http://localhost:8080/organizations/' + id);
    } else {
      axios.delete('http://localhost:8080/users/' + id);
    }  
    localStorage.clear();
    Router.push('/');
  }

  findUser = user => {
    const tmp = true;
    this.setState({ findUser: tmp });
  }

  findOrg = user => {
    const tmp = true;
    this.setState({ findOrg: tmp });
  }

  render() {
      return (
        <div>
         <Navbar bg="light" variant="light">
           <Navbar.Brand href="/home">Home</Navbar.Brand>
             <Nav className="mr-auto">
             <Nav.Link href = "/events/createEvent">Create event</Nav.Link>
             <Nav.Link href = "/events/allEvents">All events</Nav.Link>
               <Nav.Link href="/organizations/addOrganization">Create organization</Nav.Link>            
               <NavDropdown title="Settings" id="collasible-nav-dropdown">
                 <NavDropdown.Item onClick={this.handleClick} >My profile</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="/users/changePassword">Change password</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item onClick = {this.deleteProfile} href="#">Delete profile</NavDropdown.Item>
               </NavDropdown>
             </Nav>
             
             <NavDropdown title="Find" id="collasible-nav-dropdown">
                  <NavDropdown.Item  onClick={this.findOrg}>Organization</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.findUser} >User</NavDropdown.Item>
              </NavDropdown>
             
             <Form onSubmit = {this.handleSubmit} inline>
               <Input value = {this.state.item} onChange = {this.onSearch} 
               type="text" placeholder="Search" className="mr-sm-2" />
               <Button  type = "submit" variant="outline-primary">Search</Button>
             </Form>
             <Form inline onSubmit = {this.hanleLogOut}>
               <Button  type = "log out" variant="outline-primary">Log Out</Button>
             </Form>
         </Navbar>
         <br/>
        </div>
       );
    } 
}