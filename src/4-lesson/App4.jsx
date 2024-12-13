import { Component } from "react";

const style_wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
};

class App4 extends Component {
    constructor () {
        super ();
        this.state ={
            fighters:[
                {
                    id:1,
                    full_name:"Khabib Nurmugamedov",
                    age:"Age:32",
                    weight:"lightweight",
                    goals:["world sambo champion 2 times","UFC champion"]
                },
                {
                    id:2,
                    full_name:"Henry Sehudo",
                    age:"Age:30",
                    weight:"Bantamweight",
                    goals:["Olympic champion","UFC champion in 2 weightclass"]
                },
                {
                    id:3,
                    full_name:"Daniel Cormier",
                    age:"Age:36",
                    weight:"Heavyweight",
                    goals:["Olympic champion","UFC champion in 2 weightclass"]
                },
            ],
        };
    }
    render () {
      return (
       <div style={style_wrapper}>
        <h1>Fighters</h1>
        {this.state.fighters.map(({id, full_name, age, weight, goals})=>{
            return(
                <div key={id}>
                    <h1>{full_name}</h1>
                    <h2>{weight}</h2>
                    <h3>{age}</h3>
                    <h3>
                        {goals.map((value, index)=>{
                            return <span key={index}>#{value}</span>;
                        })}
                    </h3>
                </div>
            )
        })}
       </div>
      )
    }
}export default App4

