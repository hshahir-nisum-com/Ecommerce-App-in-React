import { ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Logout from './logoutUI'

const myStyle = makeStyles(() => ({
  linkText: {
    textDecoration: "none !important",
    textTransform: `uppercase`,
    color: `white`,
    width: "max-content",
  },
}));

function MenuButton() {
  const { linkText } = myStyle();

  const globalState = useSelector((state) => state, shallowEqual);
  let  userName  = localStorage.getItem('uName')
  console.log("usr Name", userName);

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
      <Logout/>
    ) : (
      <ListItem button key={title}>
        <Link to={path} className={linkText}>
          {title}
        </Link>
      </ListItem>
    );
  });
}

export default MenuButton;
