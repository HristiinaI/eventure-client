import React, { useState } from 'react';
import axios from "axios";
import Link from 'next/link';
import Home from '../../pages/home';
import 'bootstrap/dist/css/bootstrap.css';
import ListEvents from  '../../components/listEvents';

class AllEvents extends React.Component{

    state = {
        allEvents: new Array(),
        otherEvents: new Array(),
        userEmail: ''
    }          
    componentDidMount = () => {
        let events = [];
        let otherEvents = [];
        let _this = this;
        const creator = JSON.parse(localStorage.getItem("id"));

        axios.get(`http://localhost:8080/events?creator=` + creator)
        .then(function(results){
            for(let i = 0;i < results.data.length;i++){
                events.push(results.data[i]);
            }
            _this.setState({allEvents: events});
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get(`http://localhost:8080/users/` + creator)
        .then(function(results){
                axios.get(`http://localhost:8080/events?email=` + results.data.email)
                .then(function(results){
                    for(let i = 0;i < results.data.length;i++){
                        otherEvents.push(results.data[i]);
                    }
                    _this.setState({otherEvents: otherEvents});
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){ 
     return(
         <>
         <Home />
         <ListEvents 
            heading = "Events you create:"
            headingEmpty = "You do not create any events"
            allEvents = {this.state.allEvents} 
            length = {this.state.allEvents.length}   
        />
        <ListEvents 
            heading = "Events you participate in:"
            headingEmpty = "You do not participate in any events"
            allEvents = {this.state.otherEvents} 
            length = {this.state.otherEvents.length}   
        />
        </>
     );
    }
}



export default AllEvents;
