import React, { Component } from 'react';
import {Icon, Input, Menu, Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {sortItems} from '../../Redux/Actions/cartItemAction'

class SideBarContainer extends Component {
  state = { activeItem: 'color' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  filterColor=(e, {name})=>{
      this.handleItemClick(e, name)

  }

clickingHighPrice = (e, {name}) => {
  this.handleItemClick(e, name)
  this.props.sortItems("HighToLow")
}

clickingLowPrice =(e, {name})=>{
  this.handleItemClick(e, name)
  this.props.sortItems("LowToHigh")
}

clickingTunic = (e, {name})=>{
    this.handleItemClick(e, name)
    this.props.sortItems("tunic")
}

clickingDress = (e, {name})=>{
    this.handleItemClick(e, name)
    this.props.sortItems("dress")
}

clickingJumpsuit = (e, {name})=>{
    this.handleItemClick(e, name)
    this.props.sortItems("jumpsuit")
}

clickingBottom=(e, {name})=>{
  this.handleItemClick(e, name)
  this.props.sortItems("bottom")

}

clickingTop=(e, {name})=>{
  this.handleItemClick(e, name)
  this.props.sortItems("top")

}

clickingAll=(e, {name})=>{
  this.handleItemClick(e, name)
  this.props.sortItems("all")

}

  render() {
     const { activeItem } = this.state
      return (
      <Menu text vertical>
        <Menu.Item header>Sort By</Menu.Item>
         <Menu.Item
           name='color'
           active={activeItem === 'color'}
           onClick={this.filterColor}
         />
         <Menu.Item
           name='price: Highest to Lowest'
           active={activeItem === 'price: Highest to Lowest'}
           onClick={this.clickingHighPrice}
         />
         <Menu.Item
           name='price: Lowest to Highest'
           active={activeItem === 'price: Lowest to Highest'}
           onClick={this.clickingLowPrice}
         />
       <Menu.Item header>Category</Menu.Item>
         <Menu.Item
           name='All'
           active={activeItem === 'All'}
           onClick={this.clickingAll}
         />
         <Menu.Item
           name='Tunic'
           active={activeItem === 'Tunic'}
           onClick={this.clickingTunic}
         />
         <Menu.Item
           name='Dress'
           active={activeItem === 'Dress'}
           onClick={this.clickingDress}
         />
         <Menu.Item
           name='Jumpsuits'
           active={activeItem === 'Jumpsuits'}
           onClick={this.clickingJumpsuit}
         />
         <Menu.Item
           name='Bottoms'
           active={activeItem === 'Bottoms'}
           onClick={this.clickingBottom}
         />
         <Menu.Item
           name='Top'
           active={activeItem === 'Top'}
           onClick={this.clickingTop}
         />
      </Menu>
    );
  }

}



export default connect(null, {sortItems})(SideBarContainer);
