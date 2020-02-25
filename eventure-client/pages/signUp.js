import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Link from 'next/link';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    type: '',
    country: '',
    education: '',
    workplace: '',
    about: '',
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

  onCountryChanged = user =>{
    this.setState({country: user.target.value});
  }
  
  onEducationChanged = user =>{
    this.setState({education: user.target.value});
  }

  onWorkplaceChanged = user =>{
    this.setState({workplace: user.target.value});
  }

  onAboutChanged = user =>{
    this.setState({about: user.target.value});
  }

  handleSubmit = user => {
    user.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const type = this.state.type;
    const country = this.state.country;
    const education = this.state.education;
    const workplace = this.state.workplace;
    const about = this.state.about;

    console.log(email);

    axios.post('http://localhost:8000/users', { email, password, firstName, lastName, 
      type, country, education, workplace, about })
      .then(res => {
      console.log(res);
      console.log(res.data);
    });
  };
  
  render() {
    return(
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
                  <div className="radio">
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
                  <div className="radio">
                    <Label>
                      <Input 
                        type="radio" 
                        value="Sponsor" 
                        checked={this.state.type === 'sponsor'}
                        onChange={this.onTypeChanged} />
                        Sponsor
                    </Label>
                  </div>
                </Col>
                <Col>
                  <div className="radio">
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
                <FormGroup>
                      <Label>Country</Label>
                      <Input type="text" className = "form-control" placeholder="Country" value = {this.state.country} 
                  onChange = {this.onCountryChanged}/>
                    </FormGroup>
                    <FormGroup>
                      <Label>Education</Label>
                      <Input type="text" className = "form-control" placeholder="Education" value = {this.state.education} 
                  onChange = {this.onEducationChanged}/>
                    </FormGroup>
                    <FormGroup>
                      <Label>Workplace</Label>
                      <Input type="text" className = "form-control" placeholder="Workplace" value = {this.state.workplace} 
                  onChange = {this.onWorkplaceChanged}/>
                    </FormGroup>
                    <FormGroup>
                      <Label>About</Label>
                      <Input type="textarea" className = "form-control" placeholder="About you" value = {this.state.about} 
                  onChange = {this.onAboutChanged}/>
                    </FormGroup>
                <Button type="submit" className="btn btn-primary btn-block">Sign Up</Button>
                  <p className="forgot-password text-center">
                      Already registered? <Link href="/signIn">Sign in</Link>
                  </p>           
              </Form>
            </Container> 
          </div>
    );
  } 
}