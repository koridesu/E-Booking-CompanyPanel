import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../styles/Navbar.css"
import  { Redirect } from 'react-router-dom'


export default class Navbar extends Component {
   
    onClickHandler=()=>{
        this.props.Authenticated("","",false);
    }

    

    render() {
        return (
            <div>
               
               { this.props.logStatus?
               <nav><Link to='/' style={{color:"white", textDecoration:"none"}}><h3 >Home</h3></Link>
                    <ul className="nav-links">
                        <Link to='/addbus' style={{color:"white", textDecoration:"none"}}><li>Addbus</li> </Link>
                        <Link to='/mybusses' style={{color:"white", textDecoration:"none"}}><li>My busses</li> </Link>
                        <Link to='/'onClick={this.onClickHandler} style={{color:"white", textDecoration:"none"}}><li>LogOut</li> </Link>
                    </ul>
                </nav>:
            
            <nav><Link to='/' style={{color:"white", textDecoration:"none"}}><h3 >Home</h3></Link>
                <ul className="nav-links">
                    <Link to='/login' style={{color:"white", textDecoration:"none"}}><li>Login</li> </Link>
                    <li ><i className="fas fa-sign-in-alt fa-2x"></i></li>
                </ul>
            </nav>

               }




            </div>
        )
    }
}
