import React,{ Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import Authenticate from "./Authenticate";
import moment from "moment";

class ListTodos extends Component{
    constructor(props){
        super(props)
        this.state={
            todo : [
               
            ],
            message : null
        }
        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.autoRefreshTodosPage = this.autoRefreshTodosPage.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    componentDidMount(){
        this.autoRefreshTodosPage()
    }

    autoRefreshTodosPage(){
        TodoDataService.retrieveAllTodos(Authenticate.getUserLoggedIn())
        .then(
            response => {
                //console.log(response)
                this.setState({
                    todo : response.data
                })
            }
        )
    }

    addTodo(){
        this.props.history.push(`/todos/-1`)
    }
    updateTodo(id){
        this.props.history.push(`/todos/${id}`)
    }
    deleteTodo(id){
        TodoDataService.deleteTodo(Authenticate.getUserLoggedIn(),id)
        .then(
            response => {
                this.setState({
                    message : `Deleted Todo number ${id}`
                })
                this.autoRefreshTodosPage()
            }
        )
        
    }
    render(){
        return(
            <div className="container">
                <h1 className= "container">My Todos</h1>
                {this.state.message && <div className="alert alert-danger">{this.state.message}</div>}
            <table className="table" align = 'center'>
                <thead>
                    <tr>
                        <th>todo</th>
                        <th>target</th>
                        <th>done?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todo.map(
                            todo =>
                    <tr key={todo.id}>
                        <th>{todo.description}</th>
                        <th>{moment(todo.targetDate).format('DD-MM-YYYY').toString()}</th>
                        <th>{todo.done.toString()}</th>
                        <th><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></th>
                        <th><button className="btn btn-danger" onClick={() => this.deleteTodo(todo.id)}>Delete</button></th> 
                    </tr>
                        )
                    }
                    
                    </tbody>
            </table>
            <div className="container">
                <button className="btn btn-success" onClick={this.addTodo}>Add Todo</button>
            </div>
            </div>
        )
    }
}
export default ListTodos