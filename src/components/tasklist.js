import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task';


export default class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }
  
    deleteTask(e){
        console.log(e);
        console.log('delete method in TaskList');
        this.props.onDeleteTask(e);
    }


    render(){
       return(
           <div className="col-md-8 col-md-offset-2" style={{ marginTop: '50px'}}>
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Tasks for today</h3>
                </div>
                    <ul className="panel-body">
                        {this.props.tasks.map(task => <Task onClick={e => this.deleteTask} key={task} task={task} />)}
                        
                    </ul>
                </div>
           </div>
       );
        
    }
}