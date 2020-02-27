import React, { Component } from 'react';
import ImgCard from './ImgCard'
import {connect} from 'react-redux';
import { Button, Icon } from 'semantic-ui-react'
import {addToCart} from '../../Redux/Actions/cartItemAction'
import {Link} from 'react-router-dom'

class ShowContainer extends Component {
  state = {
  }


// in this method, I am creating cart-item for the user
//meaning the item that is selected by the user, will be attached to its
//associate cart
  handleAddToCart=()=>{
    let item_id = this.props.match.params.id
    fetch(`http://localhost:4000/cart_items`, {
      method : "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify( {
        item_id,
        cart_id: this.props.cart_id
      })
    }
  )
  .then(r => r.json())
  .then((item) => {
    console.log(item);
    this.props.addToCart(item);
    })
  }



  componentDidMount() {
    // console.log(this.props);
    let item_id = this.props.match.params.id
    fetch(`http://localhost:4000/items/${item_id}`)
    .then(r => r.json())
    .then((item) => {
      // console.log(item);
      this.setState({
        ...item
      })
    })
  }

// in this Add to cart if the localStorage is empty should force the user to log in
  render() {
    // debugger
    return (
      <div>
          <ImgCard cardType="show-container" item={this.state}/>
          <Button disabled={!localStorage.token ? true : false} onClick={this.handleAddToCart} color='google plus'>
              {localStorage.token ? "Add To Cart" : "Log in to add to cart!"}
          </Button>
      </div>
    );
  }

}

const mapDispatchToprops = {
  addToCart
}

const mapStateToProps=(state)=>{
  // debugger
  // console.log(state.userInfo.user.cart);
  return{
    cart_id : state.userInfo.user.cart ? state.userInfo.user.cart.id : null ,
  }


}
export default connect(mapStateToProps, mapDispatchToprops)(ShowContainer);
