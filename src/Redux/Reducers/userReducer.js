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
    
    default:
    return state
  }
}

export default userReducer;
