import {Component} from 'react'
interface Istate{
    width:number
}
export default class State extends Component<any,Istate>{
    constructor(props:any,context:any){
        super(props,context)
        this.state = {
            width:500
        }
    }
    change = ()=>{
        this.setState((state)=>({
            width : state.width + 10
        }))
    }
    test(){
        console.log('sss')
        this.setState((state)=>({
            width : state.width + 10
        }))
    }
    render(){
        return(
            <>
               <div
                style = {{
                    width:`${this.state.width}px`,
                    backgroundColor:'red'
                }}
               >
                   state
                </div> 
                {/* <button onClick={()=>this.test()}>change</button> */}
                <button onClick={this.change}>change</button>
            </>
        )
    }
}