import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Board/Header';
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Item from "../../../components/Board/Item";
import DropWrapper from "../../../components/Board/DropWrapper";
import Col from "../../../components/Board/Col";
import { data, statuses } from "../../../data/index";

const Board = () => {
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, status) => {
      const mapping = statuses.find(si => si.status === status);

      setItems(prevState => {
          const newItems = prevState
              .filter(i => i.id !== item.id)
              .concat({ ...item, status, icon: mapping.icon });
          return [ ...newItems ];
      });
  };

  const moveItem = (dragIndex, hoverIndex) => {
      const item = items[dragIndex];
      setItems(prevState => {
          const newItems = prevState.filter((i, idx) => idx !== dragIndex);
          newItems.splice(hoverIndex, 0, item);
          return  [ ...newItems ];
      });
  };

  return (
      <div className={"row"}>
          {statuses.map(s => {
              return (
                  <div key={s.status} className={"col-wrapper"}>
                      <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                      <DropWrapper onDrop={onDrop} status={s.status}>
                          <Col>
                              {items
                                  .filter(i => i.status === s.status)
                                  .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                              }
                          </Col>
                      </DropWrapper>
                  </div>
              );
          })}
      </div>
  );
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