import React, { useState } from 'react';
import axios from "axios";
import Link from 'next/link';
import Home from '../home';
import 'bootstrap/dist/css/bootstrap.css';
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

class AllEvents extends React.Component{

    state = {
        allEvents: new Array(),
        eventId: ''
    }          
    componentDidMount = () => {
        let events = [];
        let _this = this;
        axios.get('http://localhost:8080/events/')
        .then(function(results){
            for(let i = 0;i < results.data.length;i++){
                events.push(results.data[i]);
            }
            _this.setState({allEvents: events});

        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){ 
        if(this.state.allEvents.length){  
            return(
                <>
                <Home />
                <h2>Your Events: </h2>
                <ul>
                    {this.state.allEvents.map(event => {   
                        return ( 
                            <li key={event._id} >
                                 <Link href="/event/dashboard/[id]" 
                                    as={`/event/dashboard/${event._id}`} >
                                    <a>{event.name}</a>
                                 </Link>
                                 
                            </li>
                        ); 
                       
                    })
                    }
                </ul>
                </>    
            );
        }else{
            return(
                <>
                <Home />
                <h2>Your Events: </h2>
                You do not have any events!
                </>    
            );
        }
    }
}

export default AllEvents;