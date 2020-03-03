import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import { Button, Icon, Modal, Header, Segment, Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import ImgCard from './ImgCard'
import InfoCard from './InfoCard'
import ReviewForm from '../Review/ReviewForm'
import ReviewContainer from '../Review/ReviewContainer'
import {addToCart} from '../../Redux/Actions/cartItemAction'
import {addReviewToState} from '../../Redux/Actions/renderItems'


class ShowContainer extends Component {

  state = {
     showModal: false
  }

// in this method, I am creating cart-item for the user
//meaning the item that is selected by the user, will be attached to its
//associate cart
  handleAddToCart=()=>{
    // debugger
    let item_id = this.props.match.params.id
    fetch(`http://localhost:4000/cart_items`, {
      method : "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify( {
        item_id,
        cart_id: this.props.cart_id
      })
    }
  )
  .then(r => r.json())
  .then((item) => {
    // console.log(item);
    this.props.addToCart(item);
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleReview =(review)=>{
    // debugger
    let item_id = this.props.match.params.id
    this.props.history.push(`/item/${item_id}`)
    let {comment, rating} = review
    // console.log(comment);
    // console.log(review);
    fetch(`http://localhost:4000/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${localStorage.token}`},
        body: JSON.stringify({
          comment,
          rating,
          item_id
        })
    })
    .then(r => r.json())
    .then((data) => {
      // console.log(data);
      this.props.addReviewToState(data)
      // this.props.history.push(`/item/${item_id}`)

    })
    //Render an action here that will add review to the state
  }

  componentDidMount() {
    // console.log(this.props);
    let item_id = this.props.match.params.id
    fetch(`http://localhost:4000/items/${item_id}`)
    .then(r => r.json())
    .then((item) => {
      // console.log(item);
      this.setState({
        ...item
      })
    })
  }

// in this Add to cart if the localStorage is empty should force the user to log in
  render() {
    let item = this.props.items.find(item => item.id == this.props.match.params.id) || this.state
    return (
      <div>
            <div className="show-cont">
              <div className ="show-div">
                <ImgCard cardType="show-container" item={item}/>
                </div>


                <div className ="info-div">
                  <InfoCard item={item}/>
                    <Button disabled={!localStorage.token ? true : false} onClick={this.handleAddToCart} color='google plus'>
                        {localStorage.token ? "Add To Cart" : "Log in to add to cart!"}
                    </Button>
                      <Modal open={this.state.showModal} trigger={<Button onClick={this.openModal}>Review this item</Button>}>
                        <Modal.Description>
                          <Header>Hey Guest!</Header>
                          <ReviewForm closeModal={this.closeModal} handleReview={this.handleReview}/>
                        </Modal.Description>
                      </Modal>
                </div>
            </div>
          <ReviewContainer item={item}/>
      </div>
    );
  }

}

const mapDispatchToprops = {
  addToCart,
  addReviewToState
}

const mapStateToProps=(state)=>{
  // debugger
  // console.log(state.userInfo.user.cart);
  return{
    cart_id : state.userInfo.user.cart ? state.userInfo.user.cart.id : null,
    items : state.items
  }


}
export default withRouter(connect(mapStateToProps, mapDispatchToprops)(ShowContainer));
