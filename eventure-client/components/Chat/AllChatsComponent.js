import React, { useState } from 'react';
import Link from 'next/link';
import Home from '../../pages/home';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements';
import ChatComponent from "./ChatComponent";

class AllChatsComponent extends React.Component{
    handleClick = e => {
        e.preventDefault();
        console.log("test");
    }
    render(){
        const {allChats} = this.props;
        if(allChats.length){
            return(
                <>
                    <Home />
                    {allChats.map(chat => {
                        return (

                                    <ChatList
                                        onClick={this.handleClick}
                                        key = {chat}
                                        className='chat-list'
                                        dataSource={[
                                            {
                                                avatar: 'https://facebook.github.io/react/img/logo.svg',
                                                alt: 'Reactjs',
                                                title: chat,
                                                subtitle: 'What are you doing?',
                                                date: new Date(),
                                                unread: 0,
                                            }


                                        ]}
                                    />

                        );

                    })}

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

export default AllChatsComponent;
