import React from 'react';
import axios from "axios";
import EventList from "../../components/eventsList";

class AllEvents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            allEvents: new Array()
        }
    }
    componentDidMount() {
        let events = [];
        let _this = this;
        axios.get('http://localhost:8080/events?name=' + name)
        .then(function(results){
            for(let i = 0;i < results.data.length;i++){
                events.push(results.data[i].name);
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
                <h2>Your Events: </h2>
                <ul>
                    {this.state.allEvents.map(event => {   
                        console.log(event);
                        return ( 
                            <li>
                                {event}
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