import React from "react";

import "./navbar.css";
import Searchicon from "@mui/icons-material/Search";
import { Avatar, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="left">
            <div className="navlogo">
              <NavLink to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="nav_searchbaar">
              <input type="text" name="" id="" />
              <div className="search_icon">
                <Searchicon id="search" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="nav_btn">
              <NavLink to="/login">Sing-In</NavLink>
            </div>
            <div className="cart_btn">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="icon" />
                <p>cart</p>
              </Badge>
            </div>
            <Avatar className="avtar" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
