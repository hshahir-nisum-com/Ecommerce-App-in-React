import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

function Product(props) {
    
  return (
    <Container>
      <Box>
        <Link
          to={{
            pathname: `/productdisplay/${val.id}`,
            aboutProps: {
              img: val.image,
              title: val.title,
              price: val.price,
              id: val.id,
              description: val.description,
            },
          }}
          className="electronic-Box"
        >
          <div className="electronic-container">
            <div>
              <img src={val.image} alt="img Missing" id={val.id} />{" "}
            </div>
            <div className="electronic-text">
              <span>{val.title}</span>
              <div>
                <span style={{ color: "orange" }}>Rs : {val.price}</span>
              </div>
            </div>
            <div>
              <span>{val.discount}</span>
            </div>
          </div>
        </Link>
      </Box>
    </Container>
  );
}

export default Product;
