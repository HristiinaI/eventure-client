import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Nav, 
  NavItem, 
  NavLink
} from "reactstrap";

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
    const em = localStorage.getItem('email').substring(1, localStorage.getItem('email').length-1);

    axios.get('http://localhost:8000/users/' + em)
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

    axios.put('http://localhost:8000/users/' + id, { email, firstName, lastName, 
    type, country, education, workplace, about });
  }

  render() {
    return (
        <div className="content">
        <Nav>
        <NavItem> 
            <NavLink href = "/addOrganization">+ Add organization</NavLink>    
        </NavItem> 
        <NavItem> 
            <NavLink href = "/home">Home</NavLink>    
        </NavItem>
        <NavItem> 
            <NavLink href = "/myOrganization">My organization</NavLink>    
        </NavItem>
      </Nav>
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">My profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Organization</label>
                          <Input
                            defaultValue="None"
                            disabled
                            placeholder="Organization"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input defaultValue={this.state.email} placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue={this.state.firstName}
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue={this.state.lastName}
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Type</label>
                          <Input
                            defaultValue={this.state.type}
                            placeholder="Type"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={this.state.country}
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Education</label>
                          <Input
                            defaultValue={this.state.education}
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
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div >
                      <img src = "https://ezadtech.com/wp-content/uploads/2019/03/chilled-cool-whatsapp-dp.jpg" width="256" height="256"/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
    );
  }
}