import React, {Component} from 'react';
export default class ListAy extends Component{
    render(){
        const item = this.props.item;
        return (
            <li>{item.name} </li>
        )
    }
}