import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'react-datepicker';

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
import Router from "next/router";

class Chat extends React.Component{
    render(){
        return(
            <div>
                <Home />
                <h1>Chat</h1>
            </div>
        )}
};

export default Chat;
