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

      case "REMOVE_FROM_CART":
      const itemIndex = state.basket.findIndex((item) => item.id === action.id);
      console.log("Item Index:", itemIndex);
      if (itemIndex >= 0) {
        const newBasket = [...state.basket];
        newBasket.splice(itemIndex, 1);
        console.log("New Basket:", newBasket);
        return {
          ...state,
          basket: newBasket,
        };
      } else {
        return state;
      };

      
    default:
      return state;
  }
};

export default reducer;
