import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../actions/index';


class Tasks extends Component {
    toggleTask = (id) =>{
        this.props.toggleTask(id);
    }
    renderList(){
        if(this.props.tasks.length === 0){
            return <div>Loading...</div>;
        }
    
        return(
            this.props.tasks.map(task => {
                const stil = task.checked?'line-through':'none';
                return(
                    <div className="ui inverted divider" key={task.title}>
                            <input 
                                type="checkbox" 
                                name="example"
                                onChange={() => this.toggleTask(task.id)}
                                checked={task.checked}                                 
                                />
                            <label style={{textDecoration:`${stil}`}}>{task.title}</label>
                    </div>
                );
            })
        )
        
    }

    renderCount(){
        if(this.props.tasks.length>0){
            return `You have ${this.props.tasks.length} task(s) to do. `;
        }
    }

    render(){
        console.log(this.props.tasks)
        return (
            <div className="ui inverted segment">
                <p>{this.renderCount()}</p>
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{tasks:state.task }
}
export default connect(mapStateToProps,{toggleTask})(Tasks);