const serverUrl = "http://localhost:7878";

const getProductsUrl = "/products";

const getProducts = (category = "") => {
  return fetch(`${serverUrl}${getProductsUrl}${category}`).then((res) => {
    return res.json();
  });
};

export default getProducts;
