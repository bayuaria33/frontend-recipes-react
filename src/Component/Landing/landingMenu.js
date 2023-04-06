import React from "react";
import { Link } from "react-router-dom";
export function Landing1() {
  const imageStyle = {
    maxWidth: "800px",
    maxHeight: "550px"
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
              className="text-start btn btn-dark w-100 mt-3"
            >
              Search Restaurants, Foods 
            </Link>
          </form>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-end yellow-gradient-right-big p-5">
        <img
          alt=""
          src="https://res.cloudinary.com/dedas1ohg/image/upload/v1680575811/recipes_images/96bbf7e44d119d80a61c4894c5c96c74_ibqm5a.jpg"
          className="rounded"
          style={imageStyle}
        />
      </div>
    </section>
  );
}

export function Landing2() {
  const imageStyle = {
    maxWidth: "400px"
  };


  return (
    <section className="d-flex justify-content-between">
      <div className="col-5 d-flex yellow-gradient-right-big p-5">
        <img
          alt=""
          src="https://res.cloudinary.com/dedas1ohg/image/upload/v1680744844/recipes_images/bb6555764d018e0687640abdfde17ba9_l5u6po.jpg"
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

export function Landing3() {
  const imageStyle = {
    maxWidth: "350px"
  };


  return (
<section className="d-flex flex-wrap mx-auto" style={{maxWidth : "1080px"}}>
  <div className="col-4 p-3" style={{maxHeight: "1080px"}}>
    <img className="rounded" src='https://res.cloudinary.com/dedas1ohg/image/upload/v1680575810/recipes_images/9d38bac836d2d3d98930f6fc722bfdec_fnb5vs.jpg' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3" style={{maxHeight: "1080px"}}>
    <img className="rounded" src='https://res.cloudinary.com/dedas1ohg/image/upload/v1680744846/recipes_images/ec253e0e662a4e3aa070cee5202021e3_ciyg3n.jpg' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3" style={{maxHeight: "1080px"}}>
    <img className="rounded" src='https://res.cloudinary.com/dedas1ohg/image/upload/v1680744847/recipes_images/cd160da3e1426c3f659218e145224ffc_dtc05i.jpg' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3" style={{maxHeight: "1080px"}}>
    <img className="rounded" src='https://res.cloudinary.com/dedas1ohg/image/upload/v1680744847/recipes_images/cd160da3e1426c3f659218e145224ffc_dtc05i.jpg' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3" style={{maxHeight: "1080px"}}>
    <img className="rounded" src='https://res.cloudinary.com/dedas1ohg/image/upload/v1680575810/recipes_images/9d38bac836d2d3d98930f6fc722bfdec_fnb5vs.jpg' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3" style={{maxHeight: "1080px"}}>
    <img className="rounded" src='https://res.cloudinary.com/dedas1ohg/image/upload/v1680575810/recipes_images/40261c035eed315afdc149ee073393ea_ng6nb3.jpg' alt='' style={imageStyle}/>
  </div>
</section>
  );
}
