import NavbarMenu from "../../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../../Component/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { RecipeHeader } from "../../../Component/Header/HeaderMenu";
import { getDetailRecipe } from "../../../Storage/Action/recipe";
import { useDispatch, useSelector } from "react-redux";
import { BiBookmark, BiLike } from "react-icons/bi";
export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataDetail = useSelector((state) => state.get_detail);
  useEffect(() => {
    dispatch(getDetailRecipe(id));
  }, [id, dispatch]);

  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <section>
          <header>
            <RecipeHeader data={dataDetail.data}></RecipeHeader>
          </header>
          <section>
            {dataDetail.isLoading && (
              <div
                className="spinner-border text-warning ms-5 mt-5"
                role="status"
              ></div>
            )}
            {dataDetail.data?.map((item, index) => (
              <div
                key={index + 1}
                className="col-12 d-flex flex-column justify-content-start px-5"
              >
                <div className="h2 display-4 pt-5 text-center">
                  {item.title}
                </div>
                <img
                  className="img-fluid py-5 mx-auto"
                  src={item.photo}
                  style={{ maxWidth: "700px" }}
                  alt=""
                />
                <div className="d-flex justify-content-start mx-5">
                  <p className="text-content">
                    Ingredients: <br />
                    {item.ingredients}
                  </p>
                </div>
                <div className="d-flex justify-content-start mx-5">
                  <button className="btn btn-warning text-white me-3 p-3">
                    <BiBookmark size={28} />
                  </button>
                  <button className="btn btn-warning text-white me-3 p-3">
                    <BiLike size={28} />
                  </button>
                </div>
                <div className="d-flex justify-content-start mt-5 yellow-gradient-top">
                  <div className="py-3 col-4 d-flex flex-row text-dark justify-content-end pl-5">
                    <img
                      className="mr-3"
                      src="https://dummyimage.com/64x64.jpg?text=picture"
                      alt=""
                      style={{
                        maxWidth: "64px",
                        maxHeight: "64px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="col yellow-gradient-right">
                      <div className="row">
                        <a
                          className="navtext"
                          href="/"
                          style={{ color: "black" }}
                        >
                          User Name
                        </a>
                      </div>
                      <div className="row">
                        <a
                          className="navtext"
                          href="/"
                          style={{ color: "black" }}
                        >
                          10 Recipes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 col-7 d-flex flex-row text-dark align-items-center justify-content-end pr-5 navtext">
                    <div className="col">
                      <div className="row">
                        <p className="text-dark">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dicta voluptas incidunt adipisci dolorem quidem
                          libero doloribus eveniet rem voluptate dolorum! Non
                          exercitationem, ut sit autem minima vel dolores at
                          nostrum!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start mt-5 yellow-gradient-bottom">
                  <div className="py-3 col-4 d-flex flex-row text-dark justify-content-end pl-5">
                    <img
                      className="mr-3"
                      src="https://dummyimage.com/64x64.jpg?text=picture"
                      alt=""
                      style={{
                        maxWidth: "64px",
                        maxHeight: "64px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="col yellow-gradient-right">
                      <div className="row">
                        <a
                          className="navtext"
                          href="/"
                          style={{ color: "black" }}
                        >
                          User Name
                        </a>
                      </div>
                      <div className="row">
                        <a
                          className="navtext"
                          href="/"
                          style={{ color: "black" }}
                        >
                          10 Recipes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 col-7 d-flex flex-row text-dark align-items-center justify-content-end pr-5 navtext">
                    <div className="col">
                      <div className="row">
                        <p className="text-dark">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dicta voluptas incidunt adipisci dolorem quidem
                          libero doloribus eveniet rem voluptate dolorum!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 my-3">
                  <form id="align-form">
                    <div className="form-group">
                      <textarea
                        cols="30"
                        rows="5"
                        className="form-control bg-light my-3"
                        placeholder="Your comment here"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-warning text-white px-5"
                        style={{ backgroundColor: "#ffb167" }}
                      >
                        Send a comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
      <FooterMenu />
    </>
  );
}
