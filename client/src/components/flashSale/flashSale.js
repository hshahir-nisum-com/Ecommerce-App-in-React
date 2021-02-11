import React from "react";
import Timer from "./timer";
import "./flashSale.css";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchProduct from "../../apis/products/fetchProduct";
import { fetchedData } from "../../redux/action/action";
import Product from "../product/Products";

function FlashSale(props) {
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
      if (data.length < 1) {
        const data = await fetchProduct();
        dispatch(fetchedData(data));
      }
    }
    fetchData();
  }, []);

  let myArr = data.filter(
    (category) =>
      category.category === "electronics" ||
      category.category === "women clothing"
  );

  return (
    <div>
      <br />
      <h1> Flash Sale</h1>
      <Timer />
      <hr />

      <ul className={listDirection()}>
        {myArr.slice(0, 4).map((val) => {
          return (
            <li id={val.id} key={val.id}>
              <Product
                id={val.id}
                img={val.image}
                title={val.title}
                price={val.price}
                description={val.description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  ); 
}
export default withWidth()(FlashSale);
 