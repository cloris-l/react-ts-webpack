import React, { Component, Suspense } from 'react';
import './App.css';
// import UserList from './UserList';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import { router } from './router';
import { Menu, Layout } from 'antd';
import {
	PieChartOutlined,
	MailOutlined,
} from '@ant-design/icons';
import Lee  from './WithLee'
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class App extends Component<any, any>{
	render() {
		return (
			<Router>
				<Suspense fallback={<>loading</>} >
					<Layout>
						<Header>Header</Header>
						<Layout>
							<Sider>
								<div>
									<Menu
										defaultSelectedKeys={['1']}
										defaultOpenKeys={['sub1']}
										mode="inline"
										theme="dark"
									// inlineCollapsed={this.state.collapsed}
									>
										{
											router.map((r, index) => {
												if (!r.children) {
													return (
														<Menu.Item key={r.id} icon={<PieChartOutlined />}>
															<Link to={r.path}>{r.title}</Link>
														</Menu.Item>
													)
												}
												else {
													return (
														<SubMenu key={r.id} icon={<MailOutlined />} title={r.title}>
															{
																r.children.map((child, index) => {
																	return (
																		<Menu.Item key={child.id}>
																			<Link to={child.path}>{child.title}</Link>
																		</Menu.Item>
																	)
																})
															}

															{/* <Menu.Item key="9">Option 9</Menu.Item>
            								<Menu.Item key="10">Option 10</Menu.Item> */}
														</SubMenu>
													)
												}
											})
										}
									</Menu>
								</div>
							</Sider>
							<Content>
								<Switch>
									{
										router.map((r, index) => {
											if (r.children) {
												return (
													<Route path={r.path} key={r.id} exact={r.exact}>
														{r.component}
														<Switch key={r.id}>
															{
																r.children.map((child, index) => {
																	return (
																		<Route path={r.path} exact={child.exact} key={child.id}>
																			{child.component}
																		</Route>
																	)
																})
															}
														</Switch>
													</Route>
												)
											}
											else {
												return (
													<Route path={r.path} exact={r.exact} key={r.id}>
														{r.component}
													</Route>
												)
											}
										})
									}
								</Switch>
							</Content>
						</Layout>
						<Footer>
							<Lee name='Lee'/>
						</Footer>
					</Layout>
				</Suspense>

			</Router>

		);
	}
}
export default App;
