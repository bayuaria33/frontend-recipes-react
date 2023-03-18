import { useState, useEffect } from "react";
import axios from "axios";
import NavbarMenu from "../../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../../Component/Footer";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../../../Storage/Action/recipe";
import { useDispatch, useSelector } from "react-redux";
export default function Add() {
  let url = `${process.env.REACT_APP_API_URL}/`;
  let token = "Bearer " + localStorage.getItem("token");
  const decoded_token = jwtDecode(token);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    categories_id: 0,
    users_id: decoded_token.id,
  });
  const addData = useSelector((state) => state.add_recipe);
  const [categories, setCategories] = useState();
  const [photo, setPhoto] = useState();
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
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
  }, [token, url]);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
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
    formData.append("users_id", inputData.users_id);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(addRecipe(formData)).then(() => {
      setAlert(true);
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
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
                  Photo
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    placeholder="photo"
                    required
                    onChange={handlePhoto}
                    className="form-control"
                  />
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
                    Post
                  </button>
                </div>
              </form>
              {addData.isLoading && (
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
            Input data success
          </div>
        )}
      </div>
      <FooterMenu />
    </>
  );
}
