import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const MyStyle = makeStyles(() => ({
  ProductBox: {
    "&:hover": {
      boxShadow: "0px 0px 5px grey",
    },
  },
  linkBox: {
    textDecoration: "none",
  },
  container: {
    width: "250px",
    height: "300px",
    padding: "10px 10px 10px 30px",
    margin: "0 auto",
  },
  img: {
    width: "220px",
    height: "200px",
    marginBottom: "10px",
  },
}));

function Product(props) {
  const { id, img, title, price, description } = props;
  const classes = MyStyle();

  return (
    <div>
      <Box className={classes.ProductBox}>
        <Link
          to={{
            pathname: `/productdisplay/${id}`,
            aboutProps: {
              img: img,
              title: title,
              price: price,
              id: id,
              description: description,
            },
          }}
          className={classes.linkBox}
        >
          <div className={classes.container}>
            <div>
              <img
                src={img}
                alt="img Missing"
                id={id}
                className={classes.img}
              />{" "}
            </div>
            <div className="title-text">
              <span>{title}</span>
              <div>
                <span style={{ color: "orange" }}>Rs : {price}</span>
              </div>
            </div>
          </div>
        </Link>
      </Box>
    </div>
  );
}

export default Product;
