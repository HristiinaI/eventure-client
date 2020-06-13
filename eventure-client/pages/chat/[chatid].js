import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-chat-elements/dist/main.css';
import Home from '../home';
import { Input } from "react-chat-elements";
import { Button } from "react-chat-elements";
import  { MessageBox }  from 'react-chat-elements';
import React from "react";
import '../../styles/Chat.css';
import socketIOClient from "socket.io-client";

class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            messages: new Array(),
            id: '',
            socket: '',
            message: '',
            length: '',
        };
    }

    onSubmit = () => {
        const chatId = this.props.chat._id;
        const sender = JSON.parse(localStorage.getItem('id'));
        const isUser = true;
        const message = this.state.message;
        this.state.socket.emit('message', {chatId, sender, isUser, message});
        const temp = this.state.socket.emit('join');
        console.log('temp = ' + temp);
        this.onReload(message);
    }


    onReload = () => {
        let messages = [];
        console.log('chatId socket: ' + this.props.chat._id);
        const socket = socketIOClient('http://localhost:8080', {
            query: {
                token: JSON.parse(localStorage.getItem('accessToken')),
                id: this.props.chat._id,
            },
        });
        this.setState({socket: socket});
        let test = socket.emit('join');
        console.log('test: ' + test);
        axios.get('http://localhost:8080/chats?param=' + this.props.chat._id)
            .then(res => {
                for(let i = 0; i < res.data.length; i++) {
                    messages.push(res.data[i]);
                    this.setState({messages: messages});
                    this.setState({length: i});
                }
            })
    }

    onChange = event => {
        this.setState({message: event.target.value});
    }

    checkPosition = message => {
        if (message.sender === JSON.parse(localStorage.getItem('id'))) {
            return "right";
        } else {
            return "left";
        }
    }

    componentDidMount() {
        this.onReload();
    }

    render() {
        if (this.props.chat._id) {
            return (
                <>
                    <body>
                    <Home/>
                    <footer className="footer">
                        {this.state.messages.map(message => {
                                return (
                                    <MessageBox
                                        position={this.checkPosition(message)}
                                        type={'text'}
                                        text={message.message}
                                    />
                                );
                        }

                        )}

                        <Input onChange={this.onChange}
                               placeholder="Type your message here..."
                               multiline={true}
                               rightButtons={
                                   <Button onClick = {this.onSubmit}
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

Chat.getInitialProps = async function(context) {
    const { id } = context.query;
    let chat = {};
    await axios.get(`http://localhost:8080/chats/${id}`)
        .then(res => {
            chat = res.data;
        });
    return {chat};
}
export default Chat;
