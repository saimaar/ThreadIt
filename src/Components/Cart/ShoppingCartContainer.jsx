import React, { Component } from 'react';
import ProductInfo from './ProductInfo'
import CheckoutInfoCard from './CheckoutInfoCard'
import {connect} from 'react-redux';
import {Grid, Column} from 'semantic-ui-react'



class ShoppingCartContainer extends Component {

  render() {
    // console.log(this.props.cart);

    let productInfo = this.props.cart_items ? this.props.cart_items.map(cartItem => <ProductInfo cartItem ={cartItem}/>) : null
    return (
      <div>Your Shopping Cart
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                {productInfo}
              </Grid.Column>
              <Grid.Column>
                <CheckoutInfoCard/>
              </Grid.Column>
            </Grid>
      </div>
    );
  }

}

const mapStateToProps =(state)=>{
  // debugger
  // console.log(state.userInfo.user.cart);
  return {
    cart_items: state.userInfo.user.cart_items
  }
}
export default connect(mapStateToProps)(ShoppingCartContainer);
