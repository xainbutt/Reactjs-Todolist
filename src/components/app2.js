import React from 'react';
import ReactDOM from 'react-dom';

export default class App2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            eventList: [{id : 1, date : "2014-04-18", event : 121.0, location: '2045 Lincoln Highway Edison,NJ 08817', 
                hours: [{hour_id: "hour1",date: "event",value: "455",
                            mins: [{min_id: 13,event: "event",min_type: "true"}]},
                        {hour_id: 2,date: "event", value: "455",
                            mins: [{min_id: 14,event: "min event",min_type: "true"}]}]}]
        }



        this.addTaskInList = this.addTaskInList.bind(this);
        this.removeTaskFromList = this.removeTaskFromList.bind(this);
        this.showEditTask = this.showEditTask.bind(this);
        this.updateTaskInList = this.updateTaskInList.bind(this);
    }


    render(){
        return(
            <div>
                
            </div>
        );
    }
}