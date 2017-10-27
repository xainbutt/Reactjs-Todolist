import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './taskinput';
import EditTask from './edittask';
import TaskList from './tasklist';
import Header from './header';

export default class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            taskList: ['hello', 'world'],
            isEdit: false,
            taskToUpdate: ''
        }
        this.addTaskInList = this.addTaskInList.bind(this);
        this.removeTaskFromList = this.removeTaskFromList.bind(this);
        this.showEditTask = this.showEditTask.bind(this);
        this.updateTaskInList = this.updateTaskInList.bind(this);
    }

    removeTaskFromList(data){
        // console.log(data);
        this.setState(prevState => ({
            taskList: prevState.taskList.filter(el => el != data )
        }));
    }

    addTaskInList(data){
        console.log(data);
        console.log(this.state.taskList);
        this.setState((prevState) => ({
            taskList: prevState.taskList.concat(data)
        }));
        console.log(this.state.taskList);
    }


    showEditTask(data){
        console.log('isEdit:' + this.state.isEdit);
        console.log('data:' + this.state.taskToUpdate);
       
        this.setState((prevState) => ({
           isEdit: true,
           taskToUpdate: data
       }));
       
    }

    updateTaskInList(data){
        console.log('in parent update');
    }

    render(){
        return(
            <div>
                <Header />
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                           {this.state.isEdit ? <EditTask key={this.state.taskToUpdate} task={this.state.taskToUpdate} /> : <TaskInput onSubmit={this.addTaskInList}/> }
                        </div>
                        <div className='col-sm-6'>
                            { this.state.taskList.length != 0 ?  <TaskList tasks={this.state.taskList} onStrikeTask={this.strikeTaskFromList} onUpdateTask={this.showEditTask} onDeleteTask={this.removeTaskFromList} /> : <div className='alert alert-info'>no tasks today</div> }     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

