import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-chat-elements/dist/main.css';
import Home from '../home';
import { Input } from "react-chat-elements";
import { Button } from "react-chat-elements";
import { withRouter } from 'next/router'
import  { MessageBox }  from 'react-chat-elements';
import React from "react";
import '../../styles/Chat.css';
import {List} from "@material-ui/core";
import socketIOClient from "socket.io-client";

class Chat extends React.Component{
    constructor() {
        super();
        this.state = {
            messages: new Array(),
            id: ''
        };
    }

// ideqta e che mi vrushta spisuk s absoliutno vsichki chatove shtoto id-to
    // deto se opitvam da my setna po nqkva prichina mi dava undefined, demek
    // ne e zaredilo vse edno? abe ebalo si e maikata
    componentDidMount() {
        this.setState({id: this.props.router.query.id})
        const socket = socketIOClient('http://localhost:1080', {
            query: {
              token: JSON.parse(localStorage.getItem('accessToken')),
            },
        });
        //const socket = io('http://localhost:1080');
        socket.on('join', (data) => {
            console.log("socket data: " + data);
        })

        axios.get('http://localhost:8080/chats?param=' + this.state.id)
            .then(res => {
                for(let i = 0; i < res.data.length; i++) {
                    if(res.data[i]._id === this.props.router.query.id) {
                        for(let j = 0; j < res.data[i].messages.length; j++) {
                            this.setState({messages: res.data[i].messages[j].message} );

                            console.log("from res = " + res.data[i].messages[j].message);
                        }
                    }
                }

                console.log("res " + this.state.messages);
            })

    }

    render() {
        if (this.props.router.query.id) {
            return (
                <>
                    <body>
                    <Home/>


                    <footer classname="footer">
                        <MessageBox
                            position={'left'}
                            type={'text'}
                            text={"test"}
                            
                        />
                        <MessageBox
                            position={'right'}
                            type={'text'}
                            text={"hello"}
                            date= {new Date()}
                        />

                        <Input
                            placeholder="Type here..."
                            multiline={true}
                            rightButtons={
                                <Button
                                    color='white'
                                    backgroundColor='black'
                                    text='Send'/>
                            }

                        />
                    </footer>

                    </body>

                </>
            );
        } else {
            return (
                <h2>Loading </h2>
            );
        }
    }
};

export default withRouter(Chat);
