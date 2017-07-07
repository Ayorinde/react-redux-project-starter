import React, { Component } from 'react';
import ListAy from '../components/ListAy';

class HomePage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div className="jumbotron">
      <div className="container text-center">
          <h1>App Name</h1>
          <p><small>app tag line</small></p>
          <p>App description.</p>
          <ListAy list={this.props.schools} />
      </div>
    </div>   
    );
  }
}

export default HomePage;