async function fetchCart() {
  let userFind;
  const data = await fetch("http://localhost:8080/checkquantity")
    .then((res) => res.json())
    .then((json) => (userFind = json));

  console.log("userID UI ", localStorage.getItem("userID") , " userFind[i].userid ::",userFind[0].userid );

  if (userFind.length > 1) {
    let count = 0;
    for (let i = 0; i < userFind.length; i++) {
      if (localStorage.getItem("userID") &&  userFind[i].userid === localStorage.getItem("userID")) {
        count = count + parseInt(userFind[i].products.quantity);
        console.log("in IF :::", count);

      }
    }
    return count;
  }

  return 0;
}

export default fetchCart;
