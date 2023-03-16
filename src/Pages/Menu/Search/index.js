import NavbarMenu from "../../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../../Component/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { RecipeSearch } from "../../../Component/Recipe";
import { SearchHeader } from "../../../Component/Header/HeaderMenu";

let url = `${process.env.REACT_APP_API_URL}/recipes`;
export default function Home() {
  let token = "Bearer " + localStorage.getItem("token");
  const [data, setData] = useState();
  const [search, setSearch] = useState({
    search:""
  });
  useEffect(() => {
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
    getData();
  }, [token]);

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


  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <SearchHeader getNew={getNew} searchMenu={searchMenu} handleChange={handleChange}></SearchHeader>
        <RecipeSearch data={data}></RecipeSearch>
      </div>
      <FooterMenu />
    </>
  );
}
