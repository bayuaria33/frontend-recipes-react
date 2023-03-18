import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarMenu from "../../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../../Component/Footer";
import jwtDecode from "jwt-decode";
import { editRecipe, getRecipeById } from "../../../Storage/Action/recipe";
import { useDispatch, useSelector } from "react-redux";
let url = `${process.env.REACT_APP_API_URL}/`;
export default function Edit() {
  let token = "Bearer " + localStorage.getItem("token");
  //   .put/ searchBy=id&search=${id}
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const dataRecipe = useSelector((state)=>state.get_recipe_by_id)
  const dataEdit = useSelector((state)=>state.edit_recipe)

  const decoded_token = jwtDecode(token);
  const { id } = useParams();
  const [categories, setCategories] = useState();
  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    categories_id: 0,
    users_id: decoded_token.id,
  });
  const [photo, setPhoto] = useState();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    dispatch(getRecipeById(id))
  }, [dispatch,id]);

  useEffect(()=>{
    if(dataRecipe.data){
      setInputData({
        ...inputData,
        title: dataRecipe.data[0].title,
        ingredients: dataRecipe.data[0].ingredients,
        categories_id: dataRecipe.data[0].categories_id,
        photo:dataRecipe.data[0].photo
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dataRecipe])

  useEffect(() => {
    const fetchcategories = async () => {
      const result = await axios.get(url + `/categories`, {
        headers: {
          Authorization: token,
        },
      });
      const data = result.data.data;
      setCategories(data);
      console.log("fetched categories=", data);
    };
    fetchcategories();
  }, [token]);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log("inputData = " , inputData);
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("ingredients", inputData.ingredients);
    formData.append("categories_id", parseInt(inputData.categories_id));
    formData.append("photo", photo);
    console.log(formData);
    dispatch(editRecipe(formData,id))
      .then(() => {
        setAlert(true);
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      })
      .catch((err) => {
        console.log("update data fail");
        console.log(err);
      });
  };

  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <header></header>
        <section>
          <div className="col-9 d-flex flex-column mx-auto mt-5">
            <section>
              <form onSubmit={postForm}>
                <div className="form-group mt-3">
                  <div
                    className="rounded d-flex align-items-center justify-content-center"
                    style={{
                      width: "800px",
                      height: "400px",
                      backgroundImage: `url(${inputData.photo})`,
                    }}
                  >
                    <input
                      id="imgbutton"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handlePhoto}
                    />
                    <label
                      htmlFor="imgbutton"
                      className="btn btn-info col-4 text-center text-white"
                    >
                      Change photo
                    </label>
                  </div>
                </div>
                <div className="form-group mt-3">
                  Title
                  <input
                    type="text"
                    value={inputData.title}
                    name="title"
                    placeholder="title"
                    required
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  Ingredients
                  <input
                    type="text"
                    value={inputData.ingredients}
                    name="ingredients"
                    placeholder="ingredients"
                    required
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3 w-25">
                  Category
                  <select
                    className="form-select"
                    onChange={handleChange}
                    name="categories_id"
                  >
                    {categories?.map((categories) => (
                      <option value={categories.id} key={categories.id}>
                        {categories.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="btn btn-warning text-white px-5"
                    style={{ backgroundColor: "#ffb167" }}
                  >
                    Update
                  </button>
                </div>
              </form>
              {dataEdit.isLoading && (
                <div
                  className="spinner-border text-warning ms-5 mt-5"
                  role="status"
                ></div>
              )}
            </section>
          </div>
        </section>
      </div>

      <div className="container">
        {alert && (
          <div
            className="alert alert-success my-2"
            role="alert"
            onClick={() => setAlert(false)}
          >
            Update data success
          </div>
        )}
      </div>
      <FooterMenu />
    </>
  );
}
