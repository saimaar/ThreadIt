import React, { Component } from 'react';
import ImgCard from './ImgCard'

class ShowContainer extends Component {
  state = {

  }

  componentDidMount() {
    // debugger
    let item_id = this.props.match.params.id
    fetch(`http://localhost:4000/items/${item_id}`)
    .then(r => r.json())
    .then((item) => {
      console.log(item);
      this.setState({
        ...item
      })
    })
  }

  render() {
    return (
      <div>
          <ImgCard item={this.state}/>

      </div>
    );
  }

}

export default ShowContainer;
