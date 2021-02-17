import { ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Logout from "./logoutUI";

const myStyle = makeStyles(() => ({
  
  linkButton : {
    textDecoration: "none !important",
    textTransform: `uppercase`,
    color: `white`,
    margin : 'auto'
  }
}));

function MenuButton() {
  const { linkButton} = myStyle();
  const globalState = useSelector((state) => state, shallowEqual)
  let userName = localStorage.getItem("uName");

  const navLinks = [
    { title: "Men Clothing", path: "/menClothing", flag: false },
    { title: "electronics", path: "/electronics", flag: false },
    { title: "Fashions", path: "/fashions", flag: false },
    { title: "Contact Us", path: "/contactus", flag: false },
    {
      title: "Login / Signup",
      path: "/login",
      flag: userName ? true : false,
    },
  ];

  return navLinks.map(({ title, path, flag }) => {
    return flag ? (
      <Logout />
    ) : (
      <Link to={path}  key={title} className={linkButton}>
        <ListItem button >
          {title}
        </ListItem>
      </Link>
    );
  });
}

export default MenuButton;
