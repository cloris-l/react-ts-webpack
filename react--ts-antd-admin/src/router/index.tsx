import { ReactNode ,lazy} from "react";
// import Login from "../pages/Login";
const Login = lazy(()=>import('../pages/Login'))
const Page404 = lazy(()=>import('../pages/Page404'))
const Home  = lazy(()=>import('../pages/home/Index'))
const UserList  = lazy(()=>import('../pages/user/UserList'))
const UserDetail = lazy(()=>import('../pages/user/UserDetail'))
export interface IRouter{
    title:string
    key:string
    path:string
    exact?:boolean
    component?:ReactNode
    children?:IRouter[]
    icon?:ReactNode
}

export const unAuthorRouter:IRouter[] = [
    {
        title:'login',
        key:'login',
        path:'/login',
        component:<Login/>
    },
    {
        title:'404',
        key:'404',
        path:'*',
        component:<Page404/>
    }
]

export const router:IRouter[]  = [
    {
        title:'home',
        key:'home',
        path:'/admin/home',
        component:<Home/>
    },
    {
        title:'user',
        key:'user',
        path:'/admin/user',
        component:<UserList/>,
        children:[
            {
                title:'user detail',
                key:'userDetail',
                path:'/admin/user/detail',
                component:<UserDetail/>
            }
        ]
    },
]
