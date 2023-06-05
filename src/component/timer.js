import React,{Component} from "react";

export default class Timer extends Component{

    constructor(){
        super();
        this.state={
            timer:0,
            interval:null,
        }
    }

    componentDidMount(){
        this.setState({
            interval:setInterval(
                ()=>this.setState({timer:this.state.timer+1}),
                1000
            )
        })
    }

    render(){
        return(<div className="timer">timer is at {this.state.timer} </div>)
    }
}