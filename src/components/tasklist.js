import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task';


export default class TaskList extends React.Component{
    constructor(props){
        super(props);
       
        this.deleteTask = this.deleteTask.bind(this);
    }

    
    deleteTask(data){
        this.props.onDeleteTask(data);
    }


    render(){
       return(
           <div className="col-md-8 col-md-offset-2" style={{ marginTop: '50px'}}>
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Tasks for today</h3>
                </div>
                    <div className="panel-body">
                        {this.props.tasks.map(task => <Task onClick={this.deleteTask} onStrike={this.strikeTask}  key={task} task={task} />)}
                        
                    </div>
                </div>
           </div>
       );
        
    }
}