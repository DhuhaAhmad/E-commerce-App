import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Navbar.scss"
import Cart from "../Cart/Cart";
export const Navbar = () => {

  const [open,setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2012/04/23/16/15/flags-38754_960_720.png"
              height={10}
              alt=""
            />
            <KeyboardArrowDownIcon />
            <div className="item">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className="link" to="/products/1">Women</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/2">Men</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/3">Children</Link>
            </div>
          </div>
        </div>

        <div className="center">
          <Link to="/">LAMASTORE</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>

          <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderOutlinedIcon/>

            <div className="cartIcon" onClick={()=>{setOpen(!open)}}>
    <ShoppingCartOutlinedIcon/>
    <span>0</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart/>}
    </div>
  );
};
