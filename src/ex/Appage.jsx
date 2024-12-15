import { Component } from "react";

class Appage extends Component {
    constructor() {
        super();
        this.state = {
            status: "eshmat"
        }
    }
    render() {

        const attempt = () => {
            const age = prompt("Yoshingizni kiriting!");

            if (age >= 18) {
                this.setState({ status: "eligable" })
            } else {
                this.setState({ status: "non-eligable" })
            }
        }
        return (
            <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }} >
                {
                    this.state.status === "eshmat" ? <button onClick={attempt} >Kirish</button> : this.state.status === "eligable" ? <h3>Kirish mumkin</h3> : <h3>Kirish mumkin emas</h3>
                }
            </div>
        )
    }
}

export default Appage;


