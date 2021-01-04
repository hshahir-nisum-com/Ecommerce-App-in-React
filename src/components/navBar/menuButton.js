import { ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

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

  const navLinks = [
    { title: "Men Clothing", path: "/menClothing" },
    { title: "electronics", path: "/electronics" },
    { title: "Fashions", path: "/fashions" },
    { title: "Contact Us", path: "/contactus" },
    { title: "Login / Signup", path: "/login" },
  ];

  return navLinks.map(({ title, path }) => {
    if (title !== navLinks[4].title) {
      return (
        <ListItem button key={title}>
          <Link to={path} className={linkText}>
            {title}
          </Link>
        </ListItem>
      );
    } else {
      return (
        <ListItem button key={title}>
          <Link to={path} className={linkText}>
            {title}
          </Link>
        </ListItem>
      );
    }
  });
}

export default MenuButton;
