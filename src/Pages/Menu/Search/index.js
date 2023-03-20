import NavbarMenu from "../../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../../Component/Footer";
import { useState, useEffect } from "react";
import { RecipeSearch } from "../../../Component/Recipe";
import { SearchHeader } from "../../../Component/Header/HeaderMenu";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe, getTotalRecipe } from "../../../Storage/Action/recipe";

export default function Home() {
  const dispatch = useDispatch();
  // const variable = useSelector((state)=>state.NAMEOFSTATEINREDUCER)

  const data = useSelector((state) => state.get_recipe);
  const dataTotal = useSelector((state) => state.get_recipe_count);
  const [total, setTotal] = useState()
  const [search, setSearch] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [numFrom, setNumFrom] = useState()
  const [numTo, setNumTo] = useState()

  useEffect(() => {
    dispatch(getRecipe(search, sort, page));
    dispatch(getTotalRecipe())
  }, [dispatch, page, search, sort]);


  useEffect(()=>{
    setTotal(dataTotal.data)
    setNumFrom((page * 5) - (5-1))
    setNumTo(5 * page)
  },[dataTotal, page])

  const handleSort = () => {
    setSort("desc");
    setPage(1)
  };

  const handleSearch = (e) => {
    setSearchTxt(e.target.value);
  };

  const searchHandler = () => {
    setSearch(searchTxt)
    setPage(1)
  };

  const pageNext = () => {
    setPage((x) => x + 1);
    window.scrollTo(0, 0);
  };

  const pagePrevious = () => {
    setPage((x) => x - 1);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <SearchHeader
          handleSort={handleSort}
          handleSearch={handleSearch}
          searchHandler={searchHandler}
        ></SearchHeader>
        <RecipeSearch data={data}></RecipeSearch>
        <div className="col text-center text-content mt-3">
          {page > 1 && (
            <button
              onClick={pagePrevious}
              className="btn btn-warning mx-3 text-white"
            >
              Previous
            </button>
          )}
          Show {numFrom} - {numTo} from {total}
          
          {numTo < total && (
            <button
              onClick={pageNext}
              className="btn btn-warning mx-3 text-white"
            >
              Next
            </button>
          )}
        </div>
      </div>
      <FooterMenu />
    </>
  );
}
