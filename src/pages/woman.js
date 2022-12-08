import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "./woman.css";
import ReactPaginate from "react-paginate";
import Footer from "../components/footer";

export default function Woman() {
  const [products, setProducts] = React.useState();

  useEffect(() => {
    axios
      .get(
        "https://api.escuelajs.co/api/v1/categories/1/products?offset=0&limit=9"
      )
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProducts]);

  const fetchPage = async (currentPage) => {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/categories/1/products?offset=9&limit=18"
    );
    const data = await res.json();
    return data;
  };

  const handlePageChange = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;

    const comment = await fetchPage(currentPage);

    setProducts(comment);
  };

  return (
    <>
      <div className="women-div">
        <Navbar />

        <div className="side-nav sideNavTwo">
          <Link className="clicked" to="/clothes">
            Clothes
          </Link>

          <Link to="/shoes">Shoes</Link>

          <Link to="/furniture">Furniture</Link>

          <Link to="/sale">Sale</Link>
        </div>

        <div>
          {products &&
            products.map((women, i) => (
              <div key={women.id} className="parent">
                <div className="child">
                  <img src={women.images} alt="" />
                  <p className="title-description">{women.title}</p>

                  <p className="price">${women.price}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="side-nav">
          <Link to="/woman" className="active">
            <img src="../images/longLine.png" alt="active png line" />
            Clothes
          </Link>

          <Link to="/shoes">Shoes</Link>

          <Link to="/furniture">Furniture</Link>

          <Link to="/sale">Sale</Link>
        </div>

        <div className="side-nav-two">
          <div className="active-two-heading">
            <img
              src="../images/shortLine.png"
              alt="short active png"
              className="active"
            />

            <hr
              style={{
                color: "#D2DED2",
                width: "17rem",
                position: "absolute",
                bottom: "4rem",
                right: "4rem",
              }}
            />
            <p id="size-genLaptop">Size</p>

            <select>
              <option>S, M, L</option>

              <option>S</option>

              <option>M</option>

              <option>L</option>
            </select>
          </div>

          <div className="non-active">
            <p>Color</p>

            <select>
              <option>Any</option>

              <option>S</option>

              <option>M</option>

              <option>L</option>
            </select>
          </div>

          <div className=" non-active  div-two">
            <p>Additional</p>

            <select>
              <option>Any</option>

              <option>S</option>

              <option>M</option>

              <option>L</option>
            </select>
          </div>

          <div className=" non-active  div-three">
            <p>Price</p>

            <select>
              <option>Any</option>

              <option>S</option>

              <option>M</option>

              <option>L</option>
            </select>
          </div>
        </div>
      </div>

      <ReactPaginate
        previousLabel=""
        nextClassName="new-page-button"
        onClick={handlePageChange}
        nextLabel="more"
      />

      <Footer />
    </>
  );
}
