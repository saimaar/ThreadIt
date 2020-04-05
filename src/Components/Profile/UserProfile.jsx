import React, { Component } from 'react';
import {Header,Card, Image, Button, Divider, Form, Grid, Segment, Menu } from 'semantic-ui-react'
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

            <Segment id="profile-info">
              <Grid className="prof">
              <Grid.Column floated='left' width={3} >
              <p>Username:</p>
              <p>{username ? username.slice(0,1).toUpperCase() + username.slice(1) : null}</p>
              <p> email:</p>
              <p>{email}</p>
              </Grid.Column>
              <Divider/>

            <Grid.Column floated='right' width={3}>
            <Button onClick={this.handleDelete} basic color='red' content='Delete Account'/>
            <Link to={'./orders'}><Button content='order history' icon='unordered list' size='big' /></Link>
            </Grid.Column>
            </Grid>

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
