import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

function DrawerMenu() {
  const navLinks = [
    { title: "Men Clothing", path: "/menClothing" },
    { title: "electronics", path: "/electronics" },
    { title: "Fashions", path: "/fashions" },
    { title: "Contact Us", path: "/contactus" },
    { title: "Login / Signup", path: "/login" },
  ];

  return navLinks.map(({ title, path }) => {

    return (
      <Link key={path} to={path}
          style = {{ textDecoration: "none" ,
          color: "inherit",}}
          
      >
        <MenuItem>{title}</MenuItem>
      </Link>
    );
  });
}

export default DrawerMenu;
