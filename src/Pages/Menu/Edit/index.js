import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarMenu from "../../../Component/NavbarMenu/full-menu";
import FooterMenu from "../../../Component/Footer";
import jwtDecode from "jwt-decode";
let url = "https://rich-colt-cuff.cyclic.app/";
let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxZjFkZDI3LWQ1MWQtNDlmYy05ZDdhLWY2ZmI1ZjdjNGM3NiIsImVtYWlsIjoiZHhjODA5NDNAb21laWUuY29tIiwiZnVsbG5hbWUiOiJCdWRpIiwicGhvdG8iOiJudWxsIiwidmVyaWZpZWQiOnRydWUsIm90cCI6IjE2Mjg0MSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTI0VDIwOjQ0OjA4LjI1M1oiLCJkZWxldGVkX2F0IjpudWxsLCJyb2xlIjoidXNlciIsImlhdCI6MTY3ODMyNjIxNywiZXhwIjoxNjgwOTE4MjE3fQ.G3nex7YE1SDIgURbGZ7AmCffjXR1ypQyhjnutqbHAnw";
export default function Edit() {
  //   .put/ searchBy=id&search=${id}
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
  // TODO FIGURE OUT HOW TO GET RECIPE BY ITS ID

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get(url + `/recipes/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      const data = result.data.data[0];
      setInputData(data);
      console.log("fetched current recipe=", data);
    };
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
    fetchdata(id);
    fetchcategories();
  }, [id]);

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
    formData.append("photo", photo);
    console.log(formData);
    axios
      .put(url +`/recipes/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("update data success");
        console.log(res);
        setAlert(true);
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
                    className="form-select" onChange={handleChange} name="categories_id"
                  >
                    {/* TODO CATEGORIES, UPDATE */}
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
