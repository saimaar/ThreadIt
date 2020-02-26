import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'

class ImgCard extends Component {

  render() {
    let {image, price} = this.props.item
    // console.log(this.props.item);
    return (
      <Card className="item-card">
                <Image src={image} alt="default image" wrapped ui={false}/>
                <Card.Content>
                    <Card.Header></Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <p>Price:</p>
                    <b>{price}</b>
                </Card.Content>
</Card>


    );
  }

}

export default ImgCard;
