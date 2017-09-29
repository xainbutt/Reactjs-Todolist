import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './taskinput';
import TaskList from './tasklist';
import Header from './header';

export default class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {taskList: ['hello', 'world']}
        this.addTaskInList = this.addTaskInList.bind(this);
        this.removeTaskFromList = this.removeTaskFromList.bind(this);
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

    render(){
        return(
            <div>
                <Header />
                <TaskInput onSubmit={this.addTaskInList}/>
                <TaskList tasks={this.state.taskList} onStrikeTask={this.strikeTaskFromList} onDeleteTask={this.removeTaskFromList} />
            </div>
        );
    }
}

