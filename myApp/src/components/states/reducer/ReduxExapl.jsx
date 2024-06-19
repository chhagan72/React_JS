const reducer = (state = 0, action ) => {
    if(action.type == "DEPOSITE_MONEY"){
        return state + action.payload
    }
    else if(action.type == "WITHDRAW_MONEY"){
        return state - action.payload
    }
    else{
        return state
    }
    // switch (action.type) {
    //     case "DEPOSITE_MONEY":
    //         return state + 1;
    //     case "WITHDRAW_MONEY":
    //         return state - 1;
    //     default:
    //         return state;
    // }
} 
export default reducer;