import React,{Component} from "react";
import {Button} from 'antd'
interface Iprop{
    id:number
    callback:(id:number)=>void
}
export default class DeleteUser extends Component<Iprop,any>{
    deleteUser = ()=>{
        //发起网络请求,成功之后  调用回调函数
        this.props.callback(this.props.id)

    }
    render(){
        return(
            <>
                <Button danger onClick = {this.deleteUser}>删除</Button>
            </>
        )
    }
}