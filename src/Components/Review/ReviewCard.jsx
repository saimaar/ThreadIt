import React, { Component } from 'react';
import { Button, Card, Image, Rating, Segment, Divider, Header , Item} from 'semantic-ui-react'

class ReviewCard extends Component {

  render() {
    let {comment, rating, username} = this.props.review
    return (

    <Item.Content className="rev-card">
      <Rating
         disabled={true}
         icon='heart'
         defaultRating={rating}
         maxRating={5}
         />
       <Item.Header className="user-rev">{username} says:</Item.Header>
         <Item.Extra className="verified">
           verified customer
         </Item.Extra>
               <Item.Meta>{comment}</Item.Meta>
               <hr/>
          <Divider/>
   </Item.Content>


    );
  }

}

export default ReviewCard;




//
// <Card.Group>
// <Card>
// <Card.Content>
// <Card.Header>{username}</Card.Header>
// <Card.Meta>
//   <Rating
//   disabled={true}
//   icon='heart'
//   defaultRating={rating}
//   maxRating={5}
//   /><br/>
// </Card.Meta>
// <Card.Description>
//   {comment}
// </Card.Description>
// </Card.Content>
// </Card>
// </Card.Group>
