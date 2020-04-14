import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Link from 'next/link';
import Home from '../home';

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

export default class MyOrganizations extends Component {
    state = {
        myOrganizations: new Array()
    }

    componentDidMount = () => {
        let organizations = [];
        let _this = this;
        axios.get('http://localhost:8080/users/')
        .then(function(results) {
            for(let i = 0; i < results.data.length; i++) {
                organizations.push(results.data[i]);
            }
            _this.setState({myOrganizations: organizations});
        })
        .catch(function(error){
            console.log(error);
        })
    }
    
    render() {
        if(this.state.myOrganizations.length) {
            <>
            return (
                <Home />
                <h2> Your organizations: </h2>
                <ul> 
                    {this.state.myOrganizations.map(org => {
                        return(
                            <li key={org._id} >
                                <Link href="/organizations/myOrganization/[id]"
                                as={`/organizations/myOrganization/${org._id}`} >
                                <a> {org.name} </a>
                                </Link>
                            </li>
                        );
                    })
                    }
                </ul>
            );
            </>
        } else {
            return(
                <>
                <h2> Your organizations: </h2>
                Loading...
                </>
            );
        }
    }
}