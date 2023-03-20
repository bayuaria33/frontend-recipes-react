import React from "react";

const imageStyle = {
  maxWidth: "64px",
  borderRadius: "50%",
};

export const RecipeHeader = ({data}) => {

  if(!data){
    return(
      <div className="spinner-border text-warning ms-5 mt-5" role="status"></div>
    )
  }
  const [obj] = data.map(item=>item)
  const author = obj.author;
  const user_photo = obj.user_photo;
  const posttime = obj.posttime
  const date = new Date(posttime)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const created_time = date.toLocaleString('id-ID', options);

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index + 1}
          className="d-flex justify-content-between m-5 text-poppins"
        >
          <div className="py-3 pr-5 pl-4 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end navtext yellow-gradient-left">
            <img
              className="me-3"
              src={
                user_photo
                  ? user_photo
                  : "https://dummyimage.com/64x64.jpg?text=picture"
              }
              alt=""
              style={imageStyle}
            />
            <div className="col">
              <div className="row">
                <a
                  className="navtext text-black"
                  href="/"
                  style={{ textDecoration: "none" }}
                >
                  {author ? author : "Author not found"}
                </a>
              </div>
              <div className="row">
                <a className="navtext text-black" href="/">
                  10 Recipes
                </a>
              </div>
            </div>
          </div>
          <div className="py-3 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end px-5 navtext">
            <div className="col">
              <div className="row justify-content-end">
                <a className="navtext text-black" href="/">
                  {created_time ? created_time : "Create date not found"}
                </a>
              </div>
              <div className="row justify-content-end">
                <a className="navtext text-black" href="/">
                  20 Likes - 2 Comments
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const ProfileHeader = () => {
  const newDate = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = newDate.toLocaleString('id-ID', options);

  const name = localStorage.getItem("name");
  const photo = localStorage.getItem("photo");
  return (
    <>
        <div className="d-flex justify-content-between m-5 text-poppins">
          <div className="py-3 pr-5 pl-4 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end navtext yellow-gradient-left">
            <img
              className="me-3"
              src={
                photo ? photo : "https://dummyimage.com/64x64.jpg?text=picture"
              }
              alt=""
              style={imageStyle}
            />
            <div className="col">
              <div className="row">
                <div
                  className="navtext text-black"
                  style={{ textDecoration: "none" }}
                >
                  {name ? name : "User Name"}
                </div>
              </div>
              <div className="row">
                <div
                  className="navtext text-black"
                  style={{ textDecoration: "none" }}
                >
                  10 Recipes
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end px-5 navtext">
            <div className="col">
              <div className="row justify-content-end">
                <div
                  className="navtext text-black"
                  style={{ textDecoration: "none" }}
                >
                  {today}
                </div>
              </div>
              <div className="row justify-content-end">
                <a className="navtext text-black" href="/">
                  20 Likes - 2 Comments
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export const SearchHeader = ({handleSearch,handleSort,searchHandler}) => {
  return(
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
              name="search"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-2 px-0">
          <div className="input-group mb-3 h-100">
            <button
              className="btn btn-warning ms-3 text-white w-100"
              type="button"
              onClick={searchHandler}
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
              type="button" onClick={handleSort}
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
  )
}