import React,{Component} from 'react'
class ItemList extends Component{
    
    render(){
        const {number} = this.props;
        // const listItems = number.map((item)=><li key={item.toString()}>{item}</li>)
        return(
            <ul>{number.map((item)=><li key={item.toString()}>{item}</li>)}</ul>
        )
    }
}
export default ItemList