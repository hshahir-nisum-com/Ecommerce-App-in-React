import axios from "axios";

async function apiProduct() {
  const { data } = await axios.get("http://localhost:8080/get");

  for (let i in data) {
    Object.keys(data[i]).forEach(function (key) {
      if (key === "category") {
        data[i][key] = data[i][key][key];
      }
    });
  }

  return data;
}

export default apiProduct;
