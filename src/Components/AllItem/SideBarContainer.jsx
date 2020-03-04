import React, { Component } from 'react';
import {Icon, Input, Menu, Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {sortItems} from '../../Redux/Actions/cartItemAction'

class SideBarContainer extends Component {
  state = { activeItem: 'color' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  filterColor=(e, {name})=>{
    this.handleItemClick(e, name)
    this.props.sortItems("all")
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

handleColor=(evt)=>{
  const colors = evt.target['innerText']
  console.log("click me");
  this.props.sortItems(colors)
}



  render() {
     const { activeItem } = this.state

     const tagOptions = [
  {
    key: 'Red',
    text: 'Red',
    value: 'Red',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Blue',
    text: 'Blue',
    value: 'Blue',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Black',
    text: 'Black',
    value: 'Black',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'Purple',
    text: 'Purple',
    value: 'Purple',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Orange',
    text: 'Orange',
    value: 'Orange',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Grey',
    text: 'Grey',
    value: 'Grey',
    label: { color: "grey", empty: true, circular: true },
  },
  {
    key: 'Yellow',
    text: 'Yellow',
    value: 'Yellow',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Pink',
    text: 'Pink',
    value: 'Pink',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Green',
    text: 'Green',
    value: 'Green',
    label: { color: 'green', empty: true, circular: true },
  }]


      return (
      <Menu text vertical>
        <Menu.Item header>Sort By</Menu.Item>
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


         <Dropdown text='Color' multiple icon='filter'>
         <Dropdown.Menu>
           <Dropdown.Menu scrolling>
             {tagOptions.map((option) => (
               <Dropdown.Item onClick={this.handleColor} key={option.value} {...option}  />
             ))}
           </Dropdown.Menu>
         </Dropdown.Menu>
         </Dropdown>


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



// <Menu.Item
//   name='color'
//   active={activeItem === 'color'}
//   onClick={this.filterColor}
// />
