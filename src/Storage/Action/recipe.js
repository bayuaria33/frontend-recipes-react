import axios from "axios";

let url = `${process.env.REACT_APP_API_URL}/recipes`;

export const getRecipe = () => async (dispatch) => {
  const token = "Bearer " + localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({ type: "GET_RECIPE_PENDING" });
    const result = await axios.get(url, config);
    const recipe = result.data.data
    dispatch({ type: "GET_RECIPE_SUCCESS", payload: recipe });
  } catch (err) {
    dispatch({ type: "GET_RECIPE_FAILED", payload: err.response.data.message });
    console.log("Get Recipe error");
    console.log(err);
  }
};

export const getRecipeById = (id) => async (dispatch) => {
  const token = "Bearer " + localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({ type: "GET_RECIPEbyID_PENDING" });
    const result = await axios.get(url + `/${id}`, config);
    const recipe = result.data.data
    dispatch({ type: "GET_RECIPEbyID_SUCCESS", payload: recipe });
  } catch (err) {
    dispatch({ type: "GET_RECIPEbyID_FAILED", payload: err.response.data.message });
    console.log("Get Recipe error");
    console.log(err);
  }
};

export const getDetailRecipe = (id) => async (dispatch) => {
  const token = "Bearer " + localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({ type: "GET_DETAIL_PENDING" });
    const result = await axios.get(url + `/${id}`, config);
    const recipe = result.data.data
    dispatch({ type: "GET_DETAIL_SUCCESS", payload: recipe });
  } catch (err) {
    dispatch({ type: "GET_DETAIL_FAILED", payload: err.response.data.message });
    console.log("Get User Recipe error");
    console.log(err);
  }
};

export const getUserRecipe = () => async (dispatch) => {
  const token = "Bearer " + localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({ type: "GET_USER_RECIPE_PENDING" });
    const result = await axios.get(url + `/my-recipe`, config);
    const recipe = result.data.data
    dispatch({ type: "GET_USER_RECIPE_SUCCESS", payload: recipe });
  } catch (err) {
    dispatch({ type: "GET_USER_RECIPE_FAILED", payload: err.response.data.message });
    console.log("Get User Recipe error");
    console.log(err);
  }
};


export const searchRecipe = (query) => async (dispatch) => {
  const token = "Bearer " + localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({ type: "SEARCH_RECIPE_PENDING" });
    const result = await axios.get(url + `/?search=${query}`, config);
    const recipe = result.data.data;
    dispatch({ type: "SEARCH_RECIPE_SUCCESS", payload: recipe });
  } catch (err) {
    dispatch({
      type: "SEARCH_RECIPE_FAILED",
      payload: err.response.data.message,
    });
    console.log("Search Recipe error");
    console.log(err);
  }
};

export const sortRecipe = (query) => async (dispatch) => {
  const token = "Bearer " + localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({ type: "SORT_RECIPE_PENDING" });
    const result = await axios.get(url + `/?sort=desc`, config);
    const recipe = result.data.data;
    dispatch({ type: "SORT_RECIPE_SUCCESS", payload: recipe });
  } catch (err) {
    dispatch({
      type: "SORT_RECIPE_FAILED",
      payload: err.response.data.message,
    });
    console.log("Sort Recipe error");
    console.log(err);
  }
};

export const deleteRecipe = (id) => async (dispatch)=> {
  const token = "Bearer " + localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try{
      dispatch({type:'DELETE_RECIPE_PENDING'})
      const result = await axios.delete(url + `/${id}`,config)
      const recipe = result.data
      dispatch({type:'DELETE_RECIPE_SUCCESS',payload:recipe})
  } catch(err){
      dispatch({type:'DELETE_RECIPE_FAILED',payload:err.response.data.message})
      console.log("Delete Recipe error")
      console.log(err)
  }
}

export const addRecipe = (data) => async (dispatch)=> {
  try{
    const token = "Bearer " + localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    };
      dispatch({type:'ADD_RECIPE_PENDING'})
      const result = await axios.post(url,data,config)
      const payload = result.data
      dispatch({type:'ADD_RECIPE_SUCCESS',payload})
  } catch(err){
      dispatch({type:'ADD_RECIPE_FAILED',payload:err.response.data.message})
      console.log("Add Recipe error")
      console.log("data = ", data);
      console.log(err)
  }
}

export const editRecipe = (data,id) => async (dispatch)=> {
  try{
    const token = "Bearer " + localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    };
      dispatch({type:'EDIT_RECIPE_PENDING'})
      const result = await axios.put(url + `/${id}`,data,config)//
      const payload = result.data
      dispatch({type:'EDIT_RECIPE_SUCCESS',payload})
  } catch(err){
      dispatch({type:'EDIT_RECIPE_FAILED',payload:err.response.data.message})
      console.log("Add Recipe error")
      console.log("data = ", data);
      console.log(err)
  }
}
