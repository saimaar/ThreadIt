import React, { Component } from 'react';
import ImgCard from './ImgCard'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class ImgContainer extends Component {


  render() {
    let {name, id} = this.props.items
    // console.log(this.props.items);
    let imgCard = this.props.items.map(item =>
        <Link key={item.id} to={`/${item.name}/${item.id}`}><ImgCard item={item}/>)</Link>)
    return (
      <div className="img-containe">{imgCard}</div>
    );
  }

}



const mapStateToProps = (state) => {
// console.log(state.items);
  return {
    items: state.items
  }
}


export default connect(mapStateToProps)(ImgContainer);
