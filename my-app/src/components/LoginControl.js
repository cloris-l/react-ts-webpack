import React,{Component} from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';
class LoginControl extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : false,
            unreadMessages:this.props.unreadMessages
        }
    }
    handelLoginClick(){
        this.setState({
            isLoggedIn:true
        })
    }
    handelLogoutClick(){
        this.setState({
            isLoggedIn:false
        })
    }
    render(){
        const {isLoggedIn,unreadMessages} = this.state;
        let button;
        if(isLoggedIn)button = <LogoutButton onClick={()=>this.handelLogoutClick()} />
        else button = <LoginButton onClick={()=>this.handelLoginClick()}/>
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
                <div>
                    <h1>Hello!{unreadMessages}</h1>
                    
                    {unreadMessages.length>0&&
                        <h2>You have {unreadMessages.length} messages</h2>
                    }
                </div>
            </div>
        )
    }
}
export default LoginControl