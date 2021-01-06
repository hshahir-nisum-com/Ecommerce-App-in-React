import React from "react";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <IconButton
      variant="h6"
      component="h1"
      style={{
        textAlign: "left",
        textTransform: "uppercase",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        {" "}
        Super store{" "}
      </Link>
    </IconButton>
  );
}

export default Logo;
