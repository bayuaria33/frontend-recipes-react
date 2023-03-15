import NavbarMenu from "../../../Component/NavbarMenu/full-menu";
import FooterMenu from "../../../Component/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let url = `${process.env.REACT_APP_API_URL}/recipes`;
let token =`${process.env.REACT_APP_API_TOKEN}`;
export default function Home() {
  const [data, setData] = useState();
  const [search, setSearch] = useState({
    search:""
  });
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchMenu = (e) =>{
    e.preventDefault()
    axios.get(url + `/?search=${search.search}`, {
      headers: {
        Authorization: token,
      },
    }).then((res)=>{
      setData(res.data.data)
    }).catch((error)=>{
      console.log(error);
    })
    
  }

  const getNew = () =>{
    axios
      .get(url + `/?sort=desc`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("Got new");
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <header>
          <div className="container col-12 ">
            <div className="row">
              <div className="col-5">
                <h1 className="display-6" style={{ color: "#2e266f" }}>
                  Discover Recipe &amp; Delicious Food
                </h1>
              </div>
              <div className="col-4">
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="input-group mb-3 h-100">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Search"
                    name="search"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-2 px-0">
                <div className="input-group mb-3 h-100">
                  <button
                    className="btn btn-warning ms-3 text-white w-100"
                    type="button"
                    onClick={searchMenu}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-5 ps-0">
                <div className="input-group mb-3">
                  <button
                    className="btn btn-warning ms-3 mt-3 text-white"
                    type="button" onClick={getNew}
                  >
                    New
                  </button>
                  <button
                    className="btn btn-warning ms-3 mt-3 text-white"
                    type="button"
                  >
                    Popular
                  </button>
                  <button className="btn btn-success ms-3 mt-3" type="button">
                    Vegetarian
                  </button>
                  <button className="btn btn-success ms-3 mt-3" type="button">
                    Breakfast
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className=""></div>
              </div>
            </div>
          </div>
        </header>
        <section>
          {data?.map((item, index) => (
            <div key={index + 1}>
                <div className="container mt-5 yellow-gradient-right">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={item.photo}
                        alt=""
                        className="img-thumbnail rounded"
                        style={{ width: "350px", height: "350px" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-5">
                    <Link to={`../Menu/Detail/${item.id}`} className="text-title" style={{textDecoration: "none", color:"black"}}>
                      {item.title}
                  </Link>
                      <p className="text-content">{item.ingredients}</p>
                      <p className="text-content">{item.category}</p>
                      <div className="bg-warning text-center text-white p-1 rounded">
                        10 Likes - 12 Comments - 10 Bookmarks
                      </div>
                      <div className="col-5">
                        <label className="text-content">
                          <img
                            className="me-3 my-3"
                            src="https://s3-alpha-sig.figma.com/img/a3be/733c/a5ad1b65265f9059e5b18198a92a7df8?Expires=1679875200&Signature=Ykj5e5rWL9EHOscIa3lQSa3aO480HU1OXqLqoZzdl8k0XrNkzLuDZVqetzvBzv1HWUd8UBMdVCHWUM-z-9CjOrVLs6H0FEkZ7QV~Py~SuKaz6VViyQhbG-jfB0whZ-GTmT43PUwDFP8Zcp371sL3Sp3PX0FZbN6rzUCC-2XNF6f9M09PMhokqWJkCkm9zJvu5Fcf28WakcISdpFtGxF7dFw23nAl4Kii94pHBwtq8gU2YeuctZpwIBZ-v~-MrOyKvZg~wPoLM8PczUAzTH-Mnky-Z93jYFEZBpGny4g4TMzE8Ag9g0Z2LmMt4U3qQHAgrZPGctqV5prnu-s4Vsu1lg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            
                            alt=""
                            style={{
                              maxWidth: "64px",
                              maxHeight: "64px",
                              borderRadius: "50%",
                            }}
                          />
                          {item.author}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </section>
      </div>
      <FooterMenu />
    </>
  );
}
