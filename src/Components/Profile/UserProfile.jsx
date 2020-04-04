import React, { Component } from 'react';
import {Card, Image, Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {saveUserToState} from '../../Redux/Actions/userActions'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
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

      <Segment className="prof">
        <Grid className="prof" columns={2}>
          <Grid.Column>
            <Segment id="profile-info">
              <h3>Username:</h3>
              <h4>{username ? username.slice(0,1).toUpperCase() + username.slice(1) : null}</h4>
              <h3> email:</h3>
              <h4>{email}</h4>
              <Button onClick={this.handleDelete} basic color='red' content='Delete Account'/>
            </Segment>

          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Link to={'./orders'}><Button content='order history' icon='unordered list' size='big' /></Link>
          </Grid.Column>
        </Grid>

        <Divider vertical>or</Divider>
      </Segment>


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

//
// <div>
//   <h2>Username: {username}</h2>
//   <h2>email: {email}</h2>
//   <Button onClick={this.handleDelete} basic color='red' content='Delete Account'/>
//
//
// </div>
