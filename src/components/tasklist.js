import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task';


export default class TaskList extends React.Component{
    constructor(props){
        super(props);
       
        this.deleteTask = this.deleteTask.bind(this);
        this.udpateTask = this.udpateTask.bind(this);
    }

    
    deleteTask(data){
        this.props.onDeleteTask(data);
    }

    udpateTask(data){
        console.log('updating a task');
        console.log(data);
        // call app parent function
        this.props.onUpdateTask(data);
    }


    render(){
       return(
           
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Tasks for today</h3>
                </div>
                    <div className="panel-body">
                        {this.props.tasks.map(task => <Task onClick={this.deleteTask} onUpdate={this.udpateTask} onStrike={this.strikeTask}  key={task} task={task} />)}
                        
                    </div>
                </div>
           
       );
        
    }
}