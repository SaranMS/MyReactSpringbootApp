import React,{ Component } from "react";
import Authenticate from "./Authenticate.js";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component{
    render(){
        const isUserLoggedIn = Authenticate.isUserLoggedIn();
        console.log(isUserLoggedIn)
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/SaranMS" className="navbar-brand">My GitHub</a></div>
                    <div><a href="https://www.linkedin.com/in/saran-ms" className="navbar-brand">My Linkedin</a></div>
                    <ul className="navbar-nav">
                         {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/test">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn &&<li><Link className="nav-link" to="/logout" onClick={Authenticate.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default withRouter(Header)