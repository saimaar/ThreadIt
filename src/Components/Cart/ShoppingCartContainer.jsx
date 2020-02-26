import React, { Component } from 'react';
import ProductInfo from './ProductInfo'
import {connect} from 'react-redux';


class ShoppingCartContainer extends Component {

  render() {
    // console.log(this.props.cart);

    let productInfo = this.props.cart_items ? this.props.cart_items.map(cartItem => <ProductInfo cartItem ={cartItem}/>) : null
    return (
      <div>This is Shopping Cart
        {productInfo}
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
