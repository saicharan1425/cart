import { useState } from "react";

export const Mybtn = () => {
const [state,setState] = useState(0);

function clicked(){
    setState(state+1)
}


return(
    <>
    <button onClick={clicked}>Clicked {state} count</button>
    </>
)
}