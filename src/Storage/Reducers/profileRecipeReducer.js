const initialState = {
    data:null,
    errorMessage:null,
    isLoading:false
}

const profile_recipe = (state=initialState,action)=>{
    if(action.type === 'GET_USER_RECIPE_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'GET_USER_RECIPE_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'GET_USER_RECIPE_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
    } else{
        return state
    }
}

export default profile_recipe