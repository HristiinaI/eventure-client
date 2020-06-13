import React, { useState } from 'react';
import axios from 'axios';
import Item from "../../../components/Board/Item";
import DropWrapper from "../../../components/Board/DropWrapper";
import Col from "../../../components/Board/Col";
import { data, statuses } from "../../../data/index";
import CardCreate from "../../../components/Board/CardCreate";
import Header from "../../../components/Board/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "../../../styles/board.css";  
import Home from '../../home';



class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: new Array()
        }
    }

    componentDidMount = () => {
      this.loadData();
    }

    loadData = () => {
        let cards = [];
        let _this = this;
        axios.get('http://localhost:8080/cards?param=' + this.props.board._id)
        .then(function(results){
            for(let i = 0;i < results.data.length;i++){
                cards.push(results.data[i]);
            }
            _this.setState({items: cards});
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);
        const newItems = this.state.items
            .filter(i => i._id !== item._id)
            .concat({ ...item, status, icon: mapping.icon });

            axios.put('http://localhost:8080/cards/' + item._id, { ...item, status, icon: mapping.icon});
            this.setState({items: [...newItems]})
    };

    moveItem = (dragIndex, hoverIndex) => {
        const item = this.state.items[dragIndex];
        
        const newItems = this.state.items
        .filter((i, idx) => idx !== dragIndex);
        newItems.splice(hoverIndex, 0, item);

        this.setState({items: [...newItems]})   
  };


  render(){
  return (
    <DndProvider backend={Backend}>
         <Home />
        <Header boardName = {this.props.board.name}/>
      <div className={"row"}>
          {statuses.map(s => {
              return (
                  <div key={s.status} className={"col-wrapper"}>
                      <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                      <DropWrapper onDrop={this.onDrop} status={s.status}>
                          <Col>
                              {this.state.items
                                  .filter(i => i.status === s.status)
                                  .map((i, idx) => <Item key={i._id} item={i} index={idx} moveItem={this.moveItem} status={s} />)
                              }
                              <CardCreate 
                                onCreate = {this.loadData} 
                                boardId = {this.props.board._id} 
                                status={s.status}
                              >
                              </CardCreate>
                              
                          </Col>
                          
                      </DropWrapper>
                  </div>
              );
          })}
      </div>
      </DndProvider>
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
