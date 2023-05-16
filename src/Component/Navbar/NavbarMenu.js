import { React } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
export default function NavbarMenu() {
  const imageStyle = {
    maxWidth: "64px",
    maxHeight: "64px",
    borderRadius: "16px",
  };
  const name = localStorage.getItem("name");
  const photo = localStorage.getItem("photo");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/home");
  };

  if (!name) {
    return (
      <nav className="d-flex p-0 text-poppins justify-content-between py-3 mx-5 mb-5">
        <div className="py-3 col-4 navbar text-dark justify-content-between navtext">
          <Link
            to={"/login"}
            className="navtext"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="navtext"
            style={{ textDecoration: "none" }}
          >
            Register
          </Link>
          {/* <Link
            to={"/search"}
            className="navtext"
            style={{ textDecoration: "none" }}
          >
            Search Menu
          </Link> */}
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="d-flex p-0 text-poppins justify-content-between py-3 mx-5">
        <div className="py-3 col-6 navbar text-dark justify-content-between navtext">
          <Link to={"/"} className="navtext" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to={"/add"}
            className="navtext"
            style={{ textDecoration: "none" }}
          >
            Add Recipe
          </Link>
          <Link
            to={"/search"}
            className="navtext"
            style={{ textDecoration: "none" }}
          >
            Search
          </Link>
          <Link
            to={"/profile"}
            className="navtext"
            style={{ textDecoration: "none" }}
          >
            Profile
          </Link>
        </div>
        <div className="col-3 navbar text-dark yellow-gradient-left">
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
              <Link
                className="navtext text-black"
                to={"/profile"}
                style={{ textDecoration: "none" }}
              >
                {name ? name : "Profile"}
              </Link>
            </div>
            <div className="row">
              <Link
                className="navtext text-black"
                style={{ textDecoration: "none" }}
                onClick={() => logout()}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export function NavbarProfile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 yellow-gradient-bottom">
          <div className="d-flex justify-content-between ">
            <Link
              to={""}
              className="text-title mr-5 current"
              style={{ textDecoration: "none" }}
            >
              Recipes
            </Link>
            <Link
              to={""}
              className="text-title mr-5 not-current"
              style={{ textDecoration: "none" }}
            >
              Bookmarked
            </Link>
            <Link
              to={""}
              className="text-title mr-5 not-current"
              style={{ textDecoration: "none" }}
            >
              Liked
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavbarMobile() {
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/home");
  };
  const handleSelect = (eventKey) => navigate(`${eventKey}`);
  const NavDropdownTitle = <BiMenu className="text-warning" size={32} />;
  return (
    <Nav
      variant="pills"
      activeKey="1"
      onSelect={handleSelect}
      className="justify-content-end btn-warning d-lg-none d-xl-none"
      style={{ height: "10vh" }}
    >
      <NavDropdown title={NavDropdownTitle} id="nav-dropdown">
        {name ? (
          <>
            <NavDropdown.Item eventKey="/home">Home</NavDropdown.Item>
            <NavDropdown.Item eventKey="/add">Add Recipe</NavDropdown.Item>
            <NavDropdown.Item eventKey="/search">Search</NavDropdown.Item>
            <NavDropdown.Item eventKey="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
          </>
        ) : (
          <>
            <NavDropdown.Item eventKey="/login">Login</NavDropdown.Item>
            <NavDropdown.Item eventKey="/register">Register</NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </Nav>
  );
}
