import React, {Component} from 'react';
import ListItemAy from './ListItemAy';
export default class ListAy extends Component{
    render(){
        const toRet = this.props.list.map(function(item,index,arr)
        {
            return <ListItemAy item={item} key={index} />
        })
        return (
            <ul>
                {toRet}
            </ul>
        )
    }
}