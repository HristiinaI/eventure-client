import React from "react";
import Header from "../components/Board/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Board from './event/kanban/[id]';
import "../styles/board.css";

const App = () => {
    return (
        <>
            <Header />
            <Board />
        </>
    );
};

export default App;