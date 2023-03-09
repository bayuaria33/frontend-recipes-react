import React from "react";
export default function Landing2() {
  const imageStyle = {
    maxWidth: "400px"
  };


  return (
    <section className="d-flex justify-content-between">
      <div className="col-5 d-flex yellow-gradient-right-big p-5">
        <img
          alt=""
          src="https://dummyimage.com/800x800.png"
          className="rounded col"
          style={imageStyle}
        />
      </div>
      <div className="col-5 my-auto">
        <h1 className="display-6 py-3">Healthy Bone Broth Ramen (Quick & easy)</h1>
        <p className="text-content">
          Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
          hurry? That’s right!
        </p>
        <button className="btn btn-warning w-50 text-white">Learn More</button>
      </div>
    </section>
  );
}
