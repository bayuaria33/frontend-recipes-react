const initialState = {
    data:null,
    errorMessage:null,
    isLoading:false
}

const get_recipe = (state=initialState,action)=>{
    if(action.type === 'GET_RECIPE_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'GET_RECIPE_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'GET_RECIPE_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
    } else{
        return state
    }
}

export default get_recipe