import NavbarMenu from "../../Component/NavbarMenu/full-menu";
import FooterMenu from "../../Component/Footer";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useState, useEffect } from "react";

let url = `${process.env.REACT_APP_API_URL}/recipes`;
let token = `${process.env.REACT_APP_API_TOKEN}`;
export default function Profile() {
  const [data,setData] = useState()
  const [show, setShow] = useState(false);
  const [selected,setSelected] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmDelete = (id) => {
    setSelected(id)
    handleShow()
  }

  
  useEffect(()=>{
    getData()
  },[])
  
  const getData = () => {
    axios.get(url + `/my-recipe`,{
      headers:{
        Authorization: token
      }
    }).then((res)=>{
      console.log(res)
      setData(res.data.data)
    }).then((err)=>{
      console.log(err)
    })
  }


  const deleteData = (id) => {
    axios.delete(url+`/${id}`,{
      headers:{
        Authorization: token
      }
    }).then((res)=>{
      console.log("Successfully deleted data id = ", id)
      console.log(res)
      handleClose()
      getData()
    }).then((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className="container text-poppins ms-5">
        <NavbarMenu />
        <header>
        <div className="d-flex justify-content-between mb-5 mx-5 text-poppins">
          <div className="py-3 pr-5 ps-4 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end navtext yellow-gradient-left">
            <img className="mr-3" src="https://dummyimage.com/64x64.jpg?text=picture" alt="" 
            style={{maxWidth: "64px", maxHeight: "64px", borderRadius: "50%"}}/>
            <div className="col">
              <div className="row">
                <a className="navtext" href="/">User Name</a>
              </div>
              <div className="row">
                <a className="navtext" href="/">10 Recipes</a>
              </div>
            </div>
          </div>
          <div className="py-3 col-4 navbar navbar-expand d-flex flex-row text-dark justify-content-end px-5 navtext">
            <div className="col">
              <div className="row justify-content-end">
                <a className="navtext" href="/">21 February 2023</a>
              </div>
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
                          src="https://dummyimage.com/64x64.jpg?text=picture"
                          alt=""
                          style={{
                            maxWidth: "64px",
                            maxHeight: "64px",
                            borderRadius: "50%",
                          }}
                        />
                        {item.author}
                      </label>
                      <div className="d-flex justify-content-between">
                        <Link className="btn btn-info col-6 me-5 text-white" to={`../Menu/Edit/${item.id}`}>Edit</Link>
                        <button className="btn btn-danger col-6 me-5 text-white" onClick={()=>confirmDelete(item.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <FooterMenu />
      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this item?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>deleteData(selected)}>
            Delete data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
