import axios from 'axios';

export const addList = (listTitle, boardId) => dispatch => {
    dispatch({
      type: "ADD_LIST",
      payload: { listTitle, boardId }
    });
  
    axios
      .post('http://localhost:8080/list', { listTitle, boardId })
      .then(({ data }) => console.log(data));
  };

//   export const addBoard = (boardTitle) => dispatch => {
//     const boardId = shortid.generate();
//     dispatch({
//       type: "ADD_BOARD",
//       payload: { boardTitle, boardId }
//     });
  
//     axios
//       .post("/api/board", { boardTitle, boardId })
//       .then(({ data }) => console.log(data));
//   };
  