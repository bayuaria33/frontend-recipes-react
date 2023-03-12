import NavbarMenu from "../../../Component/NavbarMenu/full-menu";
import FooterMenu from "../../../Component/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let url = `${process.env.REACT_APP_API_URL}/recipes`;
let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxZjFkZDI3LWQ1MWQtNDlmYy05ZDdhLWY2ZmI1ZjdjNGM3NiIsImVtYWlsIjoiZHhjODA5NDNAb21laWUuY29tIiwiZnVsbG5hbWUiOiJCdWRpIiwicGhvdG8iOiJudWxsIiwidmVyaWZpZWQiOnRydWUsIm90cCI6IjE2Mjg0MSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTI0VDIwOjQ0OjA4LjI1M1oiLCJkZWxldGVkX2F0IjpudWxsLCJyb2xlIjoidXNlciIsImlhdCI6MTY3ODMyNjIxNywiZXhwIjoxNjgwOTE4MjE3fQ.G3nex7YE1SDIgURbGZ7AmCffjXR1ypQyhjnutqbHAnw";
export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <header>
          <div className="container col-12 ">
            <div className="row">
              <div className="col-5">
                <h1 className="display-6" style={{ color: "#2e266f" }}>
                  Discover Recipe &amp; Delicious Food
                </h1>
              </div>
              <div className="col-4">
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="input-group mb-3 h-100">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="col-2 px-0">
                <div className="input-group mb-3 h-100">
                  <button
                    className="btn btn-warning ms-3 text-white w-100"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-5 ps-0">
                <div className="input-group mb-3">
                  <button
                    className="btn btn-warning ms-3 mt-3 text-white"
                    type="button"
                  >
                    New
                  </button>
                  <button
                    className="btn btn-warning ms-3 mt-3 text-white"
                    type="button"
                  >
                    Popular
                  </button>
                  <button className="btn btn-success ms-3 mt-3" type="button">
                    Vegetarian
                  </button>
                  <button className="btn btn-success ms-3 mt-3" type="button">
                    Breakfast
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className=""></div>
              </div>
            </div>
          </div>
        </header>
        <section>
          {data?.map((item, index) => (
            <div key={index + 1}>
                <div className="container mt-5 yellow-gradient-right">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={item.photo}
                        alt=""
                        className="img-thumbnail rounded"
                        style={{ width: "350px", height: "350px" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-5">
                    <Link to={`../Menu/Detail/${item.id}`} className="text-title" style={{textDecoration: "none", color:"black"}}>
                      {item.title}
                  </Link>
                      <p className="text-content">{item.ingredients}</p>
                      <p className="text-content">{item.category}</p>
                      <div className="bg-warning text-center text-white p-1 rounded">
                        10 Likes - 12 Comments - 10 Bookmarks
                      </div>
                      <div className="col-5">
                        <label className="text-content">
                          <img
                            className="me-3 my-3"
                            src="https://dummyimage.com/64x64.jpg?text=picture"
                            alt=""
                            style={{
                              maxWidth: "64px",
                              maxHeight: "64px",
                              borderRadius: "50%",
                            }}
                          />
                          {item.author}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </section>
      </div>
      <FooterMenu />
    </>
  );
}
