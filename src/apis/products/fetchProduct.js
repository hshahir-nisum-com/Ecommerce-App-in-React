import axios from "axios";


async function apiProduct() {
<<<<<<< HEAD
    const { data } = await axios.get("http://localhost:8080/");
=======
    const { data } = await axios.get("http://localhost:8081/");
    console.log("from dataaaaaaaa", data)
>>>>>>> 239b9f38056921b3237e2db41f2b45960a54398c
    return data
  }


export default apiProduct

