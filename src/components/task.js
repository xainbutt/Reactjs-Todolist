import React from 'react';



export default class Task extends React.Component{
    
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    delete(){
        this.props.onClick(this.props.task);
    }
    
    update(){
        this.props.onUpdate(this.props.task);
    }
    
    render(){
        return(
            <div>
                <p>{this.props.task}  <span onClick={this.delete} className="glyphicon glyphicon-remove pull-right task-remove"></span><span onClick={this.update} className='glyphicon glyphicon-edit pull-right task-update' ></span></p>
            </div>
        );
    }
}









