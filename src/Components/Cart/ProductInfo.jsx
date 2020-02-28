import React, { Component } from 'react';
import {deleteFromCart} from '../../Redux/Actions/cartItemAction'
import { Segment, Image, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'


class ProductInfo extends Component {

  handleDelete=()=>{
    // console.log('click me');
    fetch(`http://localhost:4000/cartitem/delete/${this.props.cartItem.id}`, {
      method : 'DELETE',
      headers: {
          'Authorization': `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      // debugger
      //was about to dispatch the action
      this.props.deleteFromCart(data.cart_item.id)

    })
  }

  render() {

    let {name, price, image} = this.props.cartItem
    return (
    <Segment className="product-info">
      <Image src={`${image}`} size="small"/>
        product name: <p>{name}</p>
        price: <p>${price}</p>
      <Button onClick={this.handleDelete} basic color='red' content='Delete' />

    </Segment>

    );
  }

}

export default connect(null, {deleteFromCart})(ProductInfo);

//need to send cartItem id to the backend
