const initialUserState = {
  user: {},
  token: ""
}

const userReducer = (state = initialUserState, action) =>{
  // console.log(state);
  // debugger
  switch (action.type) {
    case  "SAVE_USER":
    //state.concat(action.items)
    return {...state, ...action.payload}
    case 'ADD_ITEM':
      return {...state, user: {
        ...state.user,
        cart_items: [...state.user.cart_items, action.payload.item]
      }}
      case 'REMOVE_ITEM':
      // debugger
      // console.log(state.user.cart);
      // console.log(action.payload);
      // debugger
       let filteredCart = state.user.cart_items.filter(cartItem => cartItem.cart_item_id !== action.payload)

       // console.log(filteredCart);
        return {...state, user: {...state.user, cart_items: filteredCart} }
    default:
    return state
  }
}

export default userReducer;

// here i am going to access the user cart key and then filter by the id
// in order to remove it from the cart
