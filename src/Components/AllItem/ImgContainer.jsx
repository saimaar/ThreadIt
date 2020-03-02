import React, { Component } from 'react';
import ImgCard from './ImgCard'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react'
import {sortItems} from '../../Redux/Actions/cartItemAction'


class ImgContainer extends Component {

  // componentDidUpdate(prevProps) {
  //   if (prevProps.term !== this.props.term){
  //     console.log("THIS IS THE TERM", this.props.term.term);
  //     this.filterItems()
  //     console.log("HighToLow" === this.props.term.term)
  //     console.log("has it filtered?")
  //   } else{
  //     console.log("nope")
  //   }
  // }

  filterItems =()=>{
    // debugger
    let {name, id} = this.props.items
    // console.log(this.props.items);
    if (this.props.term.term === "HighToLow"){
      let imgCards = this.props.items.sort((itemA, itemB ) => (itemB.price - itemA.price)  ).map(item =>
        <Link key={item.id} to={`/item/${item.id}`}><ImgCard cardType="all-item" item={item}/></Link>)
      return  imgCards

    } else {
        let imgCards= this.props.items.map(item =>
          <Link key={item.id} to={`/item/${item.id}`}><ImgCard cardType="all-item" item={item}/></Link>)
        return  imgCards
    }


  }



  render() {
    console.log("items:", this.props.items)

    return (
        <Card.Group itemsPerRow={6}>{this.filterItems()}</Card.Group>
    );
  }
}



const mapStateToProps = (state) => {
console.log(state.term);
  console.log(state)
  return {
    items: state.items,
    term: state.term

  }
}


export default connect(mapStateToProps, {sortItems})(ImgContainer);
