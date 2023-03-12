import React from "react";
import { Link } from "react-router-dom";
export default function NavbarMenu() {
  const imageStyle = {
    maxWidth: "64px",
    borderRadius: "50%",
  };

  return (
    <nav className="d-flex p-0 text-poppins justify-content-between py-3 mx-5">
      <div className="py-3 col-4 navbar text-dark justify-content-between navtext">
        <Link to={"/"} className="navtext">
          Home
        </Link>
        <Link to={"/add"} className="navtext">
          Add Recipe
        </Link>
        <Link to={"/profile"} className="navtext">
          Profile
        </Link>
      </div>
      <div className="col-3 navbar text-dark yellow-gradient-left">
        <img
          className="mr-3"
          src="https://dummyimage.com/64x64.jpg?text=picture"
          alt=""
          style={imageStyle}
        />
        <div className="col">
          <div className="row">
            <a className="navtext text-black" href="/">
              User Name
            </a>
          </div>
          <div className="row">
            <a className="navtext text-black" href="/">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
