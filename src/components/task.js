import React from 'react';



export default class Task extends React.Component{
    
    constructor(props){
        super(props);
       
        this.delete = this.delete.bind(this);
    }

    delete(){
        // console.log(this.props);
        this.props.onClick(this.props.task);
    }
    
    
    render(){
        return(
            <div>
                <p>{this.props.task} <span onClick={this.delete} className="glyphicon glyphicon-remove pull-right task-remove"></span></p>
            </div>
        );
    }
}









