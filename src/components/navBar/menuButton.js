import { ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

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
  let { userName } = globalState.userName;
  console.log("usr Name",userName )
 
  const navLinks = [
    { title: "Men Clothing", path: "/menClothing" },
    { title: "electronics", path: "/electronics" },
    { title: "Fashions", path: "/fashions" },
    { title: "Contact Us", path: "/contactus" },
    {  title: userName.length > 1 ? userName + '- Logout' : "Login / Signup", path: "/login" },
  ];

  return navLinks.map(({ title, path }) => {
      return (
        <ListItem button key={title}>
          <Link to={path} className={linkText}>
            {title}
          </Link>
        </ListItem>
      );
    
  });
}

export default MenuButton;
