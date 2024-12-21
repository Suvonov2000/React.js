import { Button } from "antd";
import {useState, useEffect} from "react"

const style_wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
};

function App6(){
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount (count +1);
    };

    const decrement = ()=>{
        if (count <=1) return;
        setCount (count-1);
    };
    return(
        <div style={style_wrapper}>
            <div className="flex gap-[20px]">
            <Button onClick={decrement} type="primary" danger>-</Button>
            {count}
            <Button onClick={increment} type="primary">+</Button>
        </div>
        </div>
    )
}

export default App6;