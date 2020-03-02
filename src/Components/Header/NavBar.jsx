import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu class="menu-bar" secondary>
        <Link to={'/'} ><Menu.Item
          name='Home'
          active={this.state.activeItem === 'home'}
          onClick={this.handleItemClick}
        /></Link>
      <Link to={'/items'}><Menu.Item
          name='All'
          active={this.state.activeItem === 'messages'}
          onClick={this.handleItemClick}
        /></Link>
        <Menu.Item
          name='Wedding'
          active={this.state.activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={this.state.activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Blog'
          active={this.state.activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }

}

export default NavBar;
