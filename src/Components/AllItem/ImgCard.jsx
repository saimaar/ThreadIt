import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
class ImgCard extends Component {

  render() {
    let {image} = this.props.item
    console.log(this.props.item);
    return (
      <div className="img-card">

          <Card.Group itemsPerRow={4}>
             <Card color='teal' image={image} />
          </Card.Group>


      </div>
    );
  }

}

export default ImgCard;
