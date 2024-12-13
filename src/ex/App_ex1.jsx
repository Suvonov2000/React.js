import { Component } from "react";

const style_wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
};


class App_ex1 extends Component {
    constructor() {
        super();
        this.state = {
            people: [
                {
                    id: 1,
                    name:"John",
                    age:30,
                    skill:"React",
                    tags: ["React","JavaScript"],
                },
                {
                    id: 2,
                    name:"Doe",
                    age:33,
                    skill:"Angular",
                    tags:["Angular","TypeScript"],
                },
                {
                    id: 3,
                    name:"Jane",
                    age:23,
                    skill:"Vue",
                    tags:["Vue","JavaScript"],
                },
            ],
        };
    }

    render () {
        return (
            <div style={style_wrapper}>
               <h1>Mapping</h1>
               {this.state.people.map(({id,name,age,skill,tags})=>{
                return (
                    <div keys={id}>
                        <h1>{name}</h1> <h3>{skill}</h3>
                        <h5>{age}</h5>
                        <h3>
                            {tags.map((value,index)=>{
                                return <span key={index}>#{value}</span>;
                            })}
                        </h3>
                    </div>
                );
               })}
            </div>
        );
    }
}

export default App_ex1;