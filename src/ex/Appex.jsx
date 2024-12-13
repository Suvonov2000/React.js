import {Component  } from "react";

const style_wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height:"100vh",
    flexDirection:"column",
};

class Appex extends Component{
    constructor(){
        super();
        this.state = {
            data: [
                {
                    id:"1",
                    name:"A",
                    surname:"A",
                    age:"A",
                },
                {
                    id:"2",
                    name:"B",
                    surname:"B",
                    age:"B",
                },
                {
                    id:"3",
                    name:"C",
                    surname:"C",
                    age:"C",
                },
            ]
        }
    }
    render () {
        const onEdit = (value)=>{
            console.log(value);
            console.log("editing");
            
        }
        return (
            <div style={style_wrapper}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value)=>{
                                return (
                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    <td>{value.surname}</td>
                                    <td>{value.age}</td>
                                    <td>
                                        <button
                                         onClick={()=>{
                                            onEdit(value)
                                            
                                            
                                         }}>
                                            Edit
                                        </button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>

                <form style={{
                    marginTop:"50px"
                }}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Surname"/>
                <input type="text" placeholder="Age"/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Appex;

