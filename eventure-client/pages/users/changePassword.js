import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Button, FormGroup } from 'react-bootstrap';
import { Label, Input } from 'reactstrap';
import axios from 'axios';
import bcrypt from 'bcryptjs';

export default class ChangePassword extends Component {
    state = {
        id: '',
        oldPass: '',
        newPass: '',
        confirmPass: '',
    }

    onPasswordChange = user => {
        this.setState({newPass: user.target.value});
    }

    onConfirmChange = user => {
        this.setState({confirmPass: user.target.value});
    }

    handleSubmit = user => {
        user.preventDefault();

        const password = this.state.newPass;
        const confirmPass = this.state.confirmPass;
        if(password === confirmPass) {
            const id = JSON.parse(localStorage.getItem('id'));
            if(JSON.parse(localStorage.getItem('role')) == "User") { 
                axios.put('http://localhost:8080/users/' + id, {password});
            } else {
                axios.put('http://localhost:8080/organizations/' + id, {password});
            }
        }
    }

    render() {
        return(
            <div className = "col-md-12" align = "center">
        <br/>
        <br/>
        <div className = "col-md-6">
          <Container className = "App">
                <h2>Change password</h2>
                <Form className = "form" onSubmit = {this.handleSubmit}>
                      <FormGroup>
                        <Label>New password</Label>
                        <Input type="password" className = "form-control" placeholder="New password" value = {this.state.newPass} 
                  onChange = {this.onPasswordChange}/>
                      </FormGroup>
                      <FormGroup>
                        <Label>Confirm password</Label>
                        <Input type="password" className = "form-control" placeholder="Confirm password" value = {this.state.confirmPass} 
                  onChange = {this.onConfirmChange}/>
                      </FormGroup>
                  <Button type="submit" className="btn btn-primary btn-block">Change password</Button>           
                </Form>
              </Container>
        </div>
        </div>
        );
    }
}