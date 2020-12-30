import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./menClothing.css";
import { useDispatch} from "react-redux";
import { fetchedData } from "../../redux/action/action";

function ElectronicD() {
  const [temp, settemp] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch( fetchedData(data))
      let myArr = data.filter(
        (category) => category.category == "men clothing"
      );
      console.log("from api ", myArr);
      settemp(myArr);
    }
    fetchData();
  }, [temp]);

console.log("from api call", temp);

  return (
    <div>
      <Container>
        <br />
        <h1> Top Selling</h1>

        <div>
          <GridList className="unorder-list" cellHeight={320} cols={3}>
            {temp.map((val) => {
              return (
                <span key={val.id} className="menClothing-wrapper">
                  {val.category === "men clothing" && (
                    <GridListTile key={val.id} className="li-menCat-sale">
                      <Link
                        to={{
                          pathname: "/productdisplay",
                          aboutProps: {
                            img: val.image,
                            title: val.title,
                            price: val.price,
                            id: val.id,
                            description: val.description,
                          },
                        }}
                        className="menCat-Box"
                      >
                        <div className="men-clothing-container">
                          <div>
                            <img
                              src={val.image}
                              alt="img Missing"
                              id={val.id}
                            />{" "}
                          </div>
                          <div className="men-clothing-text">
                            <span>{val.title}</span>
                            <div>
                              <span style={{ color: "orange" }}>
                                Rs : {val.price}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span>{val.discount}</span>
                          </div>
                        </div>
                      </Link>
                    </GridListTile>
                  )}
                </span>
              );
            })}
          </GridList>
        </div>
      </Container>
    </div>
  );
}

export default ElectronicD;
