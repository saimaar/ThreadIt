 export const renderItems = (items) =>{
  return {
    type: "RENDER_ITEMS",
    items: items
  }
}

// in this action we are setting the state of the app here
//meaning state{ items = []} ==> after fetch setState(items :items)
