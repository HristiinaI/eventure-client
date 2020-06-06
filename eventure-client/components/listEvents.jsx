import React, { useState } from 'react';
import axios from "axios";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

class ListEvents extends React.Component {
    render(){
        if(this.props.length){  
            return(
                <>
                <h2>Your Events: </h2>
                <ul>
                    {this.props.allEvents.map(event => {   
                        return ( 
                            <li key={event._id} >
                                 <Link href="/event/dashboard/[id]" 
                                    as={`/event/dashboard/${event._id}`} >
                                    <a>{event.name}</a> 
                                 </Link>
                                 {' '} 
                                 <a>{event.type}</a>
                                 
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
                You do not have any events!
                </>    
            );
        }
    }
}

export default ListEvents;