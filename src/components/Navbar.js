import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-links">
               <nav><Link to='/' ><h3 >Home</h3></Link>
                    <ul className="nav-links">
                        <Link to='/login'><li>Login</li> </Link>
                        <Link to='/addbus'><li>addbus</li> </Link>
                        <Link to='/mybusses'><li>my busses</li> </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
