import React, { Component } from 'react'
import '../styles/Login.css'
import axios from "axios"
class Login extends Component {
    state={
        username:"",
        password:"",

    }

    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })
    }
    onClickHandler=(e)=>{
        e.preventDefault()
        let log={
            company_name:this.state.username,
            password:this.state.password,
        }
        axios.post(`http://localhost:8081/companylogin`,log).then(res=>{
            console.log(res.data)
            this.props.Authenticated(this.state.username,res.data.company_id)
        })

    }    
    
    render() {
        return (
           <form className ="box">
                <h1>LOGIN</h1>
                <input  onChange={this.onChangeHandler} type="text" name="username" value={this.state.username} placeholder="Username"/>
                <input  onChange={this.onChangeHandler} type="password" name="password" value={this.state.password} placeholder="Password"/> 
                <input onClick={this.onClickHandler} type="submit" value="Login"/>
           </form>
        )
    }
}
export default Login