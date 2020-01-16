import React from 'react'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      private: 0,
      public: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange (key, event) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleFormSubmit(this.state)
  }

  render () {
    return (
  <div>
    <Head>
      <title>Bootstrap</title>
      <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
              crossOrigin="anonymous"
        />
    </Head>

    <ReactBootstrap.Form onSubmit={this.handleSubmit}> 
      <ReactBootstrap.Form.Group controlId="formBasicEventName">
        <ReactBootstrap.Form.Label>Event name</ReactBootstrap.Form.Label>
        <ReactBootstrap.Form.Control
          type="text"
          value={this.state.name}
          onChange={this.handleChange.bind(this, 'name')} 
          placeholder="Enter event name" />
    </ReactBootstrap.Form.Group>

    <fieldset>
    <ReactBootstrap.Form.Group>
      <ReactBootstrap.Form.Label as="legend">
        Choose your event type
      </ReactBootstrap.Form.Label>
      <ReactBootstrap.Col sm={10}>
        <ReactBootstrap.Form.Check
          type="radio"
          value={this.state.private} 
          onChange={this.handleChange.bind(this, 'private')}
          inline label="private event"
          name="formInlineRadios"
          id="formInlineRadios1"
        />
        <ReactBootstrap.Form.Check
          type="radio"
          value={this.state.public} 
          onChange={this.handleChange.bind(this, 'public')}
          inline label="public event"
          name="formInlineRadios"
          id="formInlineRadios2"
        />
      </ReactBootstrap.Col>
      <ReactBootstrap.Button
        type='submit' 
        value='Submit' 
        variant="outline-info">Submit</ReactBootstrap.Button>
    </ReactBootstrap.Form.Group>
  </fieldset>
  </ReactBootstrap.Form>      
  </div>
    )
  }
}
