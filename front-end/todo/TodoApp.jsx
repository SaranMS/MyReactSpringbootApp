import React, {Component} from 'react';
import './TodoApp.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginPage from './LoginPage.jsx';
import Header from './Header.jsx';
import ListTodos from './ListTodos.jsx';
import WelcomePage from './WelcomePage.jsx';
import Footer from './Footer.jsx';
import Logout from './Logout.jsx';
import Error from './Error.jsx';
import TodoComponent from './TodoComponent';

export default class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
               <Router>
                   <>
                   <Header/>
                   <Switch>
                   <Route path="/"exact component={LoginPage}/>
                   <Route path="/login" component={LoginPage}/>
                   <AuthenticatedRoute path="/welcome/:name" component={WelcomePage}/>
                   <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                   <AuthenticatedRoute path="/todos" component={ListTodos}/>
                   <AuthenticatedRoute path="/logout" component={Logout}/>
                   <Route component={Error}/>
                   </Switch>
                   <Footer/>
                   </>
               </Router>
            </div>
        );
    }
}
