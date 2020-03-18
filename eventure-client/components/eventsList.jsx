import React from 'react';

class EventsList extends React.Component{    
    render(){
        const {events} = this.props;
        const listEvents = events.map((event) =>
            <li key={event.toString()}>
                {event}
            </li>
            
        );
        // console.log(event);
        console.log(listEvents);
        return(
            <ul>{listEvents}</ul>
        );
    }
}

export default EventsList;