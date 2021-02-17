import React from "react";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
    <IconButton
      variant="h6"
      component="h1"
      style={{
        textAlign: "left",
        textTransform: "uppercase",
        color: "white",
      }}
    >
      
        {" "}
        Super store{" "}
      
    </IconButton>
    </Link>
  );
}

export default Logo;
