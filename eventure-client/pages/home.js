import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Form, NavDropdown, Button } from 'react-bootstrap';
import axios from 'axios';
import Router from 'next/router';

import { Input } from 'reactstrap';
 
export default class Home extends Component {
  state = {
      item: '',
      role: '', 
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
        if(item.includes("@")) {
          axios.get('http://localhost:8080/users/' + item)
          .then(res => {
            this.setState({ item: res.data.email });
            this.setState({ role: res.data.role });
          })
          .catch(function (error) {
            if(error.response) {
              console.log(error);
            }
          });
        }  else {
            axios.get('http://localhost:8080/organizations/' + item)
            .then(res => {
              this.setState({ item: res.data.name });
            })
            .catch(function (error) {
              if(error.response) {
                console.log(error);
              }
            });
    }
  
      localStorage.setItem('avatar', JSON.stringify(this.state.item));
      
      if(item.includes("@")) {
        Router.push('/users/userAvatar');
        Router.reload('/users/userAvatar');
      } else if(!item.includes("@")) {
        Router.push('/organizations/orgAvatar');
        Router.reload('/organizations/orgAvatar');
      } 
    }
  };

  hanleLogOut = user => {
    localStorage.clear();
    Router.push('/');
  }
    

  render() {
      return (
        <div>
         <Navbar bg="light" variant="light">
           <Navbar.Brand href="/home">Home</Navbar.Brand>
             <Nav className="mr-auto">
             <Nav.Link href = "/createEvent">Create event</Nav.Link>
               <Nav.Link href="/organizations/addOrganization">Create organization</Nav.Link>            
               <NavDropdown title="Settings" id="collasible-nav-dropdown">
                 <NavDropdown.Item onClick={this.handleClick} >My profile</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="/users/changePassword">Change password</NavDropdown.Item>
               </NavDropdown>
             </Nav>
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