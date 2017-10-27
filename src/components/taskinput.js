import React from 'react';
import ReactDOM from 'react-dom';
import style from '../style.css';

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

        console.log(this.state.task);
        console.log('in form');
        this.props.onSubmit(this.state.task);
        this.setState({task: ''});
    }
    
    render(){
        return(
            
                <form onSubmit={this.addTask} >
                    <input type="text" className="form-control" value={this.state.task} style={{ marginBottom: '15px'}} placeholder="Enter Task" onChange={this.handleInput} />
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
    
        );
    }
}