import React,{useState} from 'react'
import Footer from '../footer/footer';
import Strip from '../slider/strip'
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { addtocart } from "../../redux/action/action";


const MyStyle = makeStyles(() => ({
  div: {
    display: "flex",
    flexDirection: "row",
  },
  imgClass:{
      width:"30vw",
      height :"50vh",
      margin : '50px'
  },
  txtBox :{
    width : '40vw',
  },
  butButtonStyle :{
    margin : '0 auto'
  },
  buyButton:{
    width  : '30vw',
    marginTop : '30px',
    marginLeft : '5vw',
  }

}));

function SingleProduct(props) {

  const [count, setcount]= useState(0);

      const classes = MyStyle();
      const dispatch = useDispatch();
      const data = useSelector((state) => state, shallowEqual);
      console.log('data from sigle product', data)
      const {img,
        title,
        price,
        discount,
        actualPrice,
        id} = props.location.aboutProps;
    return (
      <div>
        {console.log(props)}
        <Strip/>
        <Container>
          <Box component="div" className={classes.div}>
            <Box>
              <img src={img} alt="img" className={classes.imgClass}/>
            </Box>
            <Box className={classes.txtBox}>
              <h1>{title}</h1> 
              <p>Rs : {actualPrice}  {" "} <br/>
              <span>Discount : {discount} </span> <br/>
              <span>New Price : {price}</span> <br/>
              </p>
              <Box component="div" className={classes.btnGrp}>
                Quantity {" "}

                <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={ ()=>{
                  dispatch( addtocart(props.location.aboutProps))
                    setcount(
                      count+1
                    )
                  }

                }>+</Button>
                { <Button disabled>{count}</Button>}
                { count &&  <Button
                  onClick={ ()=>{
                    setcount(
                      count-1
                    )
                  }}
                
                 >-</Button>}
                </ButtonGroup>
              </Box>
              <Box component="div" className={classes.butButtonStyle}>
              
              <Button
                    variant="contained"
                    color="primary"
                    className={classes.buyButton}
                    fullWidth
              >
                Buy Now
              </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer />
      </div>
    );
}

export default SingleProduct




