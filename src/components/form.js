import React from 'react';

const form = (props) => {
  return (
    <div>
  <input type="text" name="firstname" onChange={props.change} value={props.clear} onKeyPress={props.keypress}/>
  <button type="submit" onClick={props.click} value="Submit">Add</button>
    </div>
    );
}

export default form;