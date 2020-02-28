const iniTotal = {
}

const cartReducer = (state = iniTotal, action) =>{
  switch (action.type) {
    case  "Total":
    //state.concat(action.items)
    return {...state, price: action.payload}
    default:
    return state
  }
}

export default cartReducer;
