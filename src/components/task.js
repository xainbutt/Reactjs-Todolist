import React from 'react';


export default class Task extends React.Component{
    
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(task){
        console.log(this.props);
        this.props.onClick(task);
        console.log('delete method in Task');
    }
    
    render(){
        return(
            <h4 key={this.props.task}>{this.props.task} <span onClick={this.delete(this.props.task)} className='glyphicon glyphicon-remove pull-right'></span></h4>
        );
    }
}









