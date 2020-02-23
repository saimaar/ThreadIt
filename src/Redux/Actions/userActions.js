export const saveUserToState = (userInfo) =>{
 return {
   type: "SAVE_USER",
   payload: userInfo
 }
}
