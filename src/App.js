import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {Switch, Route} from 'react-router'
import HomeContainer from './Components/Home/HomeContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import AllItemContainer from './Components/AllItem/AllItemContainer'
import ShowContainer from './Components/AllItem/ShowContainer'
import {renderItems} from './Redux/Actions/renderItems'
import {saveUserToState} from './Redux/Actions/userActions'

class App extends Component {

  componentDidMount() {
    fetch(`http://localhost:4000/items`)
    .then(r => r.json())
    .then((items) => {
       // console.log(items);
      this.props.renderItems(items)
    })
  }

  handleLogin=(userInfo)=>{
    // console.log(userInfo);
    //whatever object we are getting back from the input field
    //we are sending it to the backend so no need to have curlys
    //after we login we get back the token
    fetch('http://localhost:4000/login', {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then((user) => {
      //if user with token exists then save the user to the application state
      if (user.token){
        // debugger
        this.props.saveUserToState(user)
        console.log(user);
        // here we are saving the userToken that
        //is coming from the backend to the key of token
        localStorage.setItem('token', user.token)
        this.props.history.push('/')
      }
    })
  }

  persistUser=()=>{
    if(localStorage.getItem("token")){
      let token = localStorage.getItem('token')
      console.log(token);
      fetch('http://localhost:4000/persist', {
        headers: {
          'Authorization': `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then((user) => {
        console.log(user);
        if(user.token){
          this.props.saveUserToState(user)
          localStorage.setItem('token', user.token)
        }
      })
    }
  }


  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <HeaderContainer handleLogin={this.handleLogin} />
        <Switch>
          <Route exact path="/" render= {() => <HomeContainer/>}/>
          <Route path='/items' component= { AllItemContainer }/>
          <Route path= '/:name/:id' component ={ShowContainer}/>
        </Switch>
      </div>
    );
  }

}


                              //dispatching action here === mapDispatchToProps
export default connect(null,
   {renderItems,
  saveUserToState} )
  (withRouter(App));
//1. first argument how we get info from the application state
//2. second argument how we send info to the application state (setting the state)
