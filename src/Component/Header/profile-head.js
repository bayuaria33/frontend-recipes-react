import React from "react";
export default function HeaderMenu() {
    const imageStyle = {
        maxWidth: "64px",
        borderRadius: "50%",
      };

  return (
    <div className="d-flex justify-content-between m-5 text-poppins">
          <div className="py-3 pr-5 pl-4 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end navtext yellow-gradient-left">
            <img className="mr-3" src="https://dummyimage.com/64x64.jpg?text=picture" alt="" style={imageStyle}/>
            <div className="col">
              <div className="row">
                <a className="navtext text-black" href="/">User Name</a>
              </div>
              <div className="row">
                <a className="navtext text-black" href="/">10 Recipes</a>
              </div>
            </div>
          </div>
          <div className="py-3 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end px-5 navtext">
            <div className="col">
              <div className="row justify-content-end">
                <a className="navtext text-black" href="/">21 February 2023</a>
              </div>
              <div className="row justify-content-end">
                <a className="navtext text-black" href="/">20 Likes - 2 Comments</a>
              </div>
            </div>
          </div>
        </div>
  );
}
