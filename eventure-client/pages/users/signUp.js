import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Link from 'next/link';
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'react-bootstrap';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    type: '',
  };

  onEmailChanged = user =>{
    this.setState({email: user.target.value});
  }

  onPasswordChanged = user =>{
    this.setState({password: user.target.value});

  }

  onFirstNameChanged = user =>{
    this.setState({firstName: user.target.value});

  }
  
  onLastNameChanged = user =>{
    this.setState({lastName: user.target.value});

  }

  onTypeChanged = user =>{
    this.setState({type: user.target.value});
  }

  handleSubmit = user => {
    user.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const type = this.state.type;

    axios.post('http://localhost:8080/users', { email, password, firstName, lastName, type });
  };
  
  render() {
    return(
        <div classname = "col-md-12" align = "center">
          <br/>
          <div className = "col-md-6">
              <Container className = "App">
              <h2>Sign Up</h2>
              <Form className = "form" onSubmit = {this.handleSubmit}>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input type="email" className = "form-control" placeholder="Email" value = {this.state.email} 
                  onChange = {this.onEmailChanged}/>
                    </FormGroup>
                    <FormGroup>
                      <Label>Password</Label>
                      <Input type="password" className = "form-control" placeholder="Password" value = {this.state.password} 
                  onChange = {this.onPasswordChanged}/>
                    </FormGroup>
                    <FormGroup>
                      <Label>First Name</Label>
                      <Input type="text" className = "form-control" placeholder="First Name" value = {this.state.firstName} 
                  onChange = {this.onFirstNameChanged}/>
                    </FormGroup>
                    <FormGroup>
                      <Label>Last Name</Label>
                      <Input type="text" className = "form-control" placeholder="Last Name" value = {this.state.lastName} 
                  onChange = {this.onLastNameChanged}/>
                    </FormGroup>
                <Col>
                  <div className="radio" align = "left">
                    <Label>
                      <Input 
                        type="radio" 
                        value="organizer" 
                        checked={this.state.type === 'organizer'}
                        onChange={this.onTypeChanged} />
                        Organizer
                    </Label>
                  </div>
                </Col>
                <Col>
                  <div className="radio" align = "left">
                    <Label>
                      <Input 
                        type="radio" 
                        value="sponsor" 
                        checked={this.state.type === 'sponsor'}
                        onChange={this.onTypeChanged} />
                        Sponsor
                    </Label>
                  </div>
                </Col>
                <Col>
                  <div className="radio" align = "left">
                    <Label>
                      <Input 
                        type="radio" 
                        value="volunteer" 
                        checked={this.state.type === 'volunteer'}
                        onChange={this.onTypeChanged} />
                        Volunteer
                    </Label>
                  </div>
                </Col>
                <Button type="submit" className="btn btn-primary btn-block">Sign Up</Button>
                  <p className="forgot-password text-center">
                      Already registered? <Link href="/users/signIn">Sign in</Link>
                  </p>
                  <p className="forgot-password text-center">
                  Or create an organization <Link href="/organizations/addOrganization"> here </Link> 
                  </p>            
              </Form>
            </Container> 
          </div>
          </div>
    );
  } 
}