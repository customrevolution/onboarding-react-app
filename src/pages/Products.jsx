import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";
import Modal from "../components/layout/Modal/Modal";

import getProducts from "../network/getProducts";

const Products = () => {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getProducts().then((res) => {
      setData(res);
    });
  }, []);

  if (!data) {
    return (
      <div>
        <h1>Products</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Modal</button>
      <Modal
        title={"title"}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <p>
          <span>Svetlio</span> <br />
          <span>Valeri</span> <br />
          <span>Denis</span> <br />
          <span>Joro</span> <br />
          <span>Andrey</span> <br />
        </p>
      </Modal>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <Product title={product.title} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
