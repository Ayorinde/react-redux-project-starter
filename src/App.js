import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
    <div className="jumbotron">
      <div className="container text-center">
          <h1>Time-T App.js</h1>
          <p><small>Time management app for students</small></p>
          <p>It manages your timetable, events, todos, anouncements, etc.</p>
          <p><a className="btn btn-primary btn-lg" href="signupin.html" role="button">Let's get started</a></p>
      </div>
    </div>   
    );
  }
}

export default App;