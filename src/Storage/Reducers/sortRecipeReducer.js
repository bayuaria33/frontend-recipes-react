const initialState = {
    data:null,
    errorMessage:null,
    isLoading:false
}

const sort_recipe = (state=initialState,action)=>{
    if(action.type === 'SORT_RECIPE_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'SORT_RECIPE_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'SORT_RECIPE_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
    } else{
        return state
    }
}

export default sort_recipe