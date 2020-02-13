import React, {Component} from 'react';
import axios from "axios";

export default class Home extends React.Component {
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
    return (
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
    );
  }
}