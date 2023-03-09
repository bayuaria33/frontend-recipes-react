import NavbarMenu from "../../Component/NavbarMenu";
import axios from "axios";
import { useState, useEffect } from "react";

let url = "https://rich-colt-cuff.cyclic.app";
let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxZjFkZDI3LWQ1MWQtNDlmYy05ZDdhLWY2ZmI1ZjdjNGM3NiIsImVtYWlsIjoiZHhjODA5NDNAb21laWUuY29tIiwiZnVsbG5hbWUiOiJCdWRpIiwicGhvdG8iOiJudWxsIiwidmVyaWZpZWQiOnRydWUsIm90cCI6IjE2Mjg0MSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTI0VDIwOjQ0OjA4LjI1M1oiLCJkZWxldGVkX2F0IjpudWxsLCJyb2xlIjoidXNlciIsImlhdCI6MTY3ODMyNjIxNywiZXhwIjoxNjgwOTE4MjE3fQ.G3nex7YE1SDIgURbGZ7AmCffjXR1ypQyhjnutqbHAnw";
export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url + `/recipes`, {
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

  return (
    <div className="container">
      <NavbarMenu />
      <h1 className="display-4">Home Page</h1>
      {/* main container */}
      <div className="container">
        {data?.map((item, index) => (
          <div key={index + 1}>
            {/* start of content */}
            <div className="container my-5">
              <div className="row">
                <div className="col-4">
                  <img
                    className="img-thumbnail rounded"
                    src={item.photo}
                    style={{ height: "350px" }}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="col-5">
                <p className="text-title">{item.title}</p>  
                </div>
                
              </div>
            </div>
            {/* end of content */}
          </div>
        ))}
      </div>
    </div>
  );
}
