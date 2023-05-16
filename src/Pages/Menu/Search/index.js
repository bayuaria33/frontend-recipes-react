import NavbarMenu, { NavbarMobile } from "../../../Component/Navbar/NavbarMenu";
import FooterMenu, { FooterMobile } from "../../../Component/Footer";
import { useState, useEffect } from "react";
import { RecipeSearch, RecipeSearchMobile } from "../../../Component/Recipe";
import {
  SearchHeader,
  SearchMobile,
} from "../../../Component/Header/HeaderMenu";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe, getTotalRecipe } from "../../../Storage/Action/recipe";
import Pagination from "../../../Component/Pagination";

export default function Home() {
  const dispatch = useDispatch();
  // const variable = useSelector((state)=>state.NAMEOFSTATEINREDUCER)

  const data = useSelector((state) => state.get_recipe);
  const dataTotal = useSelector((state) => state.get_recipe_count);
  const [total, setTotal] = useState();
  const [search, setSearch] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [numFrom, setNumFrom] = useState();
  const [numTo, setNumTo] = useState();

  useEffect(() => {
    dispatch(getRecipe(search, sort, page));
    dispatch(getTotalRecipe());
  }, [dispatch, page, search, sort]);

  useEffect(() => {
    setTotal(dataTotal.data);
    setNumFrom(page * 5 - (5 - 1));
    setNumTo(5 * page);
  }, [dataTotal, page]);

  const handleSort = () => {
    setSort("desc");
    setPage(1);
  };

  const handleSearch = (e) => {
    setSearchTxt(e.target.value);
  };

  const searchHandler = () => {
    setSearch(searchTxt);
    setPage(1);
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
      {/* web */}
      <div className="container text-poppins ms-5 d-none d-sm-block">
        <NavbarMenu />
        <SearchHeader
          handleSort={handleSort}
          handleSearch={handleSearch}
          searchHandler={searchHandler}
        ></SearchHeader>
        <RecipeSearch data={data}></RecipeSearch>
        <Pagination
          page={page}
          numFrom={numFrom}
          numTo={numTo}
          total={total}
          pagePrevious={pagePrevious}
          pageNext={pageNext}
        ></Pagination>
      </div>
      <div className="d-none d-sm-block">
        <FooterMenu />
      </div>
      {/* mobile */}
      <div className="d-lg-none d-xl-none">
        <NavbarMobile />
        <SearchMobile
          handleSort={handleSort}
          handleSearch={handleSearch}
          searchHandler={searchHandler}
        />
        <RecipeSearchMobile data={data} />
        <Pagination
          page={page}
          numFrom={numFrom}
          numTo={numTo}
          total={total}
          pagePrevious={pagePrevious}
          pageNext={pageNext}
        ></Pagination>
        <FooterMobile />
      </div>
    </>
  );
}
