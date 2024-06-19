import React, {useReducer} from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreaters} from "./states/index"

// const initialState = 0;
// const reducer =(state, action)=>{
//   if(action.type == "INCREMENT"){
//     return state +1;
//   }
//   else if(action.type == "DECREMENT"){
//     return state - 1;
//   }
  // console.log(state, action);
  // switch (action.type) {
  //   case "INCREMENT":
  //     return state + 1;
  //   case "DECREMENT":
  //     return state - 1;
  //   default:
  //     return state;
  // }
    // return state;
// }
const UseReducer = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const dispatch = useDispatch();
  return (
    <div>
        {/* <h1>{state}</h1>
        <div className="btnStyle">
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button> 
        </div> */}
        <h1>Deposite/Withdraw Money</h1>
        <div className="btnStyle">
            <button className='btn btn-success' onClick={()=> {dispatch(actionCreaters.depositeMoney(100))}}>Deposite</button>
            <button className='btn btn-danger m-5'onClick= {()=>{dispatch(actionCreaters.withdrawMoney(100))}}>Withdraw</button>
        </div>
    </div>
  )
}

export default UseReducer