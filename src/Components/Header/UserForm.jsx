import React, { Component } from 'react';

class UserForm extends Component {
  state ={
    username: "",
    email: "",
    password: ""
  }

  handleAllChange=(evt)=>{
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.handleLogin(this.state)
  }


  render() {
    return (
      <div>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1>login</h1>
          <label htmlFor="username">Username:</label><br/>
            <input
              type="text"
              autoComplete="off"
              name="username"
              value={this.state.username}
              onChange={this.handleAllChange}/><br/>

            <label htmlFor="email">e-mail:</label><br/>
              <input type="email"
                autoComplete="off"
                name="email"
                value={this.state.email}
                onChange={this.handleAllChange}/><br/>

            <label htmlFor="password">Password:</label><br/>
            <input type="password"
              autoComplete="off"
              name="password"
              value={this.state.password}
              onChange={this.handleAllChange}/><br/>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

export default UserForm;
