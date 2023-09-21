import styled from "styled-components";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { VscEyeClosed } from "react-icons/vsc";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useState } from "react";

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const ShowMenu = () => {
    setDisplayMenu(true);
  };
  const HideMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <Header>
      <div className="photo">
        <img src="../../src/assets/Logo/header-log.png" alt="" />
      </div>

      <div className="list">
        <ul className={`list-item ${displayMenu ? "show-menu" : ""}`}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>

          <div className="close" onClick={HideMenu}>
          <AiFillCloseCircle size={30}   />
        </div>
        </ul>

      </div>

      <div className="cart">
        <BsFillCartPlusFill size={30} />
      </div>

      <div className="menu" onClick={ShowMenu}>
        <IoMdMenu size={40} />
      </div>
    </Header>
  );
}

const Header = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #f5f3ec;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  

  .photo img {
    height: 4rem;
  }

  .list-item {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    padding-right: 6rem;
    transition: right 0.3s ease-in-out;
  }

  .list-item a {
    color: black;
    text-decoration: none;
    font-size: 1.3rem;

    &:hover {
      transition: 0.2s ease-in;
      color: #6bbde2;
    }
  }

  .menu,
  .close {
    display: none;
  }

  .cart {
    position: absolute;
    right: 3.5rem;
  }

  @media (max-width: 650px) {
    .list-item {
      flex-direction: column;
      position: fixed;
      width: 50%;
      min-height: 100vh;
      right: -100%;
      top: 0%;
      z-index: 10;

      

      background-color: #f5f3ec;

     padding: 10rem 0rem 0rem 2rem;
    }

    .menu {
      position: absolute;
      right: 1rem; 
      display: block;
    }

    .close {
      display: block;
    }

    .show-menu {
    right: 0;
  }

  .close{
    position: absolute;
    top: 3rem;
    right: 2rem;
  }

  .cart {
    position: absolute;
    right: 5rem;
  }


  }


`;
