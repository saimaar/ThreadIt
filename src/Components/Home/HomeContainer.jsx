import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
class HomeContainer extends Component {

    handleHomeImage=()=>{
      this.props.history.push('/items')
    }

  render() {
    return (
      <div>
        <Image onClick={this.handleHomeImage} src="https://us.anitadongre.com/media/homepage_content/m/o/mobile-dhaaga-new1.jpg.mst.webp"/>
      </div>
    );
  }

}

export default withRouter(HomeContainer);
