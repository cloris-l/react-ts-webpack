import React,{Component, Suspense} from "react";
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import {router , unAuthorRouter,IRouter} from '../router'
import AppLayout from '../component/AppLayout'
export default class View extends Component<any,any>{
    generateSwitch = (router:IRouter[])=>{
        return(
            {
                
            }
        )

    }
    render(){
        return(
            <Router>
                <Suspense fallback={<></>}>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to={'/admin/home'}/>
                        </Route>
                        <Route path="/admin">
                            <AppLayout>
                                {
                                    router.map((r=>{
                                        return(
                                            <Route path={r.path} key={r.key} exact={r.exact}>
                                                {r.component}
                                            </Route>
                                        )
                                    }))
                                }
                            </AppLayout>
                            
                        </Route>
                        {
                            unAuthorRouter.map((r=>{
                                return(
                                    <Route path={r.path} key={r.key} exact={r.exact}>
                                        {r.component}
                                    </Route>
                                )
                            }))
                        }
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}