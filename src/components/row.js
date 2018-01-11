import React from 'react';



export default class Row extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            rowData: this.props.row
        }
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }
    
    render(){
        return(
            <tr>
                <td>{this.props.row.}</td>
                <td></td>
                <td></td>
            </tr>
        );
    }
}









