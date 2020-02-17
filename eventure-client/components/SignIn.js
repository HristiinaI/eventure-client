import React, {Component} from 'react';
import axios from "axios";
import Link from 'next/link';
import Router from 'next/router';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SignIn extends Component {
  render() {
        return(
              <Container className = "App">
                <h2>Sign In</h2>
                <Form className = "form" onSubmit = {this.handleSubmit}>
                      <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" className = "form-control" placeholder="Email"/>
                      </FormGroup>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" className = "form-control" placeholder="Password"/>
                      </FormGroup>
                  <Button type="submit" className="btn btn-primary btn-block" onClick={() => Router.push('/profile')}>Sign In</Button>
                    <p className="forgot-password text-center">
                        Don't have an account yet? <Link href="signUp">Sign up</Link>
                    </p>           
                </Form>
              </Container> 
        );
      } 
}