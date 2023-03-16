import NavbarMenu from "../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../Component/Footer";
import {Landing1} from "../../Component/Landing/landingMenu";
import {Landing2} from "../../Component/Landing/landingMenu";
import {Landing3} from "../../Component/Landing/landingMenu";
export default function Home() {
  return (
    <>
      <div className="container text-poppins ms-5">
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
      </div>
      <FooterMenu />
    </>
  );
}
