import React from "react";
import { Link } from "react-router-dom";
export default function NavbarMenu() {
  return (
    <nav className="d-flex p-0 text-poppins justify-content-between py-3 ml-5 mb-5" >
      <div className="py-3 col-4 navbar text-dark justify-content-between navtext">
        <Link to={"/"} className="navtext" >Home</Link>
        <Link to={"/add"} className="navtext" >Add</Link>
        <Link to={"/profile"} className="navtext" >Profile</Link>
      </div>
    </nav>
  );
}
