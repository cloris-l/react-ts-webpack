import React,{Component,createRef} from "react";
import {Form,FormInstance,Input ,Button,Space} from 'antd'
import '../static/css/login.css'
import {loginReq} from '../API/login'
export default class Login extends Component<any,any>{
    constructor(props:any,context:any){
        super(props)
    }
    formRef = createRef<FormInstance>()
    login = (form:any)=>{
        loginReq(form).then(res=>{
            if(res.data.code===0){

            }
        })
    }
    render(){
        return(
            <div id="login">
                <Form
                id="login-form"
                    ref= {this.formRef}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                >
                    <Form.Item 
                        label="用户名" name="name"
                        rules = {
                            [{
                                type:'string',
                                required:true
                            }]
                        }
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item 
                        label="密码" name="password"
                        rules = {[{
                            type:'string',
                            required:true
                        }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                            登录
                            </Button>
                            <Button type="primary" htmlType="reset">
                            重置
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
