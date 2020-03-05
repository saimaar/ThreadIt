import React, { Component } from 'react';
import {Segment, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import OrderCard from './OrderCard'
class OrderContainer extends Component {


  render() {
    console.log(this.props.orders);
    let orderCard = this.props.orders ? this.props.orders.map(order => <OrderCard order={order}/>) : null

    return (
      <Segment>
        <b className= "order">Your order is being processed....</b>
        {orderCard}
      </Segment>
    );
  }

}


const mapStateToProps=(state)=>{
// debugger
  return {
    orders: state.userInfo.user.orders
  }
}


export default connect(mapStateToProps)(OrderContainer);
