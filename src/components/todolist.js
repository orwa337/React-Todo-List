import React from 'react';

const todolist = (props) => {
  return (
    <div>
    <button id="list-item" className={props.missionclass}>{props.name}
      <span className="control-panel">
      <span onClick={props.completed} className={props.hidden}>&#x2611;</span>
      <span onClick={props.deleteclick}>&#x2612;</span>
      </span>
    </button>
    </div>
    );
}

export default todolist;