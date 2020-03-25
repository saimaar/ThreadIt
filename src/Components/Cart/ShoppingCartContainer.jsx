import React, { Component } from 'react';
import ProductInfo from './ProductInfo'
import CheckoutInfoCard from './CheckoutInfoCard'
import {connect} from 'react-redux';
import {Grid, Column, Item} from 'semantic-ui-react'
import emptyCartImg from './empty_cart.png'



class ShoppingCartContainer extends Component {

  render() {
    let cartCount = this.props.cart_items ? this.props.cart_items.length : null
    // console.log(cartCount)
    let productInfo = this.props.cart_items ? this.props.cart_items.map(cartItem => <ProductInfo cartItem ={cartItem}/>) : null
    return (

    <Grid columns={2} relaxed='very'>
      <p className="title-org">Everytime you shop here, 15% of your total amount will
        be donated to the organization of your choice!
      </p>
    <Grid.Column>
      <Item.Group  className="each-product" divided>
          {cartCount > 0 ? productInfo : <img className="empty_cart" src={emptyCartImg} alt="sorry your cart is empty"/>}
      </Item.Group>
    </Grid.Column>
      <Grid.Column>
           <CheckoutInfoCard/>
      </Grid.Column>
    </Grid>
    );
  }

}

const mapStateToProps =(state)=>{
  // debugger
  // console.log(state.userInfo.user.cart);
  return {
    cart_items: state.userInfo.user.cart ? state.userInfo.user.cart.cart_items : null
  }
}
export default connect(mapStateToProps)(ShoppingCartContainer);
