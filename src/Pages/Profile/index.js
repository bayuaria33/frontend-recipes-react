import NavbarMenu, { NavbarProfile } from "../../Component/Navbar/NavbarMenu";
import FooterMenu from "../../Component/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProfileHeader } from "../../Component/Header/HeaderMenu";
import { RecipeProfile } from "../../Component/Recipe";

export default function Profile() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmDelete = (id) => {
    setSelected(id);
    handleShow();
  };

  let url = `${process.env.REACT_APP_API_URL}/recipes`;
  let token = "Bearer " + localStorage.getItem("token");

  useEffect(() => {
    const getData = () => {
      axios
        .get(url + `/my-recipe?sort=desc`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res);
          setData(res.data.data);
        })
        .then((err) => {
          console.log(err);
        });
    };
    getData();
  }, [show, url, token]);

  const deleteData = (id) => {
    axios
      .delete(url + `/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("Successfully deleted data id = ", id);
        console.log(res);
        handleClose();
      })
      .then((err) => {
        console.log(err);
      });
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
