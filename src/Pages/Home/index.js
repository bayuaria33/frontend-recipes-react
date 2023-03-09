import NavbarMenu from "../../Component/NavbarMenu/partial-landing";
import FooterMenu from "../../Component/Footer";
import Landing1 from "../../Component/Landing/landing1";
import Landing2 from "../../Component/Landing/landing2";
import Landing3 from "../../Component/Landing/landing3";
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
        <section className="justify-content-center">
          <Landing3 />
        </section>
      </div>
      <FooterMenu />
    </>
  );
}
