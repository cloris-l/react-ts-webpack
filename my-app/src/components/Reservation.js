import React ,{Component} from 'react'
class Reservation extends Component{
    constructor(props){
        super(props)
        this.state ={
            isGoing:true,
            numberOfGuest:2
        }
    }
    handleInputChange(e){
        const target = e.target;
        const value = target.name==='isGoing'?target.checked:target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <form>
                <label>参与：
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange = {(e)=>this.handleInputChange(e)}/>
                </label>
                <br/>
                <label>
                    来宾人数：
                    <input name="numberOfGuest" type="number" value = {this.state.numberOfGuest} onChange = {(e)=>this.handleInputChange(e)}/>
                </label>
            </form>
        )
    }
}
export default Reservation