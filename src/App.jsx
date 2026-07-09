
import './App.css'
import { Cart } from './Cart'
import { Mybtn } from './Mybtn'
//import { Count } from './Count'
import { useState } from 'react'

function App() {

  const [state,setState] = useState(0);

function clicked(){
    setState(state+1)
}

  return (
    <>
    <Cart></Cart>
    <br/>
    {/* <Count/> */}
    <Mybtn></Mybtn>
    <Mybutton count={state} onClick={clicked}></Mybutton>
    <Mybutton count={state} onClick={clicked}></Mybutton>
    <Mybutton></Mybutton>
    </>
  )
}

function Mybutton({count,onClick}){





return(
    <>
    <button onClick={onClick}>Clicked {count} count</button>
    </>
)
}

export default App
