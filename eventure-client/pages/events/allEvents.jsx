import React, { useState } from 'react';
import axios from "axios";
import Link from 'next/link';
import Home from '../../pages/home';
import 'bootstrap/dist/css/bootstrap.css';
import ListEvents from  '../../components/listEvents';

class AllEvents extends React.Component{

    state = {
        allEvents: new Array(),
    }          
    componentDidMount = () => {
        let events = [];
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
    }

    render(){ 
     return(
         <>
         <Home />
         <ListEvents 
            allEvents = {this.state.allEvents} 
            length = {this.state.allEvents.length}   
        />
        </>
     );
    }
}



export default AllEvents;