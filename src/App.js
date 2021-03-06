import React,{Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import AddBus from './components/AddBus';
import AllBusses from './components/AllBusses';
class App extends Component  {
  state={
    username:"",
    userid:"",
    logStatus:false
  }


  Authenticated=(user_name,id,log)=>{
      this.setState({
         username: user_name,
         userid: id,
         logStatus:log
      })
  }
 
  render(){
  return (
    <Router>
    <div className="App">
       <Navbar logStatus={this.state.logStatus} Authenticated={this.Authenticated} ></Navbar>
      <Switch>
        <Route path="/" exact component={Home} />  
        <Route path='/login'render={(props) => <Login {...props} Authenticated={this.Authenticated} />}   />
        <Route path="/addbus" exact render={(props)=> <AddBus {...props} id = {this.state.userid} user = {this.state.username}/>}   />
        <Route path="/mybusses" exact render={(props)=> <AllBusses {...props} id = {this.state.userid} />}   />
       
     </Switch>
  
    </div>
    </Router>
  );
  }
}

export default App;
