import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

let num1 = 2;
let num2 = 4;

function addNum() {
  return num1 + num2;
}

console.log(addNum());

export default function Footer() {
  return (
    <>
      <div className="footer">
        <img src="./images/footer-logo.png" alt="" className="footer-logo" />

        <div className="square-container">
          <Link to="">CONNECT US</Link>

          <Link to="">CONNECT US</Link>

          <Link to="">CONNECT US</Link>

          <Link className="active-footer-link" onClick={addNum()} to="">
            INSTAGRAM
          </Link>
          <Link className="active-footer-link" to="">
            FACEBOOK
          </Link>
          <Link className="active-footer-link" to="">
            PINTEREST
          </Link>

          <Link className="active-footer-link" to="">
            YOUTUBE
          </Link>

          <Link className="active-footer-link" to="">
            VK
          </Link>

          <Link to="">CONNECT US</Link>

          <Link to="">CONNECT US</Link>

          <Link to="">CONNECT US</Link>

          <Link to="">CONNECT US</Link>
        </div>

        <div className="lower-footer">
          <Link to="">PRIVACY POLICY</Link>/<Link to="">TERMS OF USE</Link>
        </div>
      </div>
    </>
  );
}
