import React from "react";
import { Link } from "react-router-dom";
export default function NavbarMenu() {
  return (
    <nav className="d-flex p-0 text-poppins justify-content-between py-3 mx-5 mb-5">
      <div className="py-3 col-4 navbar text-dark justify-content-between navtext">
        <Link to={"/login"} className="navtext">
          Login
        </Link>
        <Link to={"/register"} className="navtext">
          Register
        </Link>
        <Link to={"/search"} className="navtext">
          Search Menu
        </Link>
      </div>
    </nav>
  );
}
