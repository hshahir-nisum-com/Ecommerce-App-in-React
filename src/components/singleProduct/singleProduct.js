import React from 'react'
import Navbar from "../navBar";
import Footer from '../footer/footer'
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";




const MyStyle = makeStyles((theme) => ({
  div: {
    display: "flex",
    flexDirection: "row",
  },
  imgClass:{
      width:"200px",
      height :"250px"
  }
}));

function singleProduct(props) {
      const classes = MyStyle();
    return (
      <div>
        {console.log(props)}
        <Navbar />
        <Container>
          <Box component="div" className={classes.div}>
            <Box>
              <img src={props.location.aboutProps.img} alt="img" className={classes.imgClass}/>
            </Box>
            <Box>
              <p>{props.location.aboutProps.title}</p>
            </Box>
          </Box>
        </Container>
        <Footer />
      </div>
    );
}

export default singleProduct
