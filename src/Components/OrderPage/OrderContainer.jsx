import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';

class OrderContainer extends Component {

  handleToken=(token, address)=>{
    console.log(this.props.price);
    console.log({token, address});
    const charge = {
        token: token.id
    };

    const config = {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
              charge: charge,
              price: this.props.price

              })
       };

    fetch(`http://localhost:4000/charges`, config)
    .then(res => res.json())
    .then(console.log)
  }



  render() {
    console.log(this.props.price);
    // var stripeKey = Stripe.setPublishkey()
    // debugger
    return (
      <div>
        <StripeCheckout
          stripeKey = {process.env.REACT_APP_STRIPE_API_KEY}
          token={this.handleToken}
          billingAdress
          shippingAddress
          />

      </div>
    );
  }

}

const mapStateToProps=(state)=>{
      console.log(state.totalcartAmount.price);
  return{
    price: state.totalcartAmount.price
  }
}

export default connect(mapStateToProps)(OrderContainer);



// const onToken = (token) => {
//
//        const charge = {
//            token: token.id
//        };
//
//        const config = {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify({ charge: charge, price: price * 100 })
//        };
//
//        fetch(CHARGES_URL, config)
//        .then(res => res.json())
//        .then(console.log)
//    }
