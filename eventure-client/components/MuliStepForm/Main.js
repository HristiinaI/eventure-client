import React, { Component } from 'react';
import EventName from './EventName';
import EventType from './EventType';
import axios from "axios";
import EventDate from './EventDate';
import EventLocation from './EventLocation';
import AllInfo from './AllInfo';
import Home from "../../pages/home";
import Router from "next/router";
import { useRouter } from 'next/router';

export class Main extends Component {
    state = {
        step: 1,
        eventName: '',
        type: '',
        startDate: new Date(), 
        location: '',
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    handleDateChange = date =>{
        this.setState({startDate: date});
    }

    handleSubmit = () => {
        const name = this.state.eventName;
        const type = this.state.type;
        const date = this.state.startDate;
        const location = this.state.location;
        const creator = JSON.parse(localStorage.getItem("id"));

        axios.post('http://localhost:8080/events', { name, type, date, location, creator})
        .then(res => {
            Router.push('/events/allEvents');
        })
    };


    showStep = () => {
        const { step, eventName, type, startDate, location} = this.state;

        if(step === 1){
            return (
                <EventName
                    nextStep = {this.nextStep} 
                    eventName = {eventName}
                    handleChange = {this.handleChange}
                />
            );
        }
        if(step === 2){
            return (
                <EventType
                    nextStep = {this.nextStep} 
                    prevStep = {this.prevStep}
                    type = {type}
                    handleChange = {this.handleChange}
                />
            );
        }
        if(step === 3){
            return (
                <EventDate
                    nextStep = {this.nextStep} 
                    prevStep = {this.prevStep}
                    startDate = {startDate}
                    handleDateChange = {this.handleDateChange}
                />
            );
        }
        if(step === 4){
            return (
                <EventLocation
                    nextStep = {this.nextStep} 
                    prevStep = {this.prevStep}
                    handleSubmit = {this.handleSubmit}
                    location = {location}
                    handleChange = {this.handleChange}
                />
            );
        }
        if(step === 5){
            return (
                <AllInfo
                    // nextStep = {this.nextStep} 
                    prevStep = {this.prevStep}
                    handleSubmit = {this.handleSubmit}
                    location = {location}
                    name = {name}
                    type = {type}
                    startDate = {startDate}
                />
            );
        }
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <Home />
                <h2>Step {step} of 4.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default Main;
