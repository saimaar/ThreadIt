// const initialItemState = []
//
// const cartReducer = (state = initialItemState, action) =>{
//   switch (action.type) {
//     case  "ADD_TO_CART":
//       let item = state.find(item => item.id === action.item.id)
//       if (item) {
//         var itemClone = Object.assign({}, item)
//         itemClone.quantity += 1
//       } else {
//         var itemClone = {...action.item, {quantity: 1}}
//       }
//     //state.concat(action.items)
//     return [...state, ...action.items]
//     default:
//     return state
//   }
// }
//
// export default cartReducer;
