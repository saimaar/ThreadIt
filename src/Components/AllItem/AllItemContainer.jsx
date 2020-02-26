import React, { Component } from 'react';
import ImgContainer from './ImgContainer'
import SideBarContainer from './SideBarContainer'

class AllItemContainer extends Component {

  render() {
    return (
      <div>
      <ImgContainer/>
      <SideBarContainer/>
      </div>
    );
  }

}

export default AllItemContainer;
