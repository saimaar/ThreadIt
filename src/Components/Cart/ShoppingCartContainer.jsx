import React, { Component } from 'react';
import ProductInfo from './ProductInfo'
import CheckoutInfoCard from './CheckoutInfoCard'
import {connect} from 'react-redux';
import {Grid, Column, Item} from 'semantic-ui-react'



class ShoppingCartContainer extends Component {

  render() {
    // console.log(this.props.cart);

    let productInfo = this.props.cart_items ? this.props.cart_items.map(cartItem => <ProductInfo cartItem ={cartItem}/>) : null
    return (

    <Grid columns={2} relaxed='very'>
      <p className="title-org">Everytime you shop here, 15% of your total amount will
        be donated to the organization of your choice!
      </p>
    <Grid.Column>
      <Item.Group  className="each-product" divided>
          {productInfo}
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

  // console.log(state.userInfo.user.cart);
  return {
    cart_items: state.userInfo.user.cart_items
  }
}
export default connect(mapStateToProps)(ShoppingCartContainer);


//
//
// <div>
//   Shopping Cart
//       <Grid columns={2} relaxed='very'>
//         <Grid.Column>
//           {productInfo}
//         </Grid.Column>
//         <Grid.Column>
//           <CheckoutInfoCard/>
//         </Grid.Column>
//       </Grid>
// </div>
