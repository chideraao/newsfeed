import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledNav } from "../styles/Header";

function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>NEWSFEED</h1>
      </div>
      <StyledNav>
        <Link to="">General</Link>

        <Link to="">Business</Link>

        <Link to="">Entertainment</Link>

        <Link to="">Health</Link>

        <Link to="">Technology</Link>

        <Link to="">Sports</Link>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
