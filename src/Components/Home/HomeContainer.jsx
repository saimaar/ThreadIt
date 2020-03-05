import React, { Component } from 'react';
import { Image, Divider, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import bdWomen from './images/pic.png'
import {Link} from 'react-router-dom'
import ImageCard from '../AllItem/ImgCard'
import {connect} from 'react-redux'
import {sortItems} from '../../Redux/Actions/cartItemAction'

class HomeContainer extends Component {

    handleHomeImage=()=>{
      this.props.history.push('/items')
    }

    handleJumpsuit=()=>{
      this.props.sortItems("jumpsuit")
      this.props.history.push('/items')

    }

  render() {
    return (
      <div>
        <Image className="home-image" onClick={this.handleHomeImage} src={bdWomen}/>
        <Divider/>
        <Header className="home-one-h1">Shop Summery Jumpsuits!</Header>
      <Image.Group onClick={this.handleJumpsuit} className="jumpsuit-home" size='large'>
        <Image src="https://www.globaldesi.in/media/catalog/product/cache/8ba85772601582a264183d0a493354f1/f/f/ff20gh005jsmo_rust_2_.jpg" />
        <Image src="https://www.globaldesi.in/media/catalog/product/cache/8ba85772601582a264183d0a493354f1/f/f/ff20gh001ajsrl_wine_1_.jpg" />
      </Image.Group>

      </div>
    );
  }

}

const mapStateToProps=(state)=>{
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {sortItems})(withRouter(HomeContainer));
