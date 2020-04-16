import React,{ Component } from "react";
import moment from "moment";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import Authenticate from "./Authenticate";

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            description : "",
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit= this.onSubmit.bind(this)
        this.validate= this.validate.bind(this)
    }

    componentDidMount(){
        if(this.state.id===-1){
            return
        }
        TodoDataService.retrieveTodo(Authenticate.getUserLoggedIn(),this.state.id)
        .then(response =>this.setState({
            description : response.data.description,
            targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }
    validate(values){
        let errors = {}
        if(!values.description){
             errors.description = "Please Enter Description to continue."
        }else if(values.description.length<5){
            errors.description = "Minimum characters for description is 5"
        }
        if(!moment(values.targetDate).isValid){
            errors.targetDate = "Invalid Date"
        }
        return errors
    }
    onSubmit(values){
        let todo ={
                id : this.state.id,
                description : values.description,
                targetDate : values.targetDate
        }
        if(this.state.id===-1){
            TodoDataService.addTodo(Authenticate.getUserLoggedIn(),todo).then(() => this.props.history.push(`/todos`))
        }else{
        TodoDataService.updateTodo(Authenticate.getUserLoggedIn(),this.state.id,todo).then(() => this.props.history.push(`/todos`))
    }
    }

render(){
    return(
    <>
        <h1>Todo</h1>
        <div className="container">
            <Formik 
             initialValues={{
                 description : this.state.description,
                 targetDate : this.state.targetDate
             }}
             onSubmit={this.onSubmit}
             validate={this.validate}
             enableReinitialize ={true}
            >{
                (props)=>(
                     <Form>
                         <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                         <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                        <fieldset className="form-group">
                            <label>description</label>
                            <Field className="form-control" type="text" name="description"></Field>
                        </fieldset>
                        <fieldset className="form-group">
                        <label>Target Date</label>
                        <Field className="form-control" type="date" name="targetDate"></Field>
                        </fieldset>
                        <button className= "btn btn-success">Submit</button>
                    </Form>
                )
                    }
            </Formik>
            </div>
        
    </>
    )
}
}
export default TodoComponent