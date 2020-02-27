import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'

class ImgCard extends Component {

  render() {
    let {image, price, name} = this.props.item
    // console.log(this.props.item);
    return (
      <Card className={this.props.cardType === "show-container" ? "show-container" : "all-item" }>
          <Image src={image} alt="default image" wrapped ui={false}/>
          <Card.Content extra>
              <p>{name}</p>
              <b>${price}</b>
          </Card.Content>
      </Card>


    );
  }

}

export default ImgCard;
