import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Container,  FormGroup, Label, Input } from 'reactstrap';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';

export default class AddOrganization extends Component {
    state = {
        name: '',
        members: '',
        password: '',
        organizations: '',
        creator: '',
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

        console.log('members: ' + members);

        axios.post('http://localhost:8080/organizations', { members, name, password });
        
    };

    render() {
        return(
            <div align = "center">      
              <br/>
              <br/>
              <div className = "col-md-6" >           
                  <Container className = "App">
                  <h2>Create organization</h2>
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
                    <p className="forgot-password text-center">
                      Already registered? <Link href="/users/signIn">Sign in</Link>
                  </p> 
                  <p className="forgot-password text-center">
                  Or create an account <Link href="/users/signUp"> here </Link>
                    </p>
                  </Form>
                </Container> 
              </div>
            </div>
        );
    }
}
