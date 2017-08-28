import React, { Component } from 'react';
import ToDoListElement from './ToDoListElement';

class ToDoList extends Component {
  render() {
    const toDoEls = this.props.data.map((toDoEl, i) => {
      return <ToDoListElement id={i} descr={toDoEl} key={i} onClick={this.props.onClick} />
    });
    return (
      <div className='to-do-list'>
        <h3>Things to do:</h3>
        <ul>
         {toDoEls}
        </ul>        
      </div>
    );
  }
}

export default ToDoList;
