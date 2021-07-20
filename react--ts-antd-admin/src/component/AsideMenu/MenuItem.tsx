import React,{Component} from 'react';
import {  Menu } from 'antd';
import {Link} from 'react-router-dom'
import { LaptopOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
interface IMenu{
    title:string
    children?:IMenu[]
    path:string
    key:string
    icon?:string 
}
interface IProps{
    menuItem:IMenu
}
export default class MenuItem extends Component<IProps,any>{
    render(){
        const {menuItem} = this.props;
        console.log(menuItem,'menuItem')
        console.log('111')
        // if(menuItem.children){
        //     return(
        //         <SubMenu  key={menuItem.key} title={menuItem.title} icon={<LaptopOutlined />}>
        //             {
        //                 menuItem.children.map(child=>{
        //                     return <MenuItem menuItem={child}  key={child.key} />
        //                 })
        //             }
        //         </SubMenu>
        //     )
        // }else{
        //     return(
        //         <Menu.Item key={menuItem.key}  title={menuItem.title} icon={<LaptopOutlined />}>
        //             <Link to={menuItem.path}>{menuItem.title}</Link>
        //         </Menu.Item>
        //     )
        // }
        return(
            <Menu.Item key={menuItem.key}  title={menuItem.title} icon={<LaptopOutlined />}>
                <Link to={menuItem.path}>{menuItem.title}</Link>
            </Menu.Item>
        )
    }
}