import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const menu = {
    height: "41rem",
    paddingBottom: "11.4%",
    paddingTop: "4%",
    backgroundColor: "#e5e5e5",
    top: "13rem",
    width: "100%",
    left: "0%",
    position: "absolute",
    zIndex: "1",
  };

  return (
    <>
      <div className="navbar ">
        {toggleMenu ? (
          <div className="nav-menu">
            <img
              src="../images/hamburgerClose.png"
              alt="hamburger icon"
              onClick={() => setToggleMenu(false)}
            />

            <Link id="hamburger-link" to="/">
              <p>CLOSE</p>
            </Link>
          </div>
        ) : (
          <div className="nav-menu">
            <img
              src="../images/hamburgerIcon.png"
              alt="hamburger icon"
              onClick={() => setToggleMenu(true)}
            />

            <Link id="hamburger-link" to="/">
              <p>MENU</p>
            </Link>
          </div>
        )}

        {toggleMenu && (
          <>
            <div style={menu} className="menu">
              <div className="first-menu-link">
                <Link id="clothes" to="/clothes">
                  Clothes
                </Link>
              </div>

              <div className="second-menu-link">
                <Link id="shoes" to="/shoes">
                  Shoes
                </Link>

                <Link id="furniture" to="/furniture">
                  Furniture
                </Link>
              </div>

              <div className="third-menu-link unique">
                <Link id="stories" to="stories">
                  Stories
                </Link>

                <Link id="sale" to="/sale">
                  SALE
                </Link>
              </div>
            </div>
          </>
        )}

        {search ? (
          <div className="nav-center">
            <img
              src="../images/hamburgerClose.png"
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => setSearch(false)}
            />

            <p className="search-close" style={{ cursor: "default" }}>
              CLOSE
            </p>
          </div>
        ) : (
          <div className="nav-center">
            <p onClick={() => setSearch(true)}>SRCH</p>
          </div>
        )}

        {search && (
          <div className="search-input">
            <input placeholder="What are you looking for?" type="text" />
          </div>
        )}

        <div className="nav-end">
          <img
            src="../images/longLine.png"
            alt="long line"
            className="long-line"
          />

          <img
            src="../images/shortLine.png"
            alt="short line"
            className="short-line"
          />

          <p>CART</p>

          <span>3</span>
        </div>
      </div>
    </>
  );
}
