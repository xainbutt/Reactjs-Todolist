import React from 'react';



export default class EditTask extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            task: this.props.task
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        console.log(e.target.value);
        this.setState({task: e.target.value});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.updateTask(this.state.task, this.props.task);
        this.setState({task: ''});
    }
    render(){
        return(
            
                <form onSubmit={this.handleSubmit} >
                    <input type="text" required autoFocus className="form-control" value={this.state.task} style={{ marginBottom: '15px'}} onChange={this.handleInput} />
                    <button type="submit" className="btn btn-primary">Update Task</button>
                </form>
    
        );
    }
}









