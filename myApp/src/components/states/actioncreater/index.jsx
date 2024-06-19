export const depositeMoney =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"DEPOSITE_MONEY",
            payload: amount
        })
    }
}
export const withdrawMoney =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"WITHDRAW_MONEY",
            payload: amount
        })
    }
}