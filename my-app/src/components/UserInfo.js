import React from 'react'
import Avatar from './Avatar'
class UserInfo extends React.Component{
    render(){
        return(
            <div className="user-info">
                {/* {this.props.user} */}
                <Avatar user={this.props.user}/>
                <div className="user-name">{this.props.user.name}</div>
            </div>
        )
    }
}
// function UserInfo(props){
//     return(
//         <div className="user-info">
//             <Avatar user={props.user}/>
//             <div className="user-name">{props.user.name}</div>
//         </div>
//     )
// }
export default UserInfo