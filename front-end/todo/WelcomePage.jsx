import React,{ Component } from "react";
import {Link} from 'react-router-dom';
import HelloWorldService from "../../api/todo/HelloWorldService.js";

class WelcomePage extends Component{
    constructor(props){
        super(props)         
    }
    render(){
        return(
            <>
        <div className="container">
            <h1>Welcome {this.props.match.params.name}!</h1>
            To manage your todos <Link to="/todos">here</Link>.
            </div>
            </>
        );
    }
}
export default WelcomePage
