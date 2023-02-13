import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Container from "./layout/Container";

function Header() {
  return (
    <Container>
      <div className="[ header ] flex gap-4 py-4">
        {/* <Nav /> */}
        <Link to={`/`} className="text-xl font-bold">
          Checking
        </Link>
        <Link to={`/products`} className="text-xl font-bold">
          Products
        </Link>
      </div>
    </Container>
  );
}

export default Header;
