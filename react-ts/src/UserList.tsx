import React,{Component} from "react";
import {Table,Space,Button} from 'antd'
import DeleteUser from './DeleteUser'
interface User{
    id:number
    name:string
}
interface Istate{
    userList:User[]
}
export default class UserList extends Component<any,Istate>{
    constructor(props:any,context:any){
        super(props,context)
        let userList :User[] = []
        for(let i=1;i<10;i++){
            userList.push({
                id:i,
                name:`name${i}`
            })
        }
        this.state = {
            userList : userList
        }
    }
    deleteUser = (id:number)=>{
        this.setState((state)=>({
            userList:state.userList.filter(user=>user.id!==id)
        }))
    }
    render(){
        return(
            <>
                <Table dataSource={this.state.userList} rowKey="id">
                    <Table.Column title = "Id" dataIndex = "id"/>
                    <Table.Column title = "用户名" dataIndex = "name"/>
                    <Table.Column title ="操作" render = {(user:User)=>(
                        <Space>
                            <Button type="primary">编辑</Button>
                            <DeleteUser id={user.id} callback = {this.deleteUser}/>
                        </Space>
                    )}/>
                </Table>
            </>
        )
    }
}