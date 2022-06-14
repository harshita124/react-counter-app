
const counter = (payload={count:0},action)=>{
    if(action.type === "INC"){
        return {count: payload.count+1};
    }
    else if (action.type=== "DEC"){
        return {count:payload.count-1};
    }
    return {count:payload.count};
}

export default counter;