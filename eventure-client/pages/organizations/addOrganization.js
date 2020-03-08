import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Container,  FormGroup, Label, Input } from 'reactstrap';
import { Form, Button } from 'react-bootstrap';

import Home from '../home';

export default class AddOrganization extends Component {
    state = {
        name: '',
        members: '',
        password: '',
        organizations: '',
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

    handleSubmit = organization => {
        organization.preventDefault();
        
        const name = this.state.name;
        const members = this.state.members.toString().split(', ');
        const password = this.state.password;

        axios.post('http://localhost:8080/organizations', { members, name, password });

        for(let i = 0; i < members.length; i++) {
            axios.get('http://localhost:8080/users?param=' + members[i], {})
            .then(res => {
                const temp = res.data.organizations;
                temp.push(name);
                this.setState({ organizations: temp});
                this.setState({ id: res.data._id });       
                const organizations = this.state.organizations;
                axios.put('http://localhost:8080/users/' + this.state.id, {organizations});
            });
        }
        
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
                    <Button type="submit" className="btn btn-primary btn-block">Add</Button>          
                  </Form>
                </Container> 
              </div>
            </div>
        );
    }
}