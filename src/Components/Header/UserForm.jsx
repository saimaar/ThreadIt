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
    if(this.props.formType === "login"){
      this.props.handleLogin(this.state)
    } else if (this.props.formType === "register") {
      this.props.handleRegister(this.state)
    }

  }


  render() {
    return (
      <div>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1>{this.props.formType === "login" ? "login" : "register"}</h1>
          <label htmlFor="username">Username:</label><br/>
            <input
              type="text"
              autoComplete="off"
              name="username"
              value={this.state.username}
              onChange={this.handleAllChange}/><br/>
            { this.props.formType !== "login" ?
              <div>
            <label htmlFor="email">e-mail:</label><br/>
              <input type="email"
                autoComplete="off"
                name="email"
                value={this.state.email}
                onChange={this.handleAllChange}/><br/>
            </div> : null }

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
