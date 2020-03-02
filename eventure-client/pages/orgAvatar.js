import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import {
  FormGroup,
  Input,
} from "reactstrap";

import Home from './home';

export default class Avatar extends Component {
    state = { 
        name: '',
        members: '',
        about: '',
    };
  
  componentDidMount() {
    const item = JSON.parse(localStorage.getItem('avatar'));
    
    axios.get('http://localhost:8080/organizations/' + item)
    .then(res => {
        console.log(res.data.name);
      this.setState({ members: res.data.members });
      this.setState({ name: res.data.name });
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
            <Home />
            <div align = "center">
                <img src = "https://ezadtech.com/wp-content/uploads/2019/03/chilled-cool-whatsapp-dp.jpg" width="200" height="200"/>
            </div>
            <br/>
            <div className = "col-md-4"  >
            
            <FormGroup>
                <label htmlFor="exampleInputEmail1">
                    Members
                    </label>
                    <Input disabled defaultValue={this.state.members} placeholder="Email" type="email" />
            </FormGroup>
            
            <FormGroup>
                <label>Organization Name</label>
                    <Input
                        disabled
                        defaultValue={this.state.name}
                        placeholder="Organization name"
                        type="text"
                    />
            </FormGroup>      
            <FormGroup>
                <label>About Us</label>
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