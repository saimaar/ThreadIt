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

clickingPrice = (e, {name}) => {
  console.log("click me");
  this.handleItemClick(e, name)
  this.props.sortItems("HighToLow")
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
           onClick={this.clickingPrice}
         />
         <Menu.Item
           name='price: Lowest to Highest'
           active={activeItem === 'price: Lowest to Highest'}
           onClick={this.handleItemClick}
         />
       <Menu.Item header>Category</Menu.Item>
         <Menu.Item
           name='Tunic'
           active={activeItem === 'Tunic'}
           onClick={this.handleItemClick}
         />
         <Menu.Item
           name='Dress'
           active={activeItem === 'Dress'}
           onClick={this.handleItemClick}
         />
         <Menu.Item
           name='Jumpsuits'
           active={activeItem === 'Jumpsuits'}
           onClick={this.handleItemClick}
         />
         <Menu.Item
           name='Botton'
           active={activeItem === 'Botton'}
           onClick={this.handleItemClick}
         />
         <Menu.Item
           name='Top'
           active={activeItem === 'Top'}
           onClick={this.handleItemClick}
         />
      </Menu>
    );
  }

}



export default connect(null, {sortItems})(SideBarContainer);
