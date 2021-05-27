
const initialState = {
    citems: "",
    uitems: "",
};

export const upcomingItemsReducer = (state = initialState,action ) => {

    switch(action.type){
        case "UITEMS" :
            console.log("Entered");
            return {...state,uitems:[...action.payload]};
        case "CITEMS" :
            return {...state,citems:[...action.payload]};
        default :
        return state;
    }

    
}