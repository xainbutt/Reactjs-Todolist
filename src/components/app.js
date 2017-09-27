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
    }

    addTaskInList(data){
        this.setState(prevState => ({
            taskList: prevState.taskList.concat(data)
        }));
    }

    render(){
        return(
            <div>
                <Header />
                <TaskInput onSubmit={this.addTaskInList}/>
                <TaskList tasks={this.state.taskList}/>
            </div>
        );
    }
}

