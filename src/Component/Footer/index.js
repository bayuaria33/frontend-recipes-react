import React from "react";
export default function FooterMenu() {
  return (
    <div
    className="d-flex flex-column yellow-footer px-0 mx-0 align-items-center justify-content-center"
  >
    <p className="display-2 text-center mt-5">Eat, Cook, Repeat</p>
    <p className="text-center mt-2 text-content">
      Share your best recipe by uploading here !
    </p>
    <div className="d-flex justify-content-center align-items-center mt-5">
      <a href="/" className="link-secondary mx-3 text-dark">Product</a>
      <a href="/" className="link-secondary mx-3 text-dark">Company</a>
      <a href="/" className="link-secondary mx-3 text-dark">Learn more</a>
      <a href="/" className="link-secondary mx-3 text-dark">Product</a>
      <a href="/" className="link-secondary mx-3 text-dark">Pijar Camp</a>
    </div>
  </div>
  );
}
