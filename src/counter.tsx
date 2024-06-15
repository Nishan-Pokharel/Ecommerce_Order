import { useState } from "react";
import Button from "./components/button";

export default function Counter (){
    // let count = 0
    const [count,setCount] = useState(0)
    const handleAdd =()=>{
        setCount(count + 1)
    }
    const handleSubtract = ()=>{
        setCount(count - 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <Button title="Subtract" onClick={handleSubtract}></Button>
            <Button title="Add" onClick={handleAdd}></Button>
        </div>
    )
}