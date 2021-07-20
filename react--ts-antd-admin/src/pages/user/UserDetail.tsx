import React,{Component} from "react";
import { withRouter } from "react-router";
class UserDetail extends Component<any,any>{
    componentDidMount(){
        console.log('dddd')
        console.log(this.props)
        // setTimeout(()=>{
        //     this.props.history.goBack()
        // },5000)
    }
    render(){
        return(
            <>
                <h1>UserDetail</h1>
            </>
        )
    }
}
export default withRouter(UserDetail)