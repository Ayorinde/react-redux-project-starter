import React from 'react';
import {Route} from 'react-router-dom';



export default class PopulateRoute extends React.Component{
    
    render(){ 
        const {component:Component, ...rest} = this.props;
        return (<div>
            <Route {...rest} render={props =>(<Component {...this.props}  />) } />
        </div>);

    }

}
