import { Button } from "antd";
import { Component } from "react";
   
    class Apprei extends Component {
        constructor() {
            super();
            this.state={
                status:"initial"
            }
        }
        render(){
            const attempt = ()=>{
                const age = prompt("Yoshingizni kiriting")
                if(age >= 18){
                    this.setState({status:"eligable"})
                }else{
                    this.setState({status:"non-eligable"})
                }
            }
          
            return(
               <div>
                {
                    this.state.status === "initial"
                    ?<Button onClick={attempt}>Kirish</Button>
                    :this.state.status === "eligable"
                    ?<h3>Kirish mumkin</h3>
                    :<h3>Kirish mumkin emas</h3>
                }
               </div>
            )
        }
    }

export default Apprei