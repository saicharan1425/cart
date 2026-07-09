// import {useReducer, useState} from 'react'

// export const Count = () => {

//     let inital=0;
//      const [inputValue,setInput] = useState(0)

//      function reducer(state,action){

       
//         switch(action.type){
//             case 'Increment':{
//                 let afterState = state + 1
               
//                 return (afterState)
//             }
//             case 'IncrementFive':{
              
//                console.log(action.payload);
//                 return (state + action.payload)
//             }
//             case 'Reset':{
              
//                state = inital
//                 return (state)
//             }
//              case 'Set':{
             
//                state = inputValue // or state = action.payload
//                 return (state)
//             }
//              case 'Decrement':{
//                 if(state <= 0){
//                     return 0
//                 }
//                 return (state - 1)
//             }
//             default:
//                 return state
//         }
//     }

//     const [state, dispacth] = useReducer(reducer,inital)

//     function eventHandler(e){
//        setInput(e.target.value)
//        return e.target.value
//     }
   

//  return(
//     <>
//     <div>
//     <button onClick={()=> dispacth({type:'Increment'})}>+</button>
//     <p>Count of {state}</p>
//     <button onClick={()=> dispacth({type:'Decrement'})}>-</button>
//     <br/>
//     <button onClick={()=> dispacth({type:'IncrementFive',payload:5})}>+5</button>
//     <br/>
//     <button onClick={()=> dispacth({type:'Reset'})}>Reset</button>
//     <br/>
//     <input onChange={eventHandler}/>
//     <button onClick={()=> dispacth({type:'Set',payload:inputValue})}>Set</button>
    
//     </div>
//     </>
//  )

// }