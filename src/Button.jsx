import { Component } from "react";

function plus (){
    return 2+2
}

class Button extends Component{
    render() {
        return <button>Click me</button>
    }
}

export default Button;
export {plus};