import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Router from 'next/router';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SignInPage extends Component {
  render()  {
    return (
        <div className = "col-md-6">
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
                  <Button type="submit" className="btn btn-primary btn-block" onClick={() => Router.push('/home')}>Sign In</Button>
                    <p className="forgot-password text-center">
                        Don't have an account yet? <Link href="signUp">Sign up</Link>
                    </p>           
                </Form>
              </Container>
        </div>
    );
  }
}