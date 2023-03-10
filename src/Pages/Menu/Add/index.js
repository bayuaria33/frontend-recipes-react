import { useState } from "react";
import axios from "axios";
import NavbarMenu from "../../../Component/NavbarMenu/full-menu";
import FooterMenu from "../../../Component/Footer";
import jwtDecode from "jwt-decode";
export default function Add() {
  let url = "https://rich-colt-cuff.cyclic.app/recipes";
  let token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxZjFkZDI3LWQ1MWQtNDlmYy05ZDdhLWY2ZmI1ZjdjNGM3NiIsImVtYWlsIjoiZHhjODA5NDNAb21laWUuY29tIiwiZnVsbG5hbWUiOiJCdWRpIiwicGhvdG8iOiJudWxsIiwidmVyaWZpZWQiOnRydWUsIm90cCI6IjE2Mjg0MSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTI0VDIwOjQ0OjA4LjI1M1oiLCJkZWxldGVkX2F0IjpudWxsLCJyb2xlIjoidXNlciIsImlhdCI6MTY3ODMyNjIxNywiZXhwIjoxNjgwOTE4MjE3fQ.G3nex7YE1SDIgURbGZ7AmCffjXR1ypQyhjnutqbHAnw";
  const decoded_token = jwtDecode(token)
  // console.log(decoded_token.id);

  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    categories_id: 1,
    users_id: decoded_token.id
  });
  const [photo, setPhoto] = useState();
  const [alert, setAlert] = useState(false);

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
    formData.append("categories_id", inputData.categories_id);
    formData.append("users_id", inputData.users_id);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("input data success");
        console.log(res);
        setAlert(true);
      })
      .catch((err) => {
        console.log("input data fail");
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
                  Photo
                  <input
                    type="file"
                    name="photo"
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
                  <input
                    type="text"
                    name="categories"
                    placeholder="categories"
                    required
                    className="form-control"
                  />
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
