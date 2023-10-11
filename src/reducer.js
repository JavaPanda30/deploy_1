export const initialState = {
  basket: [],
};
//reducer listens and do what sshould be done on change in state

const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        //original state
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
