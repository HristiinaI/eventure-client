import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Input,
  Row,
  Col,
  Form,
  Button
} from "reactstrap";

import Home from '../home';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      type: '',
      country: '',
      education: '',
      workplace: '',
      about: '',
    };
  }
  
  componentDidMount() {
      const id = JSON.parse(localStorage.getItem('id'));

      console.log("ID0:" + id);
      axios.get('http://localhost:8080/users/' + id)
      .then(res => {
        this.setState({ id: res.data._id });
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
        console.log(error);
      })
      console.log("ID" + id);
  }

  onEmailChanged = user => {
    this.setState({ email: user.target.value });
  }

  onFirstNameChanged = user => {
    this.setState({ firstName: user.target.value });
  }
  onLastNameChanged = user => {
    this.setState({ lastName: user.target.value });
  }
  onTypeChanged = user => {
    this.setState({ type: user.target.value });
  }
  onCountryChanged = user => {
    this.setState({ country: user.target.value });
  }
  onEducationChanged = user => {
    this.setState({ education: user.target.value });
  }
  onWorkplaceChanged = user => {
    this.setState({ workplace: user.target.value });
  }
  onAboutChanged = user => {
    this.setState({ about: user.target.value });
  }

  handleSubmit = user => {
    user.preventDefault();

    const id = this.state.id;
    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const type = this.state.type;
    const country = this.state.country;
    const education = this.state.education;
    const workplace = this.state.workplace;
    const about = this.state.about;

    axios.put('http://localhost:8080/users/' + id, { email, firstName, lastName, 
    type, country, education, workplace, about });
  }

  render() {
    return (
        <div className="content">
          <Home />
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">{this.state.firstName} {this.state.lastName}</h5>
                </CardHeader>
                <CardBody>
                  <Form >
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue={this.state.firstName} onChange = {this.onFirstNameChanged}
                            placeholder="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue={this.state.lastName} onChange = {this.onLastNameChanged}
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            disabled
                            defaultValue={this.state.email} onChange = {this.onEmailChanged}
                            placeholder="Email"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Type</label>
                          <Input
                            defaultValue={this.state.type} onChange = {this.onTypeChanged}
                            placeholder="Type"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={this.state.country} onChange = {this.onCountryChanged}
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Education</label>
                          <Input
                            defaultValue={this.state.education} onChange = {this.onEducationChanged}
                            placeholder="Education"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Workplace</label>
                          <Input
                            value = {this.state.workplace}
                            onChange = {this.onWorkplaceChanged}
                            placeholder="Workplace"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue={this.state.about}
                            onChange = {this.onAboutChanged}
                            placeholder="Say something about you here :)"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit" onClick = {this.handleSubmit}>
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>
        </div>
    );
  }
}