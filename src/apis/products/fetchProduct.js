import axios from "axios";


async function apiProduct() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log("data from api",data)
    return data
  }


export default apiProduct

