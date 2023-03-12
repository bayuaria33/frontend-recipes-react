import React from "react";
import { Link } from "react-router-dom";
export default function Landing1() {
  const imageStyle = {
    maxWidth: "800px"
  };


  return (
    <section
      className="d-flex justify-content-between"
      style={{maxWidth: "100%", height: "50vw"}}
    >
      <div className="col-8 container mx-0">
        <div className="col-8">
          <form
            className="p-5 d-flex flex-column align-items-start"
            style={{maxWidth: "50vw"}}
          >
            <h1 className="display-6 text-black">
              Discover Recipe & Delicious food
            </h1>
            <Link
              to={"/search"}
              className="text-start btn btn-light w-100 mt-3"
            >
              Search Restaurants, Foods 
            </Link>
          </form>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-end yellow-gradient-right-big p-5">
        <img
          alt=""
          src="https://dummyimage.com/800x800.png"
          className="rounded"
          style={imageStyle}
        />
      </div>
    </section>
  );
}
