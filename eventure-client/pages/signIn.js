import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Router from 'next/router';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class SignInPage extends Component {
  state = {
    email: '',
    password: '',
  };
  
  onEmailChanged = user => {
    this.setState({ email: user.target.value })
  }

  onPasswordChanged = user => {
    this.setState({ password: user.target.value })
  }

  handleSubmit = user => {
    user.preventDefault();
    
    const email = this.state.email;
    const password = this.state.password;
    
    axios.get('http://localhost:8000/users/' + email)
    .then(res => {
      if(email === res.data.email) {
        if(password === res.data.password) {
          localStorage.setItem('email', JSON.stringify(email));
          localStorage.setItem('password', JSON.stringify(password));
          Router.push('/home');
        } 
      } 
    });
  }

  render()  {
    return (
        <div className = "col-md-6">
          <Container className = "App">
                <h2>Sign In</h2>
                <Form className = "form" onSubmit = {this.handleSubmit}>
                      <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" className = "form-control" placeholder="Email" value = {this.state.email} 
                  onChange = {this.onEmailChanged}/>
                      </FormGroup>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input type="text" className = "form-control" placeholder="Password" value = {this.state.password} 
                  onChange = {this.onPasswordChanged}/>
                      </FormGroup>
                  <Button type="submit" className="btn btn-primary btn-block">Sign In</Button>
                    <p className="forgot-password text-center">
                        Don't have an account yet? <Link href="signUp">Sign up</Link>
                    </p>           
                </Form>
              </Container>
        </div>
    );
  }
}