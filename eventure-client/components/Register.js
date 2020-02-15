import React, {Component} from 'react';
import axios from "axios";
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/register.css';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    type: '',
  }
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

  handleSubmit = user =>{
    user.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const type = this.state.type;

    console.log(email);

    axios.post('http://localhost:8000/users', { email, password, firstName, lastName, type })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };
  
  render() {
    return(
          <Container>
            <h2>Sign Up</h2>
            <Form className = "form" onSubmit = {this.handleSubmit}>
              <Col>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email" value = {this.state.email} 
                onChange = {this.onEmailChanged}/>
                  </FormGroup>
              </Col>
              <Col>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" value = {this.state.password} 
                onChange = {this.onPasswordChanged}/>
                  </FormGroup>
              </Col>
              <Col>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input type="firstName" placeholder="First Name" value = {this.state.firstName} 
                onChange = {this.onFirstNameChanged}/>
                  </FormGroup>
              </Col>
              <Col>
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="lastName" placeholder="Last Name" value = {this.state.lastName} 
                onChange = {this.onLastNameChanged}/>
                  </FormGroup>
              </Col>
              <Button  className = "btn-rg btn-dark">Sign Up</Button>            
            </Form>
          </Container> 
    );
  } 
      /*<Form className = "register-form" onSubmit = {this.handleSubmit}> 
            <h1>
                <span className="font-weight-bold">Eventure</span>    
            </h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Input  type="email" placeholder="Email" value = {this.state.email} 
                onChange = {this.onEmailChanged}/>
            </FormGroup>
            <FormGroup>
                <Input type="password" placeholder="Password" value = {this.state.password} 
                onChange = {this.onPasswordChanged}/>
            </FormGroup>
            <FormGroup>
                <Input type="firstName" placeholder="First Name" value = {this.state.firstName} 
                onChange = {this.onFirstNameChanged}/>
            </FormGroup>
            <FormGroup>
                <Input type="lastName" placeholder="Last Name" value = {this.state.lastName} 
                onChange = {this.onLastNameChanged}/>
            </FormGroup>
            <Button  className = "btn-rg btn-dark"> Register</Button>          
        </Form>
    );
  }*/
    /*return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value = {this.state.email} 
            onChange={this.onEmailChanged} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value = {this.state.password} 
            onChange={this.onPasswordChanged} />
        </label>
        <label>
          First Name:
          <input type="text" name="firstName" value = {this.state.firstName} 
            onChange={this.onFirstNameChanged} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value = {this.state.lastName} 
            onChange={this.onLastNameChanged} />
        </label>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="organizer" 
              checked={this.state.type === 'organizer'}
              onChange={this.onTypeChanged} />
              Organizer
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="sponsor" 
              checked={this.state.type === 'sponsor'} 
              onChange={this.onTypeChanged}/>
              Sponsor
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="volunteer" 
              checked={this.state.type === 'volunteer'} 
              onChange={this.onTypeChanged}/>
              Volunteer
          </label>
        </div>
        <button type="submit" value="Submit"></button>
      </form>
    </div>
    );*/
  
}