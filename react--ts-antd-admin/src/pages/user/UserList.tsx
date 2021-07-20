import React,{Component} from "react";
import {Table,Space,Button} from 'antd'
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'
interface User{
    id:number
    name:string
}
interface Istate{
    userList:User[]
    visiable:boolean
    user?:User
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
            userList : userList,
            visiable : false
        }
        
    }
    deleteUser = (id:number)=>{
        this.setState((state)=>({
            userList:state.userList.filter(user=>user.id!==id)
        }))
    }
    toggleShow = (visiable:boolean,user?:User)=>{
        this.setState({
            visiable:visiable,
            user:user,
            userList:this.state.userList.map((item,index)=>{
                if(user?.id===item.id)return user
                else return item
            })
        })
        // this.setState((state)=>({
        //     visiable :visiable,
        //     user:user,
        //     userList?:state.userList.map((item)=>{
        //         if(user?.id===item.id) return user
        //     })
        // }))
    }
    render(){
        return(
            <>
                <EditUser visiable = {this.state.visiable} callback={this.toggleShow} user={this.state.user}/>
                <Table dataSource={this.state.userList} rowKey="id">
                    <Table.Column title = "Id" dataIndex = "id"/>
                    <Table.Column title = "用户名" dataIndex = "name"/>
                    <Table.Column title ="操作" render = {(user:User)=>(
                        <Space>
                            <Button type="primary" onClick = {()=>{
                                this.toggleShow(true,user)
                            }}>编辑</Button>
                            <DeleteUser id={user.id} callback = {this.deleteUser}/>
                        </Space>
                    )}/>
                </Table>
            </>
        )
    }
}