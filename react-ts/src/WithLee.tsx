import React,{Component,ComponentType} from "react";
function withLee<T>(Wrap:ComponentType<T>):ComponentType<T>{
    return class extends Component<T>{
        render(){
            return <Wrap {...this.props}/>
        }
    }
}
interface IProps{
    name:string  
}
class Lee extends Component<IProps>{
    render(){
        return(
            <>
                {this.props.name}
            </>
        )
    }
}
export default withLee<IProps>(Lee)