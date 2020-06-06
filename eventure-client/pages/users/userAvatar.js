import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import {
  FormGroup,
  Input,
  Button
} from "reactstrap";

import Home from '../home';
import Router from "next/router";

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
      chatId: '',
        isCreated: false,
    };

    loadInformation = () => {
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

  componentDidMount() {
    this.loadInformation();
  }

  sendMessage = () => {
        const email = JSON.parse(localStorage.getItem('email'));
        const name = JSON.parse(localStorage.getItem('orgName'));
        const id = JSON.parse(localStorage.getItem('id'));

      let members = [];
        if(JSON.parse(localStorage.getItem('role')) === 'User') {
            axios.get('http://localhost:8080/users/' + id)
                .then(res => {
                   for(let i = 0; i < res.data.chats.length; i++) {
                       axios.get('http://localhost:8080/chats/' + res.data.chats[i])
                           .then(result => {
                               for(let j = 0; j < result.data.members.length; j++) {
                                   console.log('member = ' + result.data.members[i]);
                                   console.log('person = ' + this.state.email);
                                   if(result.data.members[j] === this.state.email) {
                                       this.setState({isCreated: true});
                                   }
                               }
                           })
                   }
                });
            if(!this.state.isCreated) {
                members.push(this.state.email);
                members.push(email);
            }

        } else if(JSON.parse(localStorage.getItem('role')) === 'Organization') {
            axios.get('http://localhost:8080/organizations/' + id)
                .then(res => {
                    for(let i = 0; i < res.data.chats.length; i++) {
                        axios.get('http://localhost:8080/chats/' + res.data.chats[i])
                            .then(result => {
                                for(let j = 0; j < result.data.members.length; j++) {
                                    if(result.data.members[j] === this.state.email) {
                                        this.setState({isCreated: true});
                                    }
                                }
                            })
                    }
                });
            if(!this.state.isCreated) {
                members.push(this.state.email);
                members.push(name);
            }
        }
        console.log('chat members = ' + members);
        if(!this.state.isCreated) {
            axios.post('http://localhost:8080/chats', {members})
                .then(res => {
                    this.setState({chatId: res.data._id});
                });
        }

       //Router.push('/chat/allChats');
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
