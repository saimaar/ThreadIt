const initialUserState = {
  user: {},
  token: ""
}

const userReducer = (state = initialUserState, action) =>{
// debugger
  // console.log(state);
  switch (action.type) {
    case  "SAVE_USER":
    //state.concat(action.items)
      return {...state, ...action.payload}

    case 'ADD_ITEM':

    // console.log(action.payload.item)
      return {...state, user: {
        ...state.user, cart: {...state.user.cart, cart_items: [...state.user.cart.cart_items, action.payload]}
        }
      }

    case 'REMOVE_ITEM':

      let filteredCart = state.user.cart_items.filter(cartItem => cartItem.cart_item_id !== action.payload)
       // console.log(filteredCart);
      return {...state, user: {...state.user, cart_items: filteredCart}
      }
        //adding order to the order items
    case "ADD_ORDER" :
      return {...state, user: {
          ...state.user,
          orders: [...state.user.orders, action.payload]
        }
      }
    case "EMPTY_CART":
      return {...state, user: {
            ...state.user,
            cart_items: []
          }
        }
    case "ADD_REVIEW" :
      return{
        ...state, user:{
          ...state.user,
          reviews:[...state.user.reviews, action.payload]
        }
      }




    default:
    return state
  }
}

export default userReducer;

// here i am going to access the user cart key and then filter by the id
// in order to remove it from the cart
