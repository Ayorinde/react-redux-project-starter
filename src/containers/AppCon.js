import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import * as actionCreators from './../actions';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PopulateRoute from '../components/PopulateRoute';

class AppCon extends Component {
    constructor(props){
        super(props);
    } 
    componentDidMount(){
      this.props.getSchools();
    }
    render() {    
    
    return (<div className="container text-center">

  
        <Switch>    
            <PopulateRoute exact path="/" schools={this.props.schools} ay={'Ayorinde Kudoro'} component={HomePage} />  
            <Route path="/about" component={AboutPage} />
        </Switch>
     </div>);
  }
}
 
function mapStateToProps(state)
{
  return{
    schools: state.schRed.get('schools'),
  }
}
function mapDispatchToProps(dispatch)
{
  return bindActionCreators(actionCreators,dispatch)
}
AppCon = withRouter(connect(mapStateToProps,mapDispatchToProps)(AppCon));

export default AppCon;
