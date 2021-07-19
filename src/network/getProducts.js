const serverUrl = "http://localhost:7878";

const getProductsUrl = "/products";

const getProducts = async (category = "", id = "") => {
  const finalUrl = `${serverUrl}${getProductsUrl}${category}${id}`;
  const fetchedItems = await fetch(finalUrl);
  console.log("------------");
  console.log(finalUrl);
  return await fetchedItems.json();
};

export default getProducts;

// const getProducts = (category = "", id = "") => {
//   const finalUrl = `${serverUrl}${getProductsUrl}${category}${id}`;
//   return fetch(finalUrl).then((res) => {
//     console.log("------------");
//     console.log(finalUrl);
//     return res.json();
//   });
// };
