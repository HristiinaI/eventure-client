import React, { useState } from 'react';
import axios from "axios";
import Link from 'next/link';
import Home from '../home';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements';
import Router from 'next/router';
import AllChatsComponent from '../../components/Chat/AllChatsComponent';


class AllChats extends React.Component{
    state = {
        allChats: [],
        chatId: '',
    }

    componentDidMount = () => {
        let chats = [];
        let _this = this;
        const id = JSON.parse(localStorage.getItem('id'));
        axios.get('http://localhost:8080/users/' + id)
            .then(function(results){
                console.log("res.data " + results.data);
                for(let i = 0;i < results.data.chats.length;i++){
                    chats.push(results.data.chats[i]);
                }
                _this.setState({allChats: chats});

            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(this.state.allChats);
    }

    render(){
        if(this.state.allChats.length){
            return(
                <>
                    <AllChatsComponent
                    allChats = {this.state.allChats}
                    />
                </>
            );
        }else{
            return(
                <>
                    Loading...
                </>
            );
        }
    }
}

export default AllChats;
