import styled from "styled-components";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from "react";
import { NavLink , Link} from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const value = useSelector((state) => state.cart.val);
  const [displayMenu, setDisplayMenu] = useState(false);

  const ShowMenu = () => {
    setDisplayMenu(true);
  };

  const HideMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <Header>
      <Link to='/'>
      <div className="photo">
        <img src="/Logo/header-log.png" alt="" />
      </div>
      </Link>

      <div className="list">
        <ul className={`list-item ${displayMenu ? "show-menu" : ""}`}>
          <li onClick={HideMenu}>
            <NavLink to='/' className='anchorTag'>Home</NavLink>
          </li>
          <li onClick={HideMenu}>
            <NavLink to='/Shop' className='anchorTag'>Shop</NavLink>
          </li>
          <li onClick={HideMenu}>
            <NavLink to='/Blog'>Blog</NavLink>
          </li>
          <li onClick={HideMenu}>
            <NavLink to='/About'>About</NavLink>
          </li>
          <li onClick={HideMenu}>
            <NavLink to='/Contact'>Contact</NavLink>
          </li>

          <div className="close" onClick={HideMenu}>
            <AiFillCloseCircle size={30} />
          </div>
        </ul>
      </div>

      <div className="cart">
        {
          value.length === 0
            ? <NavLink to='/cart' className='cartitem'><BsFillCartPlusFill size={30} color="black" /></NavLink>
            : <NavLink to='/cart' className='cartitem'><BsFillCartPlusFill size={30} color="black" />{value.length}</NavLink>
        }
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
  background-color: #ffffff;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0.5px 0.5px 2px #686867;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;

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

    &:focus {
      color: #6bbde2;
    }
  }

  .menu, .close {
    display: none;
    cursor: pointer;
  }

  .cart {
    position: absolute;
    right: 3.5rem;
    cursor: pointer;
    
    .cartitem {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: flex-start;
    }
  }

  @media (max-width: 650px) {
    .list-item {
      flex-direction: column;
      position: fixed;
      width: 50%;
      min-height: 100vh;
      right: -100%;
      top: 0;
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

    .close {
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
