import axios from "axios";
import { useDispatch } from "react-redux";

async function FetchCart() {
  const dispatch = useDispatch();

  const userFind = await axios.get("http://localhost:8080/getCart", {
    params: {
      user: localStorage.getItem("userID"),
    },
  });
  if (userFind.data.length) {
    let { products } = userFind.data[0];
    let count = 0;

    for (let i = 0; i < products.length; i++) {
      console.log("products[i] :::", products[i]);
      // dispatch(
      //   cartItem({
      //     productId: data_temp.id,
      //     quantity: count,
      //     name: title,
      //     price,
      //   })
      // );
      // if (
      //   localStorage.getItem("userID") &&
      //   userFind.data[0].user === localStorage.getItem("userID")
      // ) {
      //   count = count + parseInt(products[i].quantity);
      // }
    }

    return count;
  }

  return <div></div>;
}

export default FetchCart;
