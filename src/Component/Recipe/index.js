import React from "react";
import { Link } from "react-router-dom";

export const RecipeProfile = ({ data, confirmDelete }) => {
  return (
    <section>
      {data.isLoading && (
        <div
          className="spinner-border text-warning ms-5 mt-5"
          role="status"
        ></div>
      )}
      {data.data?.map((item, index) => (
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
                <Link
                  to={`../Menu/Detail/${item.id}`}
                  className="text-title"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item.title}
                </Link>
                <p className="text-content">{item.ingredients}</p>
                <p className="text-content">{item.category}</p>
                <div className="bg-warning text-center text-white p-1 rounded">
                  10 Likes - 12 Comments - 10 Bookmarks
                </div>
                <div className="flex col">
                  <label className="text-content">
                    <img
                      className="me-3 my-3"
                      src={
                        item.user_photo
                          ? item.user_photo
                          : "https://dummyimage.com/64x64.jpg?text=picture"
                      }
                      alt=""
                      style={{
                        maxWidth: "64px",
                        maxHeight: "64px",
                        borderRadius: "16px",
                      }}
                    />
                    {item.author}
                  </label>
                  <div className="d-flex justify-content-between">
                    <Link
                      className="btn btn-info col-6 me-5 text-white"
                      to={`../Menu/Edit/${item.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger col-6 me-5 text-white"
                      onClick={() => confirmDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export const RecipeSearch = ({ data }) => {
  return (
    <section>
      {data.isLoading && (
        <div
          className="spinner-border text-warning ms-5 mt-5"
          role="status"
        ></div>
      )}
      {data.data?.map((item, index) => (
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
                <Link
                  to={`../Menu/Detail/${item.id}`}
                  className="text-title"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item.title}
                </Link>
                <p className="text-content">{item.ingredients}</p>
                <p className="text-content">{item.category}</p>
                <div className="bg-warning text-center text-white p-1 rounded">
                  10 Likes - 12 Comments - 10 Bookmarks
                </div>
                <div className="flex col">
                  <label className="text-content">
                    <img
                      className="me-3 my-3"
                      src={
                        item.user_photo
                          ? item.user_photo
                          : "https://dummyimage.com/64x64.jpg?text=NO%20PHOTO"
                      }
                      alt=""
                      style={{
                        maxWidth: "64px",
                        maxHeight: "64px",
                        borderRadius: "16px",
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
  );
};

export const RecipeSearchMobile = ({ data }) => {
  return (
    <section>
      {data.isLoading && (
        <div
          className="spinner-border text-warning ms-5 mt-5"
          role="status"
        ></div>
      )}
      {data.data?.map((item, index) => (
        <div key={index + 1} className="container ">
          <div className="yellow-gradient-right row my-3">
            <img
              src={item.photo}
              alt=""
              className="img-thumbnail rounded col"
              style={{ width: "120px", height: "120px" }}
              loading="lazy"
            />

            <div className="flex col">
              <div className="row">
                <Link
                  to={`../Menu/Detail/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  className="navtext"
                >
                {item.title}
                </Link>
              </div>
              <div className="row">By: {item.author}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
