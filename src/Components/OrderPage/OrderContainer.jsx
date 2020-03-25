import React, { Component } from 'react';
import {Segment, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import OrderCard from './OrderCard'
class OrderContainer extends Component {


  render() {
debugger
    let orderCard = this.props.orders ? this.props.orders.map(order => <OrderCard order={order}/>) : null
    let orderLength = this.props.orders ? this.props.orders.length : null
    return (
      <Segment>
        <b className= "order">{orderLength <= 0 ? "Orders List is empty" : "Order is being processed"}</b>
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
