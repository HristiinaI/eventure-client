import React, { useState } from 'react';
import axios from "axios";
import Header from '../../components/events/Header';
import { useRouter } from 'next/router'
import Link from 'next/link'

// const AllEvents = () => {    
class AllEvents extends React.Component{
 
    state = {

        allEvents: new Array()
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
            console.log(events);

        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){ 
        if(this.state.allEvents.length){  
            return(
                <>
                <Header />
                <h2>Your Events: </h2>
                <ul>
                    {this.state.allEvents.map(event => {   
                        console.log(event);
                        return ( 
                            <li>
                                 <Link href="/event/dashboard/[id]" 
                                        as={`/event/dashboard/${event._id}`}>
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
                <h2>Your Events: </h2>
                Loading...
                </>    
            );
        }
    }
}

export default AllEvents;