import { Component } from "react";
import { Button } from "antd";

const style_wrapper_dark={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100vh",
    flexDirection:"column",
    backgroundColor:"black",
};
const style_wrapper_light={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100vh",
    flexDirection:"column",
    backgroundColor:"white",
};

const style_text_light={
    color:"#000",
};
const style_text_dark={
    color:"#fff",
};


class App4ex extends Component{
    constructor(){
        super();
        this.state={
            theme:"light"
        }
    }
    render() {
       const switchTheme =()=>{
        if (this.state.theme === "light")
        this.setState({
            theme:"dark"
        });
        else
            this.setState({
            theme:"light"  
            })
       }
        return(
           <div style={this.state.theme === "light"
            ?style_wrapper_light
            :style_wrapper_dark
           }>
            <h1 style={this.state.theme === "light"
                ?style_text_light
                :style_text_dark
            }>Hello</h1>
            <h3 style={this.state.theme === "light"
                ?style_text_light
                :style_text_dark
            }>{this.state.theme}

            </h3>
            <Button onClick={switchTheme}>switch to dark</Button>
           </div>
        )
    }
}
export default App4ex