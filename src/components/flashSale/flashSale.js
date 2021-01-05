import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Timer from "./timer";
import "./flashSale.css";
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

function FlashSale(props) {
  const saleList = [
    {
      img: img1,
      title: "NESTLE Everyday 900gm",
      price: 915,
      actualPrice: 930,
      discount: "2%",
      id: "1",
    },
    {
      img: img2,
      title: "Buy 1 get 1 free Bluetooth handsfree",
      price: 1015,
      actualPrice: 2000,
      discount: "40%",
      id: "2",
    },
    {
      img: img6,
      title: "Finger Gloves",
      price: 120,
      actualPrice: 190,
      discount: "20%",
      id: "3",
    },
    {
      img: img3,
      title: "cocomo 5 pack",
      price: 5,
      actualPrice: 5,
      discount: "0%",
      id: "4",
    },
    {
      img: img5,
      title: "Black Disposable protective mask",
      price: 100,
      actualPrice: 120,
      discount: "10%",
      id: "5",
    },
    {
      img: img4,
      title: "U1 Hnadfree high bass good quality",
      price: 129,
      actualPrice: 500,
      discount: "74%",
      id: "6",
    },
  ];

  const listDirection = () => {
    let clsValue = isWidthUp("sm" || "lg", props.width)
      ? "unorder-list"
      : "unorder-list-sm";
    return clsValue;
  };

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


   
  let myArr = data.filter((category) => category.category === "electronics" || category.category === "women clothing");

  //myArr =  myArr.slice(0,10)

  //  console.log(timerComponents)
  return (
    <div>
      <Container>
        <br />
        <h1> Flash Sale</h1>
        <div id="parent-flash-sale">
          <Timer />
          <hr />

          <div id="flashSale2">
            <ul className={listDirection()}>
              {myArr.slice(0,4).map((val) => {
                return (
                  <li id={val.id} className="li" key={val.id}>
                    <Link
                      to={{
                        pathname: `/productdisplay/${val.id}`,
                        aboutProps: {
                          img: val.image,
                          title: val.title,
                          price: val.price,
                          discount: val.discount,
                          actualPrice: val.actualPrice,
                          id: val.id,
                        },
                      }}
                      className="flash-box"
                    >
                      <div>
                        <div>
                          <img src={val.image} alt="img Missing" id={val.id} />{" "}
                        </div>
                        <div className="FMCG2_1Text">
                          <span>{val.title}</span>
                          <div>
                            <span style={{ color: "orange" }}>
                              Rs: {val.price}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span>{val.discount}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default withWidth()(FlashSale);
