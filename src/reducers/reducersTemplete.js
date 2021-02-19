
const initialState ={
    counter:0
}
const reducerTemplete = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMNET":
            return{
                ...state,
                counter: state.counter + action.data
            }    
        default:
            return state;
    }
}

export default reducerTemplete
