export const saveUserToState = (user) =>{
 return {
   type: "SAVE_USER",
   payload: user
 }
}

export const addOrderItem = (order) =>{
  return {
    type: "ADD_ORDER",
    payload: order

  }
}
