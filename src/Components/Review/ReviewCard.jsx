import React, { Component } from 'react';
import { Button, Card, Image, Rating } from 'semantic-ui-react'

class ReviewCard extends Component {

  render() {
    let {comment, rating, username} = this.props.review
    console.log(rating);
    return (
      <Card.Group>
  <Card>
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Meta>
        <Rating
        disabled={true}
        icon='heart'
        defaultRating={rating}
        maxRating={5}
        /><br/>
      </Card.Meta>
      <Card.Description>
        {comment}
      </Card.Description>
    </Card.Content>
  </Card>
</Card.Group>

    );
  }

}

export default ReviewCard;
