import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Router from "next/router";

import {
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import Home from '../home';

export default class Avatar extends Component {
    state = { 
        name: '',
        members: '',
        about: '',
    };
  
  componentDidMount() {
    const item = JSON.parse(localStorage.getItem('avatar'));

    axios.get('http://localhost:8080/organizations?name=' + item)
    .then(res => {
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

  sendMessage = org => {
      const email = JSON.parse(localStorage.getItem('email'));
      const name = JSON.parse(localStorage.getItem('orgName'));

      let members = [];
      members.push(this.state.name);
      if(JSON.parse(localStorage.getItem('role')) === 'User') {
          members.push(email);
      } else if(JSON.parse(localStorage.getItem('role')) === 'Organization') {
          members.push(name);
      }
      console.log('chat members = ' + members);
      axios.post('http://localhost:8080/chats', {members})
          .then(res => {
              this.setState({chatId: res.data._id});
          });
      Router.push('/chat/allChats');

  }

  render() {
    return (
        <div className="col-md-12" align = "center">
            <Home />

            <br/>
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
            <FormGroup> 
                <Button className="btn-fill" color="primary" type="submit" onClick = {this.sendMessage}> Send message </Button>
            </FormGroup>   
        </div>
        </div>
    );
  }
}
