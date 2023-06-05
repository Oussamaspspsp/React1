import React,{Component} from "react";

class Profile extends Component{

    constructor(){
        super();
        this.state={
            fullName:'Oussama',
            Bio:"Language and History nerd, Musician",
            Profession:"CSR",
            imgUrl:"https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024",
        };
    }

    render(){
        return(<div>
            <h1>{this.state.fullName}</h1>
            <img src={this.state.imgUrl} alt='myPhoto' style={{width:'300px'}} />
            <h2>{this.state.Bio} </h2>
            <h3>{this.state.Profession} </h3>
        </div>)
    }
}

export default Profile