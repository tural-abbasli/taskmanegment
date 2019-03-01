import React, { Component } from 'react';
import {connect} from 'react-redux';

import { pushTask } from '../actions/index';  

class Header extends Component {
    state={
        title:'',
        checked:false
    };
    onSubmit = (e)=>{
      e.preventDefault();
      this.props.pushTask(this.state);
    }
    render(){
        return (
            <form onSubmit={this.onSubmit} className="ui form">
                <div className="ui field">
                    <input 
                        type="text" placeholder="Enter task"
                        value={this.state.task}
                        onChange={(e)=> this.setState({title:e.target.value})}
                    />
                </div>
                <div className="middle aligned column">
                    <button type="submit">Add</button>
                </div>
            </form>
        );
    }
}

export default connect(null,{pushTask})(Header);