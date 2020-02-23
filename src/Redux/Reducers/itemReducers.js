const initialItemState = []

const itemsReducer = (state = initialItemState, action) =>{
  switch (action.type) {
    case  "RENDER_ITEMS":
    //state.concat(action.items)
    return [...state, ...action.items]
    default:
    return state
  }
}

export default itemsReducer;
