import React from "react";
export default function Landing3() {
  const imageStyle = {
    maxWidth: "350px"
  };


  return (
<section className="d-flex flex-wrap mx-auto" style={{maxWidth : "1080px"}}>
  <div className="col-4 p-3">
    <img className="rounded" src='http://fakeimg.pl/350x350?font=lobster' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='http://fakeimg.pl/350x350?font=lobster' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='http://fakeimg.pl/350x350?font=lobster' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='http://fakeimg.pl/350x350?font=lobster' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='http://fakeimg.pl/350x350?font=lobster' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='http://fakeimg.pl/350x350?font=lobster' alt='' style={imageStyle}/>
  </div>
</section>
  );
}
