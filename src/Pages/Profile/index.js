import NavbarMenu, { NavbarProfile } from "../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../Component/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { ProfileHeader } from "../../Component/Header/HeaderMenu";
import { RecipeProfile } from "../../Component/Recipe";
import { deleteRecipe, getUserRecipe, getMyTotalRecipe } from "../../Storage/Action/recipe";
import { useDispatch, useSelector } from "react-redux";


export default function Profile() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.profile_recipe)
  const dataTotal = useSelector((state)=>state.get_my_recipe_count)
  const [total, setTotal] = useState()
  const [page, setPage] = useState(1);
  const [numFrom, setNumFrom] = useState()
  const [numTo, setNumTo] = useState()

  const confirmDelete = (id) => {
    setSelected(id);
    handleShow();
  };
  useEffect(()=>{
    dispatch(getUserRecipe(page))
    dispatch(getMyTotalRecipe())
  },[dispatch,page])

  useEffect(()=>{
    setTotal(dataTotal.data)
    console.log(dataTotal);
    setNumFrom((page * 5) - (5-1))
    setNumTo(5 * page)
  },[dataTotal, page])

  const deleteData = (id) => {
    dispatch(deleteRecipe(id)).then(()=>{
      handleClose()
      setPage(1)
      dispatch(getUserRecipe())
      window.scrollTo(0, 0);
    })
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
        <header>
          <ProfileHeader></ProfileHeader>
        </header>
        <NavbarProfile></NavbarProfile>
        <RecipeProfile data={data} confirmDelete={confirmDelete}></RecipeProfile>
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
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this item?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteData(selected)}>
            Delete data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
