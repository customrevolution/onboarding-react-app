const serverUrl = "http://localhost:7878";

const getProductsUrl = "/products";

const getProducts = () => {
  return fetch(`${serverUrl}${getProductsUrl}`).then((res) => {
    return res.json();
  });
};

export default getProducts;
