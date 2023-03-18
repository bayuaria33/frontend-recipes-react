import NavbarMenu from "../../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../../Component/Footer";
import { useState, useEffect } from "react";
import { RecipeSearch } from "../../../Component/Recipe";
import { SearchHeader } from "../../../Component/Header/HeaderMenu";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe, searchRecipe, sortRecipe } from "../../../Storage/Action/recipe";


export default function Home() {
  const dispatch = useDispatch()
  // const variable = useSelector((state)=>state.NAMEOFSTATEINREDUCER)
  const [search, setSearch] = useState({
    search:""
  });
  
  const data = useSelector((state)=>state.get_recipe)
  const searchData = useSelector((state)=>state.search_recipe)
  const sortData = useSelector((state)=>state.sort_recipe)
  const [position,setPosition] = useState(false)
  
  useEffect(()=>{
    dispatch(getRecipe())
  },[dispatch])

  useEffect(()=>{
    setPosition(data)
  },[data])

  useEffect(() => {
    setPosition(searchData)
  }, [searchData]);

  useEffect(() => {
    setPosition(sortData)
  }, [sortData]);


  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  
  const searchMenu = (e) =>{
    e.preventDefault()
    dispatch(searchRecipe(search.search))
  }

  const getNew = () =>{
    dispatch(sortRecipe())
  }


  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <SearchHeader getNew={getNew} searchMenu={searchMenu} handleChange={handleChange}></SearchHeader>
        <RecipeSearch data={position}></RecipeSearch>
      </div>
      <FooterMenu />
    </>
  );
}
