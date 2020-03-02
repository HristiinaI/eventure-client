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

        const password = this.setState.newPass;
        const confirmPass = this.setState.confirmPass;
        const rounds = 10;
        if(password == confirmPass) {
            if(JSON.parse(localStorage.getItem('role')) == "User") { 
                const email = JSON.parse(localStorage.getItem('email'));
                axios.get('http://localhost:8080/users/' + email)
                .then(res => {
                    this.setState({id: res.data._id});
                });
                let pass = bcrypt.hash(password, rounds);
                axios.put('http://localhost:8080/users/' + this.state.id, {pass});
            } else {
                const name = JSON.parse(localStorage.getItem('orgName'));
                axios.get('http://localhost:8080/users/' + name)
                .then(res => {
                    this.setState({ id: res.data._id });
                });
                axios.put('http://localhost:8080/users/' + this.state.id, {password});
            }
        }
    }

    render() {
        return(
            <div className = "col-md-12" align = "center">
        <br/>
        <div className = "col-md-6">
          <Container className = "App">
                <h2>Change password</h2>
                <Form className = "form" onSubmit = {this.handleSubmit}>
                      <FormGroup>
                        <Label>New password</Label>
                        <Input type="text" className = "form-control" placeholder="New password" value = {this.state.newPass} 
                  onChange = {this.onPasswordChange}/>
                      </FormGroup>
                      <FormGroup>
                        <Label>Confirm password</Label>
                        <Input type="text" className = "form-control" placeholder="Confirm password" value = {this.state.confirmPass} 
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