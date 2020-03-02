import React, {Component} from 'react';
import axios from "axios";
import Link from 'next/link';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchBar extends Component {
    state = {
        info: '',
    }

    onInfoChanged = event => {
        this.setState({ info: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const info = this.state.info;

        console.log(info);

        axios.get('http://localhost:8000/users')
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };
}