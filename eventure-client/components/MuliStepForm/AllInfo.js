import React, { Component } from 'react';

class AllInfo extends React.Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    submiting = e => {
        e.preventDefault();
        this.props.handleSubmit();
    }
    render(){
        const {eventName, type, startDate, location} = this.props;
        return(
            <>
                <h2>Here is the information you entered:</h2>
                Event Name: <b>{eventName}</b><br />
                Event Type: <b>{type}</b><br />
                Date: <b>{startDate}</b><br />
                Location: <b>{location}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
               
            
            </>
        );
    }
}

export default AllInfo;
