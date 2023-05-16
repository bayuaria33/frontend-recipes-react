import NavbarMenu from "../../Component/Navbar/NavbarMenu";
import FooterMenu, { FooterMobile } from "../../Component/Footer";
import { Landing1 } from "../../Component/Landing/landingMenu";
import { Landing2 } from "../../Component/Landing/landingMenu";
import { Landing3 } from "../../Component/Landing/landingMenu";
import { NavbarMobile } from "../../Component/Navbar/NavbarMenu";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container text-poppins ms-5 d-none d-sm-block">
        <NavbarMenu />
        <Landing1 />
        <section className="d-flex">
          <h1 className="display-6 p-3 yellow-gradient-left ml-5 my-5">
            Popular For You!
          </h1>
        </section>
        <Landing2 />
        <section className="d-flex">
          <h1 className="display-6 p-3 yellow-gradient-left ml-5 my-5">
            New Recipe
          </h1>
        </section>
        <Landing2 />
        <section className="d-flex">
          <h1 className="display-6 p-3 yellow-gradient-left ml-5 my-5">
            Popular Recipes
          </h1>
        </section>
        <section className="justify-content-center">
          <Landing3 />
        </section>
        <FooterMenu />
      </div>
      {/* mobile */}
      <div
        className="container d-lg-none d-xl-none p-2"
        style={{ maxWidth: "100vh" }}
      >
        <NavbarMobile />
        <div
          className="container yellow-gradient-right-big"
          style={{ height: "30vh" }}
        >
          <h1 className="display-2 text-poppins-large text-black ">
            Discover Recipe & Delicious food
          </h1>
          <Link to={"/search"} className="text-start btn btn-dark w-100 mt-3">
            Search Restaurants, Foods
          </Link>
        </div>
        <div className="container mt-3" style={{ height: "50vh" }}>
          <div className="yellow-gradient-left">
            <h1 className="display-3 text-poppins-large text-black mx-3">
              Popular For You!
            </h1>
          </div>
          <img
            alt=""
            src="https://res.cloudinary.com/dedas1ohg/image/upload/v1680744844/recipes_images/bb6555764d018e0687640abdfde17ba9_l5u6po.jpg"
            className="rounded col"
            style={{ width: "200px", height: "150px" }}
          />
          <p className="text-sm">
            Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
            hurry? That’s right!
          </p>
          <button className="btn btn-warning w-50 text-white">
            Learn More
          </button>
        </div>
        <div className="container mt-3" style={{ height: "50vh" }}>
          <div className="yellow-gradient-left">
            <h1 className="display-3 text-poppins-large text-black mx-3">
              New Recipe
            </h1>
          </div>
          <img
            alt=""
            src="https://res.cloudinary.com/dedas1ohg/image/upload/v1680744844/recipes_images/bb6555764d018e0687640abdfde17ba9_l5u6po.jpg"
            className="rounded col"
            style={{ width: "200px", height: "150px" }}
          />
          <p className="text-sm">
            Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
            hurry? That’s right!
          </p>
          <button className="btn btn-warning w-50 text-white">
            Learn More
          </button>
        </div>
      </div>

      <FooterMobile />
    </>
  );
}
