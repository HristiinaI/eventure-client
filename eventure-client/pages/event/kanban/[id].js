import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Board/Header';
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Item from "../../../components/Board/Item";
import DropWrapper from "../../../components/Board/DropWrapper";
import Col from "../../../components/Board/Col";
import {data, statuses } from "../../../data/index";
import CardCreate from "../../../components/Board/CardCreate";

class Board extends React.Component {

    state = {
        items: new Array(),
    }

    componentDidMount = () => {
        let cards = [];
        let _this = this;
        axios.get('http://localhost:8080/cards/')
        .then(function(results){
            for(let i = 0;i < results.data.length;i++){
                cards.push(results.data[i]);
            }
            
            _this.setState({items: cards});
            console.log(items);
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }

    // onDrop = (item, monitor, status) => {
    //     const mapping = statuses.find(si => si.status === status);

    //     setItems(prevState => {
    //         const newItems = prevState
    //             .filter(i => i.id !== item.id)
    //             .concat({ ...item, status, icon: mapping.icon });
    //         return [ ...newItems ];
    //     });
    // };


    render(){
    return (
        <div className={"row"}>
            {statuses.map(s => {
                return (
                    <div key={s.status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <Col>
                        {this.status.items.map(item => {
                                return(
                                    <li key={item._id} >
                                         <a>{item.name}</a>
                                    </li>
                                )
                            })
                        }
                        </Col>
                    </div>
                );
            })}
        </div>
    );
        }
};



Board.getInitialProps = async function (context) {
  const { id } = context.query;
  let board = {};

  await axios.get(`http://localhost:8080/board/${id}`)
  .then(res => {
      board = res.data;

  })
  .catch(function (error) {
      console.log(error);
  })

  return {board};
}
export default Board;