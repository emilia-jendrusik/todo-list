import React, { Component } from 'react';
import ToDoListElement from './ToDoListElement';

class ToDoList extends Component {
  render() {
    const toDoEls = this.props.data.map((toDoEl, i) => {
      const elText = toDoEl.data.map((elText, i) => {
          return <ToDoListElement key={i} day={toDoEl.daynum} id={i} descr={elText} onClick={this.props.onClick} onMove={this.props.onMove} />
      })
      const dayText = elText.length ? <h4>{toDoEl.dayName}</h4> : null;
      return (
        <div key={i}>
            {dayText}
            {elText}
        </div>
      ) 
    });
    return (
      <div className='to-do-list'>
        <h3>Things to do:</h3>
        <div>
         {toDoEls}
        </div>  
      </div>
    );
  }
}

export default ToDoList;
