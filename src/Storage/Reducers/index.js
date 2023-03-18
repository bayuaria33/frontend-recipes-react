import { combineReducers } from "redux";
import userReducer from "./user";
import get_recipe from "./getRecipeReducer";
import search_recipe from "./searchRecipeReducer";
import delete_recipe from "./deleteRecipeReducer";
import sort_recipe from "./sortRecipeReducer";
import profile_recipe from "./profileRecipeReducer";
import add_recipe from "./addRecipeReducer";
import edit_recipe from "./editRecipeReducer";
import get_recipe_by_id from "./getRecipebyIdReducer";
import get_detail from "./getDetailRecipeReducer";
const rootReducers = combineReducers({
  user: userReducer, get_recipe, search_recipe, delete_recipe,sort_recipe,profile_recipe,add_recipe,edit_recipe,get_recipe_by_id, get_detail
});

export default rootReducers;
