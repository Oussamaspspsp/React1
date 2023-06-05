import React,{Component} from "react";
import Profile from "./component/profile";
import Timer from "./component/timer";

class App extends Component{
  constructor(){
    super();
    this.state={
      show: false
    }
  }

render(){
  const showProfile=()=>{
    this.setState({show:!this.state.show})
  }
  return(
  <div>
    <button onClick={showProfile}> {this.state.show ? "Hide Profile":"Show Profile"}{" "}</button>
    {this.state.show && <Profile />}
    <Timer />
  </div>)
}
}

export default App






// import React, { useState } from 'react';
// // import './style.css';


// function App() {
//   const [show, setShow] = useState(false)
//   const [mycolor, setMycolor] = useState("red")

//   const showHandler =() => {
//     setShow(!show)
//   }

//   const colorHandler=()=>{
//     if (mycolor==="red"){
//       setMycolor("green")
//     }else if (mycolor==="green"){
//       setMycolor("red")
//     }
//   }

//   return (
//     <div className='body'>
//       <br />
//       <button onClick={colorHandler}> Change color </button>
//       {show && <p style={{color:mycolor}}>Hello </p>}
//     </div>
//   )
// }

// export default App;
