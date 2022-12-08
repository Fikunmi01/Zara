import axios from "axios";
import React, { useEffect } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./sale.css";
import ReactPaginate from "react-paginate";

export default function Sale() {
  const [manProducts, setManProducts] = React.useState();

  useEffect(() => {
    axios
      .get(
        "https://api.escuelajs.co/api/v1/categories/5/products?offset=1&limit=10"
      )
      .then((res) => {
        console.log(res.data);
        setManProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setManProducts]);

  const fetchPage = async (currentPage) => {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/categories/5/products?offset=9&limit=18"
    );
    const data = await res.json();
    return data;
  };

  const handlePageChange = async (data, dataTwo) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;

    const comment = await fetchPage(currentPage);

    setManProducts(comment);
  };
  return (
    <>
      <div className="sales-div">
        <Navbar />

        <div className="side-nav sideNavTwo">
          <Link to="/clothes">Clothes</Link>

          <Link to="/shoes">Shoes</Link>

          <Link to="/furniture">Furniture</Link>

          <Link className="clicked" to="/sale">
            Sale
          </Link>
        </div>

        {manProducts &&
          manProducts.map((menItem) => (
            <div key={menItem.id} className="parent">
              <div className="child">
                <img src={menItem.images} alt="men products" />
                <p
                  onClick={() => console.log(menItem.title())}
                  className="title-description"
                >
                  {menItem.title}
                </p>

                <p className="price">${menItem.price}</p>
              </div>
            </div>
          ))}

        <div className="side-nav">
          <Link to="/clothes">Clothes</Link>

          <Link to="/shoes">Shoes</Link>

          <Link to="/furniture">Furniture</Link>

          <Link className="active" to="/sale">
            <img src="../images/longLine.png" alt="active png line" />
            Sale
          </Link>
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
