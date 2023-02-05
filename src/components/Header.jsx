import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Hero from "./Hero";

function Header() {
  return (
    <Container
      content={
        <div className="py-4">
          {/* <Nav /> */}
          <Link to={`products`} className="text-xl font-bold">
            Products
          </Link>
        </div>
      }
    />
  );
}

export default Header;
