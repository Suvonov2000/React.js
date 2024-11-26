import { Component } from "react";
import Button from "./Button";
import {plus} from "./Button"



const user = {
  name:"Umidjon",
  surname:"Suvonov",
}

class App extends Component {
  render(){
    return <div>2+2={plus()}
    <h1 className="red_color">{user.name}</h1>
    <h1>{user.surname}</h1>
    <Button />
    <div className="round"></div>
    </div>
  }
}

export default App;