import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import Todolist from './components/todolist.js';

class App extends Component {
  state = {
    missions: [
    ],
    term: ''
  };

  changeHandler = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  clickHandler = (event) => {
    this.setState((prevState) => {
      return {missions: [...prevState.missions,{name:this.state.term, done: false}],
              term: ''};
    });
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.clickHandler();
    }
  }

  completedHandler = (index) => {
    const missions = [...this.state.missions];
    missions[index].done = true;
    this.setState({missions: missions});
  }

  deleteHandler = (index) => {
    const missions = [...this.state.missions];
    missions.splice(index, 1);
    this.setState({missions: missions});
  }

  render() {
      let ourmissions = null;
      ourmissions = (
        <div>
          {this.state.missions.map((mission, index) => {
            return <Todolist  name={mission.name}
                              key={index}
                              missionclass = {(mission.done === true) ? 'btn btn-success' : 'btn btn-warning'}
                              hidden={(mission.done === true) ? 'hidden' : ''}
                              completed={() => { this.completedHandler(index)}}
                              deleteclick={() => { this.deleteHandler() }}
                              />
          })}
               
        </div>
      );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>
          My React to do list.
        </h1>
        <Form change={this.changeHandler.bind(this)}
              click={() => { this.clickHandler() }}
              clear={this.state.term}
              keypress={this._handleKeyPress}/>
        {ourmissions}
      </div>
    );
  }
}

export default App;
