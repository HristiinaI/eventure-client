import React, { Component } from 'react';
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
} from "reactstrap";

import Home from '../home';

export default class MyOrganization extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: '',  
          members: '',
          name: '',
          about: '',
        };
    }

    componentDidMount() {
      const id = JSON.parse(localStorage.getItem('id'));  
      axios.get('http://localhost:8080/organizations/' + id)
        .then(res => {
          this.setState({ id: res.data._id });
          this.setState({ members: res.data.members });
          this.setState({ name: res.data.name });
          this.setState({ about: res.data.about });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    onMembersChanged = org => {
      this.setState({ members: org.target.value });
    }
    onNameChanged = org => {
      this.setState({ name: org.target.value });
    }
    onAboutChanged = org => {
      this.setState({ about: org.target.value });
    }

    handleSubmit = organization => {
        organization.preventDefault();

        const id = this.state.id;
        const members = this.state.members;
        const name = this.state.name;
        const about = this.state.about;
    
        axios.put('http://localhost:8080/organizations/' + id, { members, name, about });
    }

    render() {
        return (
            <div className="content">
              <Home />
              <Row>
                <Col md="8">
                  <Card>
                    <CardHeader>
                      <h5 className="title">{this.state.name}</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Members</label>
                              <Input
                                value={this.state.members}
                                onChange={this.onMembersChanged}
                                placeholder="Members"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Name</label>
                              <Input
                                value={this.state.name}
                                onChange={this.onNameChanged}
                                placeholder="Name"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="8">
                            <FormGroup>
                              <label>About Me</label>
                              <Input
                                cols="80"
                                value={this.state.about}
                                onChange={this.onAboutChanged}
                                placeholder="Say something about your organization here :)"
                                rows="8"
                                type="textarea"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button className="btn-fill" color="primary" type="submit" onClick={this.handleSubmit}>
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