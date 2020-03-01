import React, { Component } from 'react';
import ReviewCard from './ReviewCard'

class ReviewContainer extends Component {

  render() {
    // debugger
    let reviewCard = this.props.item.reviews ?
    this.props.item.reviews.map( review => <ReviewCard review={review}/>) : null

    return (
      <div>{reviewCard}</div>
    );
  }

}

const mapStateToProps=(state)=>{
  console.log(state.items);
  return {
  items: state.items
  }
}

export default ReviewContainer;
