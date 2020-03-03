import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'

class ImgCard extends Component {

  allItemImage =(image,price,name)=>{
    return <Card className="all-item">
      <Image src={image} alt="default image" wrapped ui={false}/>
      <Card.Content extra>
          <p>{name}</p>
          <b>${price}</b>
      </Card.Content>
  </Card>
  }

  showItemImage =(image)=>{
    return <Image className="show-image" src={image} alt="show image" wrapped ui={false}/>
  }



  render() {
    let {image, price, name} = this.props.item
    // console.log(this.props.item);
    return (

      <>
      {this.props.cardType === "show-container" ?
        this.showItemImage(image) :
        this.allItemImage(image,price,name)}
      </>

    );
  }

}

export default ImgCard;
