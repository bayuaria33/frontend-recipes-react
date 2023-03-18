const initialState = {
    data:null,
    errorMessage:null,
    isLoading:false
}

const get_recipe_by_id = (state=initialState,action)=>{
    if(action.type === 'GET_RECIPEbyID_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'GET_RECIPEbyID_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'GET_RECIPEbyID_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
    } else{
        return state
    }
}

export default get_recipe_by_id