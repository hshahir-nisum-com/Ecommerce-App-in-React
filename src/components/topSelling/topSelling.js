import {  Container } from "@material-ui/core";
import React  from "react";
import { Link} from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./topSelling.css";
import img1 from "./images/flash1.png";
import img2 from "./images/flash2.jpg";
import img3 from "./images/flash3.png";
import img4 from "./images/flash4.jpg";
import img5 from "./images/flash5.png";
import img6 from "./images/flash6.jpg";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import  { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import fetchProduct from '../../apis/products/fetchProduct';
import { fetchedData } from "../../redux/action/action";

export default function FlashSale() {
  const saleList = [
    {
      img: img1,
      title: "NESTLE Everyday 900gm",
      price: "RS. 915",
      actualPrice: "930",
      discount: "2%",
      id: "firstImg",
    },
    {
      img: img2,
      title: "Buy 1 get 1 free Bluetooth handsfree",
      price: "RS. 1015",
      actualPrice: "2000",
      discount: "40%",
      id: "secondImg",
    },
    {
      img: img3,
      title: "Finger Gloves",
      price: "RS. 120",
      actualPrice: "190",
      discount: "20%",
      id: "thirdImg",
    },
    {
      img: img4,
      title: "cocomo 5 pack",
      price: "RS. 5",
      actualPrice: "5",
      discount: "0%",
      id: "fourthImg",
    },
    {
      img: img5,
      title: "Black Disposable protective mask",
      price: "RS. 100",
      actualPrice: "120",
      discount: "10%",
      id: "fithImg",
    },
    {
      img: img6,
      title: "U1 Hnadfree high bass good quality",
      price: "RS. 129",
      actualPrice: "500",
      discount: "74%",
      id: "sixImg",
    },
    {
      img: img1,
      title: "NESTLE Everyday 900gm",
      price: "RS. 915",
      actualPrice: "930",
      discount: "2%",
      id: "firstImg",
    },
    {
      img: img2,
      title: "Buy 1 get 1 free Bluetooth handsfree",
      price: "RS. 1015",
      actualPrice: "2000",
      discount: "40%",
      id: "secondImg",
    },
    {
      img: img3,
      title: "Finger Gloves",
      price: "RS. 120",
      actualPrice: "190",
      discount: "20%",
      id: "thirdImg",
    },
    {
      img: img4,
      title: "cocomo 5 pack",
      price: "RS. 5",
      actualPrice: "5",
      discount: "0%",
      id: "fourthImg",
    },
    {
      img: img5,
      title: "Black Disposable protective mask",
      price: "RS. 100",
      actualPrice: "120",
      discount: "10%",
      id: "fithImg",
    },
    {
      img: img6,
      title: "U1 Hnadfree high bass good quality",
      price: "RS. 129",
      actualPrice: "500",
      discount: "74%",
      id: "sixImg",
    },
    {
      img: img1,
      title: "NESTLE Everyday 900gm",
      price: "RS. 915",
      actualPrice: "930",
      discount: "2%",
      id: "firstImg",
    },
    {
      img: img2,
      title: "Buy 1 get 1 free Bluetooth handsfree",
      price: "RS. 1015",
      actualPrice: "2000",
      discount: "40%",
      id: "secondImg",
    },
    {
      img: img3,
      title: "Finger Gloves",
      price: "RS. 120",
      actualPrice: "190",
      discount: "20%",
      id: "thirdImg",
    },
    {
      img: img4,
      title: "cocomo 5 pack",
      price: "RS. 5",
      actualPrice: "5",
      discount: "0%",
      id: "fourthImg",
    },
    {
      img: img5,
      title: "Black Disposable protective mask",
      price: "RS. 100",
      actualPrice: "120",
      discount: "10%",
      id: "fithImg",
    },
    {
      img: img6,
      title: "U1 Hnadfree high bass good quality",
      price: "RS. 129",
      actualPrice: "500",
      discount: "74%",
      id: "sixImg",
    },
  ];



  
  const globalState = useSelector((state) => state, shallowEqual);
  let { data } = globalState.fetchedData;

  const dispatch = useDispatch();
    useEffect(() => {
      async function fetchData() {
        if (data.length<1){
        const data = await fetchProduct()
        dispatch( fetchedData(data))
        }
      }
      fetchData();
    }, []);


   
  let myArr = data.filter((category) => category.category === "men clothing" || category.category === "women clothing");

  return (
    <div>
      <Container>
        <br />
        <h1> Top Selling</h1>
        
        <div id="flashSale2FlashItems">
          <GridList className="unorderList" cellHeight={320} cols={7}>
            {myArr.map((val) => {
              return (
                <GridListTile id={val.id} className="li-flash-sale">
                  <Link
                  to={{
                        pathname: `/productdisplay/${val.id}`,
                        aboutProps: {
                          img: val.img,
                          title: val.title,
                          price: val.price,
                          discount: val.discount,
                          actualPrice: val.actualPrice,
                          id: val.id,
                        },
                      }}
                   className="flashBox">
                    <div>
                      <div>
                        <img src={val.image} alt="img Missing" id={val.id} />{" "}
                      </div>
                      <div className="FMCG2_1Text">
                        <span>{val.title}</span>
                        <div>
                          <span style={{ color: "orange" }}>{val.price}</span>
                        </div>
                        <span style={{ textDecoration: "line-through" }}>
                          Rs {val.actualPrice}
                        </span>
                      </div>
                      <div>
                        <span>{val.discount}</span>
                      </div>
                    </div>
                  </Link>
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      </Container>
    </div>
  );
}
