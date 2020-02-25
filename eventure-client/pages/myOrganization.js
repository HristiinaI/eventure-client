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
  Nav, 
  NavItem, 
  NavLink
} from "reactstrap";

export default class MyOrganization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: '',
            name: '',
            about: '',
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/organizations')
        .then(res => {
          this.setState({ members: res.data[1].members });
          this.setState({ name: res.data[1].name });
          this.setState({ about: res.data[1].about });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    handleSubmit = organization => {
        organization.preventDefault();

        const members = this.state.members;
        const name = this.state.name;
        const about = this.state.about;
    
        axios.put('http://localhost:8000/organizations', { members, name, about })
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return (
            <div className="content">
            <Nav>
            <NavItem> 
                <NavLink href = "/addOrganization">+ Add organization</NavLink>    
            </NavItem> 
            <NavItem> 
                <NavLink href = "/profile">My profile</NavLink>    
            </NavItem>
            <NavItem> 
                <NavLink href = "/home">Home</NavLink>    
            </NavItem>
          </Nav>
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
                                defaultValue={this.state.members}
                                placeholder="Members"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Name</label>
                              <Input
                                defaultValue={this.state.name}
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
                                defaultValue={this.state.about}
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
                      <Button className="btn-fill" color="primary" type="submit" onClick={this.hand}>
                        Save
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-user">
                    <CardBody>
                      <CardText />
                      <div className="author">
                      <div className="block block-one" />
                        <div className="block block-two" />
                        <div className="block block-three" />
                        <div className="block block-four" />
                        <div> 
                          <img src = "https://www.elsys-bg.org/web/files/news/270/gallery/thumb_980x630_logo2.png" width="356" height="256"/>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
        );
      }
}