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
          src="https://s3-alpha-sig.figma.com/img/2ca7/faff/4da51338c06dd21688b82eae3bc9dfa6?Expires=1679875200&Signature=HEVk4xg-AwPwnN43Czr87HdeH-vuTEtYmNdsaMc2nnuMHZw0syBJ1lT6yHSxz6qThnsbqsb8CIixTfzvPBspzd5cvcRZaw295ECK5ytB3xKgv4de9iKtH-zu83coufYjXunpjWQwfE4evCk0gOjjhl4MKYdPLFNuRCZEXIq2m~MG-SpJ4ThUj~9RBbUWC1c4sS~e49CveebDQqxzs2yCfHYKkZj~4egBPKdjqsEhJ8AWWNOIm3NZwPGX0Y3R2oyWj~KdfIPMbMEfGHbd3Ffgck0qIQWcAos6I4cEdbIAPuDMoBH2glSuGD7xbfobDF8ipEIf0FMz1whQtf0Dw43EoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
          src="https://s3-alpha-sig.figma.com/img/e20b/679e/52207741d95649c4cb58a57ba663027f?Expires=1679875200&Signature=RH7qzm6g2NwxGmCLnkd1cAjSPYDr5~oGAVUf2ZS7okXSvKQV0Qv3NKetVSKNkocxU69Fbs6u43m6~G~5axqqkCN5dn15o8hAA0kNf3G-kfFNm8LgJacZRui0RutOWawG1mSSG0kAa9oagf9mjXe121QETBvJGgjeKYjLWRo3qu5roRZ5F2wYzkEcXnPp8ikVoKg-LYWUS4SvpUVQmeoOBp6ZHkPasQQvuu~zjofcganSLlTyCgkq9KnPddZsGB7G~bQhMn1hIF3uZbcGPsZmlbTeRy3NO0O1Aw0LYq-hJ4Yv513s7h2VUwMuVa2vBpw3iifLDIwqnH2~zPsguq-V3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
  <div className="col-4 p-3">
    <img className="rounded" src='https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1679875200&Signature=ZwQF-egmBCRYaG5dGUpix-af1lMHZTzJcDm4YXdthiiQqqPCdC0q1rbwqu4xo~BicxTKmUcKzCI69e3hL57S8L~h4GoGjOExP4AweUuRcSGwVptj75VF82aw9gK0bsomnUVOhBI7JKWRnNZIePbMqYVOK0yBetUDf52lEUHNMKxJg1ED5SIz8QlDZskMU-c7m0J5AcmO3M1vealZtCA9P972OgY2hYlLLBUv7wN87v1gWmk-a1fRHfO-H3Xflrf4Fp5wP9URGNBXBRCBNbuzkm5v92qprn0Fh6hItYX~QZ5XZuC-dBC7~F8Qk1Yf5kqqc1uy~fs-C874q5I54YPIsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1679875200&Signature=ZwQF-egmBCRYaG5dGUpix-af1lMHZTzJcDm4YXdthiiQqqPCdC0q1rbwqu4xo~BicxTKmUcKzCI69e3hL57S8L~h4GoGjOExP4AweUuRcSGwVptj75VF82aw9gK0bsomnUVOhBI7JKWRnNZIePbMqYVOK0yBetUDf52lEUHNMKxJg1ED5SIz8QlDZskMU-c7m0J5AcmO3M1vealZtCA9P972OgY2hYlLLBUv7wN87v1gWmk-a1fRHfO-H3Xflrf4Fp5wP9URGNBXBRCBNbuzkm5v92qprn0Fh6hItYX~QZ5XZuC-dBC7~F8Qk1Yf5kqqc1uy~fs-C874q5I54YPIsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1679875200&Signature=ZwQF-egmBCRYaG5dGUpix-af1lMHZTzJcDm4YXdthiiQqqPCdC0q1rbwqu4xo~BicxTKmUcKzCI69e3hL57S8L~h4GoGjOExP4AweUuRcSGwVptj75VF82aw9gK0bsomnUVOhBI7JKWRnNZIePbMqYVOK0yBetUDf52lEUHNMKxJg1ED5SIz8QlDZskMU-c7m0J5AcmO3M1vealZtCA9P972OgY2hYlLLBUv7wN87v1gWmk-a1fRHfO-H3Xflrf4Fp5wP9URGNBXBRCBNbuzkm5v92qprn0Fh6hItYX~QZ5XZuC-dBC7~F8Qk1Yf5kqqc1uy~fs-C874q5I54YPIsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1679875200&Signature=ZwQF-egmBCRYaG5dGUpix-af1lMHZTzJcDm4YXdthiiQqqPCdC0q1rbwqu4xo~BicxTKmUcKzCI69e3hL57S8L~h4GoGjOExP4AweUuRcSGwVptj75VF82aw9gK0bsomnUVOhBI7JKWRnNZIePbMqYVOK0yBetUDf52lEUHNMKxJg1ED5SIz8QlDZskMU-c7m0J5AcmO3M1vealZtCA9P972OgY2hYlLLBUv7wN87v1gWmk-a1fRHfO-H3Xflrf4Fp5wP9URGNBXBRCBNbuzkm5v92qprn0Fh6hItYX~QZ5XZuC-dBC7~F8Qk1Yf5kqqc1uy~fs-C874q5I54YPIsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1679875200&Signature=ZwQF-egmBCRYaG5dGUpix-af1lMHZTzJcDm4YXdthiiQqqPCdC0q1rbwqu4xo~BicxTKmUcKzCI69e3hL57S8L~h4GoGjOExP4AweUuRcSGwVptj75VF82aw9gK0bsomnUVOhBI7JKWRnNZIePbMqYVOK0yBetUDf52lEUHNMKxJg1ED5SIz8QlDZskMU-c7m0J5AcmO3M1vealZtCA9P972OgY2hYlLLBUv7wN87v1gWmk-a1fRHfO-H3Xflrf4Fp5wP9URGNBXBRCBNbuzkm5v92qprn0Fh6hItYX~QZ5XZuC-dBC7~F8Qk1Yf5kqqc1uy~fs-C874q5I54YPIsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' style={imageStyle}/>
  </div>
  <div className="col-4 p-3">
    <img className="rounded" src='https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1679875200&Signature=ZwQF-egmBCRYaG5dGUpix-af1lMHZTzJcDm4YXdthiiQqqPCdC0q1rbwqu4xo~BicxTKmUcKzCI69e3hL57S8L~h4GoGjOExP4AweUuRcSGwVptj75VF82aw9gK0bsomnUVOhBI7JKWRnNZIePbMqYVOK0yBetUDf52lEUHNMKxJg1ED5SIz8QlDZskMU-c7m0J5AcmO3M1vealZtCA9P972OgY2hYlLLBUv7wN87v1gWmk-a1fRHfO-H3Xflrf4Fp5wP9URGNBXBRCBNbuzkm5v92qprn0Fh6hItYX~QZ5XZuC-dBC7~F8Qk1Yf5kqqc1uy~fs-C874q5I54YPIsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' style={imageStyle}/>
  </div>
</section>
  );
}
