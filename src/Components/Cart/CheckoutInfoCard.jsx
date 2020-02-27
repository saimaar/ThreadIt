import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Segment, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class CheckoutInfoCard extends Component {

 cartAmount=()=>{
    if(this.props.userCart && this.props.userCart.length > 0){
      let price = this.props.userCart.map(cartItem => cartItem.price)
      // console.log(price);
      let totalPrice = price.reduce((total, num) => total + num)
      return totalPrice
    }
  }

  handleProceedCheckout=()=>{
     // debugger
    const userId = this.props.user.id
    fetch(`http://localhost:4000/orders`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"

    },
      body: JSON.stringify({
        user_id: userId
      })
    })
      .then(r => r.json())
      .then((data) => {
        console.log(data);
      })
  }

  // token is the user id and you dont need to think about how to get access to user



  render() {
    const totalPrice= this.cartAmount()
    const shipping = 10
    let totalAmount = shipping + totalPrice
    totalAmount = totalAmount ? totalAmount: totalAmount = "0"
    return (

      <Segment className = "total-card">
        <p>TOTAL PURCHASE AMOUNT</p><br/>
        <b>Total Item Price = ${totalPrice}</b><br/>
        <b>Shipping = ${shipping}</b><br/>
        <b>You Pay =  ${totalAmount} </b><br/>
        <Link to="/orders"><Button onClick={this.handleProceedCheckout} inverted color='red'>Proceed to Checkout</Button></Link>
      </Segment>
    );
  }

}


const mapStateToProps=(state)=>{
  // debugger

  return {
    userCart : state.userInfo.user.cart_items,
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(CheckoutInfoCard);
