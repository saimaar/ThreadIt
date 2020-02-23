import React, { Component } from 'react';
import ModalForm from './ModalForm'

class HeaderContainer extends Component {

  render() {
    return (

        <div className="main-header">
          <div className="header-content">
            <div className="top-menu">
              <ul className="menu-right">
                menu right
                <ModalForm handleLogin={this.props.handleLogin}/>
              </ul>
              topmenu
            </div>
          </div>
          mainDivHeader
        </div>

    );
  }

}

export default HeaderContainer;
