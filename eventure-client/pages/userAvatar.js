import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import {
  FormGroup,
  Input,
} from "reactstrap";

import { Nav, Navbar} from 'react-bootstrap';
import Home from './home';

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
    const item = JSON.parse(localStorage.getItem('email_avatar'));
    
    axios.get('http://localhost:8000/users/' + item)
    .then(res => {
        console.log(res.data.email);
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

  render() {
    return (
        <div className="col-md-12" align = "center">
            <Home/>
            <div align = "center">
                <img src = "https://ezadtech.com/wp-content/uploads/2019/03/chilled-cool-whatsapp-dp.jpg" width="200" height="200"/>
            </div>
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
        </div>
        </div>
    
    );
  }
}