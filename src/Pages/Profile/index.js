import NavbarMenu, { NavbarProfile } from "../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../Component/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { ProfileHeader } from "../../Component/Header/HeaderMenu";
import { RecipeProfile } from "../../Component/Recipe";
import { deleteRecipe, getUserRecipe } from "../../Storage/Action/recipe";
import { useDispatch, useSelector } from "react-redux";


export default function Profile() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const confirmDelete = (id) => {
    setSelected(id);
    handleShow();
  };

  const data = useSelector((state)=>state.profile_recipe)
  useEffect(()=>{
    dispatch(getUserRecipe())
  },[dispatch])


  const deleteData = (id) => {
    dispatch(deleteRecipe(id)).then(()=>{
      handleClose()
      dispatch(getUserRecipe())
    })
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
