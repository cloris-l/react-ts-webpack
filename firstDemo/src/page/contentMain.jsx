
import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function contentMain (props){
    return(
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Content>{props.children}</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}
export default contentMain