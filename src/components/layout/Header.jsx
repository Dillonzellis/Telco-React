import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Hero";
import Container from "./Container";

function Header() {
  return (
    <Container
      content={
        <div className="flex gap-4 py-4">
          {/* <Nav /> */}
          <Link to={`/`} className="text-xl font-bold">
            Checking
          </Link>
          <Link to={`/products`} className="text-xl font-bold">
            Products
          </Link>
        </div>
      }
    />
  );
}

export default Header;
