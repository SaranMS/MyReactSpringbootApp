import React,{ Component } from "react";
import Authenticate from "./Authenticate.js";
import { Redirect, Route} from "react-router-dom";

class AuthenticatedRoute extends Component{

    render(){

            if(Authenticate.isUserLoggedIn()){
             return <Route {...this.props}/>
        }
        else{
            
            return <Redirect to="/login" />
        }

}
}

export default AuthenticatedRoute