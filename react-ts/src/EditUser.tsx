import React,{Component} from "react";
import { Modal,Form,Input ,Button, FormInstance } from 'antd';
interface User{
    id:number
    name:string
}
interface IProp{
    visiable:boolean
    user?:User
    callback:(visiable:boolean,user?:User)=>void

}
export default class EditUser extends Component<IProp,any>{
    constructor(props:IProp,context:any){
        super(props)
    }
    formRef = React.createRef<FormInstance>()
    handleOk = ()=>{

    }
    handleCancel = ()=>{
        this.props.callback(false,this.props.user)
    }
    saveUser = (user?:any)=>{
        this.props.callback(false,{...this.props.user,...user})
    }
    render(){
        this.formRef.current?.setFieldsValue({
            ...this.props.user
        })
        return(
            <>
                <Modal title="Basic Modal" visible={this.props.visiable} onOk={this.handleOk} onCancel={this.handleCancel} footer ={false}>
                    <Form
                        ref={this.formRef}
                        initialValues={{...this.props.user}}
                        onFinish = {this.saveUser}
                    >
                        <Form.Item name="name" label="name" shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}>
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}