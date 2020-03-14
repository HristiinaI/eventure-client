import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Router from 'next/router';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Formik } from 'formik';

export default class SignInPage extends Component {
  state = {
    id: '',
    email: '',
    password: '',
    role: '',
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

    if(email.includes("@")) {
      axios.get('http://localhost:8080/users?param=' + email)
      .then(res => {
        this.setState({ role: res.data.role });
        this.setState({ id: res.data._id });
        if(email === res.data.email) {
          if(bcrypt.compare(res.data.password, password)) {
            localStorage.setItem('id', JSON.stringify(this.state.id));
            localStorage.setItem('email', JSON.stringify(this.state.email));
            localStorage.setItem('role', JSON.stringify(this.state.role));
            Router.push('/home');
          } 
        } 
      });
    } else {
      const name = this.state.email;
      axios.get('http://localhost:8080/organizations?name=' + name)
      .then(res => {
        this.setState({ role: res.data.role });
        this.setState({ id: res.data._id });
        if(name === res.data.name) {
          if(bcrypt.compare(res.data.password, password)) {
            localStorage.setItem('id', JSON.stringify(this.state.id));
            localStorage.setItem('role', JSON.stringify(this.state.role));
            Router.push('/home');
          } 
        } 
      });
    }
  }

  render()  {
    return (
      <Formik
        onSubmit = {async data => {
          console.log(data);
        }}
        initialValues = {{
          email: this.state.email,
          password: this.state.password,
        }}>

        {({ handleSubmit }) => (
          <div className = "col-md-12" align = "center">
          <br/>
          <div className = "col-md-6">
            <Container className = "App">
                  <h2>Sign In</h2>
                  <Form className = "form" onSubmit = {this.handleSubmit}>
                        <FormGroup>
                          <Label>Email or Organization name</Label>
                          <Input type="text" className = "form-control" placeholder="Email or Organization name" value = {this.state.email} 
                    onChange = {this.onEmailChanged}/>
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input type="password" className = "form-control" placeholder="Password" value = {this.state.password} 
                    onChange = {this.onPasswordChanged}/>
                        </FormGroup>
                    <Button type="submit" className="btn btn-primary btn-block">Sign In</Button>
                      <p className="forgot-password text-center">
                          Don't have an account yet? <Link href="signUp">Sign up</Link>
                      </p>           
                  </Form>
                </Container>
          </div>
          </div>
        )}

      </Formik>
    );
  }
}
