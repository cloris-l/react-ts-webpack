import React,{Component} from "react";
import { Route ,Switch} from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
export default class User extends Component<any,any>{
    render(){
        return(
            <>
                {/* user */}
                <Switch>
                    <Route path={"/user/list"}>
                        <UserList/>
                    </Route>
                    <Route path={"/user/detail"}>
                        <UserDetail/>
                    </Route>
                </Switch>
            </>
        )
    }
}