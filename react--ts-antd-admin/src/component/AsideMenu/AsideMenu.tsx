import React, { Component ,ReactNode} from "react";
import { Menu ,Layout} from 'antd';
import {router,IRouter} from "../../router";
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;
// interface IRouter{
//     title:string
//     key:string
//     path:string
//     exact?:boolean
//     component?:ReactNode
//     children?:IRouter[]
//     icon?:ReactNode
// }
class AsideMenu extends Component<any, any>{
    generateMenu = (routerList:IRouter[])=>{
        return(
            <>
                {
                    routerList?.map(r=>{
                        console.log(r,'r')
                        if(r.children){
                            return(
                                <SubMenu  key={r.key} title={r.title} icon={r.icon}>
                                    {this.generateMenu(r.children)}
                                </SubMenu>
                            )
                        }else {
                            return(
                                <Menu.Item key={r.key}  title={r.title} icon={r.icon}>
                                    <Link to={r.path}>{r.title}</Link>
                                </Menu.Item>
                            )
                        }
                    })
                }
            </>
        )
    }
    render() {
        return (
            <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {/* <Menu.Item key="home"  icon={<LaptopOutlined />} title="home">
                                <Link to="/admin/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="user"  icon={<LaptopOutlined />} title="home">
                                <Link to="/admin/user/list">用户列表</Link>
                            </Menu.Item> */}
                            
                            {this.generateMenu(router)}
                        </Menu>
            </Sider>
        )
    }
}
export default AsideMenu