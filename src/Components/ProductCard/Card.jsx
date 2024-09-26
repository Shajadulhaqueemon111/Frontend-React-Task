import { useEffect, useState } from "react";
import ProductsAllCard from "./ProductsAllCard";

const Card = () => {
  const [productsCard, setProductCard] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((res) => {
        setProductCard(res);
      });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center mb-10 mt-10">
          My Product Card
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-3/4">
        {productsCard?.map((products) => (
          <ProductsAllCard key={products._id} products={products} />
        ))}
      </div>
    </div>
  );
};

export default Card;
