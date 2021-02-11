import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import { shallowEqual, useSelector } from "react-redux";
import Logout from './logoutUI'

function DrawerMenu() {

  const globalState = useSelector((state) => state, shallowEqual);
  let { userName } = globalState.userName;
  console.log("usr Name",userName )

  const navLinks = [
    { title: "Men Clothing", path: "/menClothing", flag: false },
    { title: "electronics", path: "/electronics", flag: false },
    { title: "Fashions", path: "/fashions", flag: false },
    { title: "Contact Us", path: "/contactus", flag: false },
    {
      title: "Login / Signup",
      path: "/login",
      flag: userName.length > 1 ? true : false,
    },
  ];
  return navLinks.map(({ title, path , flag }) => {

    return flag ? (
      <Logout />
    ) : (
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
