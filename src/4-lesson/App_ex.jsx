import { Component } from "react";

const style_wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
};




class App_ex extends Component {
    constructor(){
        super()
        this.state={ 
            data:[
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
            ],

            selectedColumn: null,
        };
    }
    render () {

        const onEdit = (value)=>{
          
            this.setState ({
                selectedColumn: value,
            });
        };

        const onSave = ()=>{
            
            this.setState({
                data: this.state.data.map((value)=>{
                    return value.id === this.state.selectedColumn.id
                    ? this.state.selectedColumn
                    : value;
                })
            })
        };

        const onDelete = (value) =>{
            this.setState({
                data: this.state.data.filter((item)=> item.id !== value.id),
            });
        };

        const onAdd = (event) =>{
            event.preventDefault();
            const newData = {
                name: event.target[0].value,
                surname: event.target[1].value,
                age: event.target[2].value,
                id: this.state.data.length +1,
            };

            this.setState({
                data: [...this.state.data,newData],
            });
            
        };
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
                                <td>
                                    {this.state.selectedColumn &&
                                     value.id === this.state.selectedColumn.id ?(
                                        <input type="text"
                                        defaultValue={this.state.selectedColumn.name}
                                        onChange={(e)=>{
                                            this.setState ({
                                                selectedColumn: {
                                                    age: this.state.selectedColumn.age,
                                                    id: this.state.selectedColumn.id,
                                                    surname: this.state.selectedColumn.surname,
                                                    name: e.target.value,
                                                },
                                            });
                                        }}
                                        />
                                    ) : (
                                        value.name
                                    )}
                                
                                
                                 </td>
                                <td>
                                    {this.state.selectedColumn && 
                                    value.id === this.state.selectedColumn.id ? (
                                        <input type="text"
                                        defaultValue={this.state.selectedColumn.surname}
                                        onChange={(e)=>{
                                            this.setState ({
                                                selectedColumn: {
                                                    age: this.state.selectedColumn.age,
                                                    id: this.state.selectedColumn.id,
                                                    name: this.state.selectedColumn.name,
                                                    surname: e.target.value,
                                                },
                                            });
                                        }}
                                        />
                                    ) : (
                                        value.surname
                                    )}
                                </td>
                                <td>
                                    {this.state.selectedColumn && 
                                    value.id === this.state.selectedColumn.id ? (
                                    <input type="text"
                                    defaultValue={this.state.selectedColumn.age}
                                    onChange={(e)=>{
                                        this.setState ({
                                            selectedColumn: {
                                                name: this.state.selectedColumn.name,
                                                id: this.state.selectedColumn.id,
                                                surname: this.state.selectedColumn.surname,
                                                age: e.target.value,
                                            },
                                        });
                                    }}
                                    />
                                ) : (
                                    value.age
                                   )}
                                </td>
                                <td>
                                    {this.state.selectedColumn && 
                                    value.id === this.state.selectedColumn.id ? (
                                        <button onClick={onSave}>Save</button>
                                    ) : (
                                        <button onClick={()=>{
                                            onEdit(value);
                                            
                                        }}>
                                            Edit
                                        </button>
                                    )
                                    }
                                    
                                    <button onClick={()=>{
                                        onDelete(value)
                                    }}>Delete</button>
                                </td>
                            </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

                <form style={{
                    marginTop:"50px",
                }}
                onSubmit={onAdd}
                >
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Surname" />
                    <input type="text" placeholder="Age" />
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

export default App_ex;