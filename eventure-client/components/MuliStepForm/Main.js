import React, { Component } from 'react';
import EventName from './EventName';
import EventType from './EventType';
import axios from "axios";
import EventDate from './EventDate';
import EventLocation from './EventLocation';
import AllInfo from './AllInfo';
import Home from "../../pages/home";
import Router from "next/router";


export class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            step: 1,
            eventName: '',
            type: '',
            startDate: new Date(), 
            location: '',
            boardId: '',
            chatId: '',
            email: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({
            startDate: date
          });
    }


    handleSubmit = () => {
        const name = this.state.eventName;
        const type = this.state.type;
        const date = this.state.startDate;
        const location = this.state.location;
        const creator = JSON.parse(localStorage.getItem("id"));
        const _this = this;

        axios.get('http://localhost:8080/users/' + creator)
            .then(res => {
                if(JSON.parse(localStorage.getItem('role')) === 'User') {
                    this.setState({email: res.data.email});
                } else if(JSON.parse(localStorage.getItem('role')) === 'Organization') {
                    this.setState({email: res.data.name});
                }

            });

        axios.post('http://localhost:8080/events', { name, type, date, location, creator})
        .then(res => {
            console.log(res);
            Router.push({
                pathname: '/events/allEvents',
            });
            const eventId = res.data.result._id;
            axios.post('http://localhost:8080/board',{name, eventId: eventId})
                .then(res => {
                    _this.setState({boardId: res.data.result._id})
                    const addEventId = res.data.result.eventId;
                    axios.put('http://localhost:8080/events/' + addEventId, {boardId: res.data.result._id})
                    .then(res => {
                        localStorage.setItem('boardId', JSON.stringify(this.state.boardId));
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                        
                })
                .catch(function (error) {
                    console.log(error);
                })

            const members = [];
            members.push(this.state.email);

            axios.post('http://localhost:8080/chats', {name, members})
                .then(res => {
                    _this.setState({chatId: res.data.result._id});
                    axios.put('http://localhost:8080/events/' + eventId, {chatId: res.data.result._id})
                        .then(res => {
                            localStorage.setItem('chatId', JSON.stringify(this.state.chatId))
                        });
                });
        })
    };


    showStep = () => {
        const { step, eventName, type, startDate, location, eventId} = this.state;

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
