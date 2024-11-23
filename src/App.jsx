import { Component } from "react";
import Button from "./Button";
import {plus} from "./Button"

var user = {
name:"Umidjon",
surname:"Suvonov",
country:"Uzbekistan",
};

class App extends Component {
  render () {
    return <div>2 + 2 = {plus()}
    <h1 className="red_color">{user.name}</h1>
    <h1>{user.surname}</h1>
    <h1>{user.country}</h1>
    <Button />
    <div className="round"></div>
    </div>
  }
}

export default App;
