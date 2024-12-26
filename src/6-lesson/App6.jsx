import { Button } from "antd";
import {useState, useEffect} from "react"

const style_wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    gap:"15px"
};

const style_wrapper2={
    display:"flex",
    gap:"20px"
}


function App6(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment = ()=>{
        setCount (count +1);
    };

    const decrement = ()=>{
        if (count <=0) return;
        setCount (count-1);
    };

    useEffect(()=>{
       
    },[count,count2])
    
    return(
        <div style={style_wrapper} >
            <div>
            <div style={style_wrapper2}>
            <Button onClick={decrement} type="primary" danger>
                -
            </Button>
            {count}
            <Button onClick={increment} type="primary">
                +
            </Button>
        </div>
        </div>
        <div>
            <div style={style_wrapper2}>
            <Button onClick={()=>setCount2(count2 -1)} type="primary" danger>
                -(2)
            </Button>
            {count2}
            <Button onClick={()=>setCount2(count2 +1)} type="primary">
                +(2)
            </Button>
        </div>
        </div>
        </div>
        
    )
}

export default App6;