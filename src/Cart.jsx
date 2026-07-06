import { useReducer } from "react";



export const Cart = () => {

    let intialValue = [];
    const[state,dispatch] = useReducer(reducer, intialValue)

    function reducer(state,action) {

        switch (action.type){
            case "Add_item": {
              let array =  [action.payload].map((item)=>{return{id: Date.now(),name: item.name, price:item.price }} )
              
              return [...state, ...array ]
             
            }
            case "Clear_cart": {
                return []
            }
           
            default:
                return state;

        }
    }




     const products = [
    {id:1,name:'React',price:29.99},
    {id:2,name:'Angular',price:24.99},
    {id:3,name:'node.js',price:19.99},
    {id:4,name:'Full Stack',price:49.99},
]

    return ( 
        <>
        <div>
            {products.map((item) => { return(
                
                <div key={item.id}> 
                <br/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                
                <button onClick={() => dispatch({type:'Add_item', payload : item,})}>Add to cart</button>
              
                
                </div>
            )})}
            <br/>
            {state.map((item) => { return (
                 <div key={item.id}>
                <p>{item.name} - {item.price}</p>
               
            </div>)
           
            })
            }
            <p> total = { state.reduce((total, int) =>  total + int.price,0).toFixed(2)} </p>
            <button onClick={()=> dispatch({type:'Clear_cart'})}>Clear Cart</button>
        </div>
        </>
    )
}
