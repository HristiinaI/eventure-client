import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import Router from 'next/router';

import { Input } from 'reactstrap';
 
export default class Home extends Component {
  state = {
      item: '',
      statusCode: '',  
  };
  
  onSearch = user => {
    this.setState({item: user.target.value});
  }

  handleSubmit = user => {
    user.preventDefault();
    
    const item = this.state.item;
    
    axios.get('http://localhost:8000/users/' + item)
    .then(res => {
      this.setState({ item: res.data.email });
    })
    .catch(function (error) {
      if(error.response) {
        console.log(error);
      }
    });
  
    localStorage.setItem('email_avatar', JSON.stringify(this.state.item));
    Router.push('/userAvatar');
    
  };

  render()  {
    return (
     <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/addOrganization">+Add organization</Nav.Link>
            <Nav.Link href="/profile">My profile</Nav.Link>
            <Nav.Link href="/myOrganization">Organizations</Nav.Link>
          </Nav>
          <Form onSubmit = {this.handleSubmit} inline>
            <Input value = {this.state.item} onChange = {this.onSearch} 
            type="text" placeholder="Search" className="mr-sm-2" />
            <Button  type = "submit" variant="outline-primary">Search</Button>
          </Form>
      </Navbar>
      <br/>
     </div>
    );
  }
}