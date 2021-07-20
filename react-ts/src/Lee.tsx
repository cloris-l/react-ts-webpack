import React,{Component} from "react";
interface User{
    age:number
}
interface Iprops{
    name:string
    user?:User
}
export default class Lee extends Component<Iprops,any>{
    render(){
        return(
            <>
                <h1>Lee</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.props.user?.age}</h1>
            </>
        )
    }
}