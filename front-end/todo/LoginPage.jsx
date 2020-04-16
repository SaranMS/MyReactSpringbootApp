import React,{ Component } from "react";
import Authenticate from "./Authenticate.js";
import TodoDataService from "../../api/todo/TodoDataService.js";

class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "test",
            password : "",
            hasLoginFailed : false,
            isSuccess : false
        }
        this.handleStateChange = this.handleStateChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleStateChange(event){
        this.setState(
            {[event.target.name] : event.target.value }

        )
    }
    loginClicked(){
        TodoDataService.basicAuthFromBackEnd(this.state.name,this.state.password)
        .then(
            ()=>{
                Authenticate.registerSuccesfulLogin(this.state.name,this.state.password)
                this.props.history.push(`/welcome/${this.state.name}`)
            }
        )
        .catch(
            ()=>{
            this.setState({hasLoginFailed : true })
            this.setState({isSuccess : false })
            }
        )
    }
    render(){
        return(
            
            <div className="container">
                <h1>Login</h1>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials mate.!!</div>}
                {this.state.isSuccess && <div>Success.!!!</div>}
                User name: <input type="text" name="name" value={this.state.name} onChange={this.handleStateChange}/>
                <br/><br/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleStateChange} />
                <br/><br/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        );
    }

}
export default LoginPage