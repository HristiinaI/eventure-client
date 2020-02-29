import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Container,  FormGroup, Label, Input } from 'reactstrap';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

import Home from './home';

export default class AddOrganization extends Component {
    state = {
        name: '',
        members: '',
        password: '',
        about: '',
    };
    
    onMembersChanged = organization =>{
        this.setState({members: organization.target.value});
    }

    onNameChanged = organization =>{
        this.setState({name: organization.target.value});
    }

    onPasswordChanged = organization =>{
        this.setState({password: organization.target.value});
    }
      
    onAboutChanged = organization =>{
        this.setState({about: organization.target.value});
    }

    handleSubmit = organization => {
        organization.preventDefault();
        
        const name = this.state.name;
        const members = this.state.members.toString().split(', ');
        const password = this.state.password;
        const about = this.state.about;

        axios.post('http://localhost:8000/organizations', { name, members, password, about })
            .then(res => {
                localStorage.setItem('organizations', JSON.stringify(name));
            }      
        );
    };

    render() {
        return(
            <div align = "center">
                <Home />        
              <div className = "col-md-6" >           
                  <Container className = "App">
                  <h2>Add organization</h2>
                  <Form className = "form" onSubmit = {this.handleSubmit}>
                        <FormGroup>
                          <Label>Members</Label>
                          <Input type="text" className = "form-control" placeholder="Members" value = {this.state.members} 
                      onChange = {this.onMembersChanged}/>
                        </FormGroup>
                        <FormGroup>
                          <Label>Name</Label>
                          <Input type="text" className = "form-control" placeholder="Name" value = {this.state.name} 
                      onChange = {this.onNameChanged}/>
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input type="password" className = "form-control" placeholder="Password" value = {this.state.password} 
                      onChange = {this.onPasswordChanged}/>
                        </FormGroup>
                        <FormGroup>
                          <Label>About</Label>
                          <Input type="textarea" className = "form-control" placeholder="About the organization" value = {this.state.about} 
                      onChange = {this.onAboutChanged}/>
                        </FormGroup>
                    <Button type="submit" className="btn btn-primary btn-block">Add</Button>          
                  </Form>
                </Container> 
              </div>
            </div>
        );
    }
}