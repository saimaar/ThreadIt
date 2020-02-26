import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {saveUserToState} from '../../Redux/Actions/userActions'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

class UserProfile extends Component {
  handleDelete=(evt)=>{
    fetch(`http://localhost:4000/users/${this.props.user.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then((deleteUser) => {
      localStorage.clear()
      this.props.saveUserToState({user: {}, token: ""})
      this.props.history.push('/')
      // console.log(deleteUser);
    })
  }

  render() {
    // console.log(this.props.user);
    let {username, email} = this.props.user
    return (
      <div>
        <h2>Username: {username}</h2>
        <h2>email: {email}</h2>
        <Button onClick={this.handleDelete} basic color='red' content='Delete Account'/>


      </div>
    );
  }

}

const mapStateToProps=(state)=>{
  // console.log(state);
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps, {saveUserToState})(withRouter(UserProfile));
