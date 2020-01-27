import React, {Component} from 'react';
// import fetch from 'isomorphic-unfetch';
// import Form from '../components/form.js';
import axios from "axios";
// import { Formik, Form, Field} from "formik";


export default class Home extends React.Component {
  state = {
    name: '',
  }
  handleChange = event =>{
    this.setState({name: event.target.value});
  }
  
  handleSubmit = event =>{
    event.preventDefault();

    name = this.state.name;

    console.log(name);

    axios.post('http://localhost:8080/events', { name })
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
          Event Name:
          <input type="text" name="name" value = {this.state.name} onChange={this.handleChange} />
        </label>
        <button type="submit" value="Submit"></button>
      </form>
    </div>
    );
  }
}