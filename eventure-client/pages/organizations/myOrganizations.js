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

import { ListGroup } from 'react-bootstrap';

import Home from '../home';

export default class MyOrganizations extends Component {
    state = {
        name: '',
    }
    handleClick = user => {
        const names = JSON.parse(localStorage.getItem('organizations'));
       // axios.get('http://localhost:8000/organizations/');
        console.log(names);
    }
    render() {
        return (
            <div class = "col-md-6" align = "center"> 
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="#link1">
                        Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2" disabled>
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={this.handleClick}>
                        This one is a button
                    </ListGroup.Item>
                </ListGroup>
            </div> 
        );
    }
}