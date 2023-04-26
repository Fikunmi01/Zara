import axios from "axios";
import React, { useEffect } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./man.css";
import ReactPaginate from "react-paginate";

export default function Man() {
  const [manProducts, setManProducts] = React.useState();

  useEffect(() => {
    axios
      .get(
        "https://api.escuelajs.co/api/v1/categories/4/products?offset=2&limit=11"
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
      "https://api.escuelajs.co/api/v1/categories/4/products?offset=12&limit=21"
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
      <div className="men-div">
        <Navbar />

        <div className="side-nav sideNavTwo">
          <Link to="/clothes">Clothes</Link>

          <Link className="clicked" to="/shoes">
            Shoes
          </Link>

          <Link to="/furniture">Furniture</Link>

          <Link to="/sale">Sale</Link>
        </div>

        <div className="main-products-div">
          <span className="spaNone">
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
          </span>

          <span className="spaNtwo">
            <div className="side-nav">
              <Link to="/clothes">Clothes</Link>

              <Link to="/shoes" className="active">
                <img src="../images/longLine.png" alt="active png line" />
                Shoes
              </Link>

              <Link to="/furniture">Furniture</Link>

              <Link to="/sale">Sale</Link>
            </div>

            <div className="side-nav-two">
              <div className="active-two-heading" style={{marginBottom:`2rem`}}>
                <hr
                  style={{
                    color: "#D2DED2",
                    width: "17rem",
                    position: "absolute",
                    bottom: "4rem",
                    right: "4rem",
                    paddingRight: `10%`,
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

              <div className="active-two-heading " style={{marginBottom:`2rem`}}>
                <p>Color</p>  

                <select>
                  <option>Any</option>

                  <option>Red</option>

                  <option>Blue</option>

                  <option>Black</option>

                  <option>Grey</option>

                  <option>Yellow</option>

                  <option>Orange</option>
                </select>
              </div>

              <div className=" active-two-heading" style={{marginBottom:`2rem`}}>
                <p>Additional</p>

                <select>
                  <option>Any</option>

                  <option>S</option>

                  <option>M</option>

                  <option>L</option>
                </select>
              </div>

              <div className=" active-two-heading " style={{marginBottom:`2rem`}}>
                <p>Price</p>

                <select>
                  <option>Any</option>

                  <option>S</option>

                  <option>M</option>

                  <option>L</option>
                </select>
              </div>
            </div>
          </span>
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
