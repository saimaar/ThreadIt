import React, { Component } from 'react';
import {deleteFromCart} from '../../Redux/Actions/cartItemAction'
import { Segment, Image, Button, Grid, Item, Icon, Header} from 'semantic-ui-react'
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

    let {name, price, image, color} = this.props.cartItem
    return (
    <Item className="product-info">
      <Item.Image src={`${image}`} size="small"/>
      <Item.Content className="item-content">
        <Item.Header>{name}</Item.Header>
          <Item.Meta>
            <span className='color'>color: <b>{color}</b></span>
          </Item.Meta>
       <Item.Meta>
         <span className='price'>${price}</span>
       </Item.Meta>
       <Icon name="trash alternate outline" onClick={this.handleDelete} />
       <Header size="small">Remove Item</Header>
      </Item.Content>
    </Item>

    );
  }

}

export default connect(null, {deleteFromCart})(ProductInfo);

//need to send cartItem id to the backend
