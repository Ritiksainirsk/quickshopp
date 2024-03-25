import React, { useContext, useState } from "react";
import Shopp from "../Assets/shopping-bag.png";
import Cart from "../Assets/cart.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopCantext";
import { IoMenu } from "react-icons/io5";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");

  const { getTotalItems } = useContext(ShopContext);


  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Shop", "Men", "Women", "Kids"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ul className="mobile-navmenu">
                <li
                 
                >
                  <Link
                    to={`${
                      (text === "Shop" && "/") ||
                      (text === "Men" && "/mens") ||
                      (text === "Women" && "/womens") ||
                      (text === "Kids" && "/kids")
                    }`}
                    onClick={() => setShowMobileMenu(false)}
                    style={{ textDecoration: "none" }}
                  >
                    {text}
                  </Link>
                </li>
              </ul>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              to={"/cart"}
              className="myorders"
              onClick={() => setShowMobileMenu(false)}
              style={{ textDecoration: "none" }}
            >
              <p>My orders</p>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItemButton>
          {localStorage.getItem("auth-token") ? (
            <p
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="login-out-btn"
            >
              Logout
            </p>
          ) : (
            <p>
              <Link
                onClick={() => setShowMobileMenu(false)}
                to={"/login"}
                style={{ textDecoration: "none"}}
                className="login-out-btn"
              >
                Login
              </Link>
            </p>
          )}
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="humburger">
            <div>
              <div onClick={toggleDrawer(true)}>
                <IoMenu />
              </div>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>
          </div>
          <img src={Shopp} alt="" />
          <p>Shop</p>
        </div>

        <ul className="navmenu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link to={"/mens"} style={{ textDecoration: "none" }}>
              {" "}
              Men
            </Link>{" "}
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link to={"/womens"} style={{ textDecoration: "none" }}>
              Women
            </Link>{" "}
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to={"/kids"} style={{ textDecoration: "none" }}>
              Kids
            </Link>{" "}
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              {" "}
              Logout
            </button>
          ) : (
            <button>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                Login
              </Link>
            </button>
          )}

          <Link to={"/cart"}>
            <img src={Cart} alt="" />
          </Link>
          <div className="cart-count">{getTotalItems()}</div>
        </div>        
      </div>
    </>
  );
}
