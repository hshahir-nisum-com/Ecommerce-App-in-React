import axios from "axios";


async function apiProduct() {
    const { data } = await axios.get("http://localhost:8080/");
    console.log("from dataaaaaaaa", data)
    return data
  }


export default apiProduct
