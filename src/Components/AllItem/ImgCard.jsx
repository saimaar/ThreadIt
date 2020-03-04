import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'

class ImgCard extends Component {

  allItemImage =(image, price, name, designer)=>{
    return <Card className="all-item">
      <Image src={image} alt="default image" wrapped ui={false}/>
      <Card.Content extra>
          <p>{name}</p>
          <p>by {designer}</p>
          <b>${price}</b>
      </Card.Content>
  </Card>
  }

  showItemImage =(image)=>{
    return <Image className="show-image" src={image} alt="show image" wrapped ui={false}/>
  }



  render() {
    let {image, price, name, designer} = this.props.item
    // console.log(this.props.item);
    return (

      <>
      {this.props.cardType === "show-container" ?
        this.showItemImage(image) :
        this.allItemImage(image, price, name, designer)}
      </>

    );
  }

}

export default ImgCard;
