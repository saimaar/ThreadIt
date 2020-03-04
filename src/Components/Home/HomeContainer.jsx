import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import bdWomen from './pic.png'
import screenshot from './diff.png'
import {Link} from 'react-router-dom'


class HomeContainer extends Component {

    handleHomeImage=()=>{
      this.props.history.push('/items')
    }

  render() {
    return (
      <div>
        <Image className="home-image" onClick={this.handleHomeImage} src={bdWomen}/>
        <Divider/>
        <Link to={"./about"}><Image className="home-image" onClick={this.handleHomeImage} src={screenshot}/></Link>
      </div>
    );
  }

}

export default withRouter(HomeContainer);
