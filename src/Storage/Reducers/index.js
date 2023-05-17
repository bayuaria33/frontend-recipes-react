import { combineReducers } from "redux";
import userReducer from "./user";
import get_recipe from "./getRecipeReducer";
import delete_recipe from "./deleteRecipeReducer";
import profile_recipe from "./profileRecipeReducer";
import add_recipe from "./addRecipeReducer";
import edit_recipe from "./editRecipeReducer";
import get_detail from "./getDetailRecipeReducer";
import get_recipe_count from "./getTotalRecipeReducer";
import get_my_recipe_count from "./getMyTotalRecipeReducer";
import regisReducer from "./regisReducer";
const rootReducers = combineReducers({
  user: userReducer, get_recipe, delete_recipe,profile_recipe,add_recipe,edit_recipe, get_detail, get_recipe_count, get_my_recipe_count, regisReducer
});

export default rootReducers;
