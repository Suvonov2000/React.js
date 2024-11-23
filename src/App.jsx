import { Component } from "react";

var user = {
name:"umidjon",
surname:"suvonov",
};

class App extends Component {
  render () {
    return <div>2 + 2 = {2+2}
    <h1 className="red_color">{user.name}</h1>
    <h1>{user.surname}</h1>
    <div className="round"></div>
    </div>
  }
}

export default App;