import React from 'react';
import ReactDOM from 'react-dom';

export default class TaskInput extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {task: ''}
        this.handleInput = this.handleInput.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleInput(e){
        this.setState({task: e.target.value});
    }

    addTask(e){
        e.preventDefault();
        this.props.onSubmit(this.state.task);
    }
    
    render(){
        return(
            <div className="col-md-8 col-md-offset-2">
                <form onSubmit={this.addTask} >
                    <input type="text" className="form-control" value={this.state.task} style={{ marginBottom: '15px'}} placeholder="Enter Task" onChange={this.handleInput} />
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
            </div>
        );
    }
}