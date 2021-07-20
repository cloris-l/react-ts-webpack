import React , {Component} from 'react'
import BoilingVerdict from './BoilingVerdict'
class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            tempareture:''
        }
    }
    handelInputChange(e){
        this.setState({
            tempareture:e.target.value
        })
    }
    render(){
        const {tempareture} = this.state; 
        return(
            <fieldset>
                <legend>Enter tempareture in celsius</legend>
                <input value = {tempareture} onChange = {(e)=>this.handelInputChange(e)}/>
                <BoilingVerdict celsius={parseInt(tempareture)}/>
            </fieldset>
        )
    }
}
export default Calculator