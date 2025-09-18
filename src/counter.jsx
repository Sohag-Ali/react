import { useState } from "react"

export default
function Counter(){
    const [count, setcount]= useState(0);

    const handelAdd = () => {
        console.log("add button click");
        const newCount = count + 1;
        setcount(newCount);
    }

    const counterStyle = {
        border: '2px solid yellow',
        padding : '25px',
        margin : '10px'
        
    }
    return(
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={handelAdd}>Add</button>
        </div>
    )
}