const listsById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { _id: listId, title: listTitle, cards: [] }
      };
    }
    default:
      return state;
  }
};

const boardsById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_BOARD": {
      const { boardId, boardTitle } = action.payload;
      return {
        ...state,
        [boardId]: { _id: boardId, title: boardTitle, lists: [] }
      };
    }
    case "ADD_LIST": {
      const { boardId, listId } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          lists: [...state[boardId].lists, listId]
        }
      };
    }
 
   
    default:
      return state;
  }
};

export default { cardsById, listsById, boardsById };