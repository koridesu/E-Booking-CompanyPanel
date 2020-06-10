import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../styles/Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav><Link to='/' style={{color:"white", textDecoration:"none"}}><h3 >Home</h3></Link>
                    <ul className="nav-links">
                        <Link to='/login' style={{color:"white", textDecoration:"none"}}><li>Login</li> </Link>
                        <Link to='/addbus' style={{color:"white", textDecoration:"none"}}><li>Addbus</li> </Link>
                        <Link to='/mybusses' style={{color:"white", textDecoration:"none"}}><li>My busses</li> </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
