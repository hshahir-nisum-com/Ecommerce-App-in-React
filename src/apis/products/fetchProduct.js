import axios from "axios";


async function apiProduct() {
    const { data } = await axios.get("http://localhost:8080/");
    return data
  }


export default apiProduct

