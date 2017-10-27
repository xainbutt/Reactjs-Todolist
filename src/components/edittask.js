import React from 'react';



export default class EditTask extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            task: this.props.task
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        console.log(e.target.value);
        this.setState({task: e.target.value});
    }
    
    render(){
        return(
            
                <form onSubmit={this.updateTask} >
                    <input type="text" className="form-control" value={this.state.task} style={{ marginBottom: '15px'}} onChange={this.handleInput} />
                    <button type="submit" className="btn btn-primary">Update Task</button>
                </form>
    
        );
    }
}









