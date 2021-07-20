import { ReactNode ,lazy} from "react";
const Home  = lazy(()=>import('../pages/Home'))
const User  = lazy(()=>import("../pages/User"))
const UserList = lazy(()=>import('../pages/UserList'))
const UserDetail = lazy(()=>import('../pages/UserDetail'))
interface IRoute{
    id:number
    path:string
    exact?:boolean
    title:string
    component?:ReactNode
    children?:IRoute[]
}
export const router:IRoute[] = [
    {
        id:1,
        path:'/',
        exact:true,
        title:'home page',
        component:<Home/>
    },
    {
        id:2,
        path:'/user',
        title:'user page',
        component:<User/>,
        children:[
            {
                id:3,
                path:'/user/list',
                title:'user list page',
                exact:true,
                component:<UserList/>,
            },
            {
                id:4,
                path:'/user/detail',
                title:'user detail page',
                exact:true,
                component:<UserDetail/>
            }
        ]
    }
    
]