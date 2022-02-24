import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"></img>
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"></img>
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"></img>
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"></img>
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"></img>
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"></img>
          <span>Series</span>
        </a>
      </NavMenu>
      <UsrImg src="https://media-exp1.licdn.com/dms/image/C5103AQEJuECoPrNUZg/profile-displayphoto-shrink_200_200/0/1574132865037?e=1651104000&v=beta&t=ekdfzTIvJQ79YqNPSmhuV34WNiYokmeN43oc7FWQNbQ" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        // opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span {
        &:after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
    }
  }
`;

const UsrImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
