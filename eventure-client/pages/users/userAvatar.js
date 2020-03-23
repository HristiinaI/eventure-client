import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import {
  FormGroup,
  Input,
  Button
} from "reactstrap";

import Home from '../home';

export default class Avatar extends Component {
    state = { 
      email: '',
      firstName: '',
      lastName: '',
      type: '',
      country: '',
      education: '',
      workplace: '',
      about: '',
      statusCode: '',  
    };
  
  componentDidMount() {
    const item = JSON.parse(localStorage.getItem('avatar'));
    axios.get('http://localhost:8080/users?param=' + item)
    .then(res => {
        this.setState({ email: res.data.email });
        this.setState({ firstName: res.data.firstName });
        this.setState({ lastName: res.data.lastName });
        this.setState({ type: res.data.type });
        this.setState({ country: res.data.country });
        this.setState({ education: res.data.education });
        this.setState({ workplace: res.data.workplace });
        this.setState({ about: res.data.about });
    })
    .catch(function (error) {
        if(error.response) {
            console.log(error);    
        }
    })
  }

  sendMessage = user => {
      console.log('Hello!');
  }

  render() {
    return (
        <div className="col-md-12" align = "center">
            <Home/>
            <br/>
            <br/>
            <div className = "col-md-4"  >
            <FormGroup>
                <label htmlFor="exampleInputEmail1">
                    Email address
                    </label>
                    <Input disabled defaultValue={this.state.email} placeholder="Email" type="email" />
            </FormGroup>
            
            <FormGroup>
                <label>First Name</label>
                    <Input
                        disabled
                        defaultValue={this.state.firstName}
                        placeholder="First Name"
                        type="text"
                    />
            </FormGroup>
            
            <FormGroup>
                <label>Last Name</label>
                    <Input
                        disabled
                        defaultValue={this.state.lastName}
                        placeholder="Last Name"
                        type="text"
                    />
            </FormGroup>
            <FormGroup>
                <label>Type</label>
                    <Input
                        disabled
                        defaultValue={this.state.type}
                        placeholder="Type"
                        type="text"
                    />
            </FormGroup>
            <FormGroup>
                <label>Country</label>
                <Input
                    disabled
                    defaultValue={this.state.country}
                    placeholder="Country"
                    type="text"
                />
            </FormGroup>     
            <FormGroup>
                <label>Education</label>
                <Input
                    disabled
                    defaultValue={this.state.education}
                    placeholder="Education"
                    type="text"
                />
            </FormGroup>      
            <FormGroup>
                <label>Workplace</label>
                <Input
                    disabled
                    value = {this.state.workplace} 
                    onChange = {this.onWorkplaceChanged}
                    placeholder="Workplace"
                    type="text"
                />
            </FormGroup>      
            <FormGroup>
                <label>About Me</label>
                <Input
                    disabled
                    cols="80"
                    defaultValue={this.state.about}
                    placeholder="Say something about you here :)"
                    rows="4"
                    type="textarea"
                />
            </FormGroup>    
            <FormGroup> 
                <Button className="btn-fill" color="primary" type="submit" onClick = {this.sendMessage}> Send message </Button>
            </FormGroup> 
        </div>
        </div>
    
    );
  }
}